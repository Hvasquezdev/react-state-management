import React from "react";
import { useStateManagement } from "../state/useStateManagement";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [state, dispatch] = useStateManagement();
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);
  // const [currentView, setCurrentView] = React.useState("home");

  React.useEffect(() => {    
    if (state.loading) {
      setTimeout(() => {
        dispatch({ type: "TOGGLE_ERROR", error: value !== SECURITY_CODE});
        dispatch({ type: "TOGGLE_LOADING", loading: false });
      }, 3000);
    }

    // eslint-disable-next-line
  }, [state.loading]);

  const handleDeleteRequest = () => {
    const hasError = value !== SECURITY_CODE;
    dispatch({ type: "TOGGLE_ERROR", error: hasError});

    if (!hasError) {
      setValue("");
      dispatch({ type: "UPDATE_VIEW", view: "confirm" });
    }

    console.log("Holas", state);
  };

  if (state.currentView === "confirm") {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>Seguro quieres eliminar {name}?</p>

        <button onClick={() => dispatch({ type: "UPDATE_VIEW", view: "deleted"})}>Si, eliminar</button>
        <button onClick={() => dispatch({ type: "UPDATE_VIEW", view: "home"})}>No, volver</button>
      </div>
    );
  }

  if (state.currentView === "deleted") {
    return (
      <div>
        <h2>{name} fue eliminado</h2>

        <button onClick={() => dispatch({ type: "UPDATE_VIEW", view: "home"})}>Recuperar {name}</button>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad.</p>

      {(state.error && !state.loading) && <p>Error: el codigo es incorrecto</p>}

      {state.loading && <p>Cargando...</p>}

      <input
        placeholder="Codigo de seguridad"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <button onClick={handleDeleteRequest}>Comprobar</button>
    </div>
  );
}

export { UseState };