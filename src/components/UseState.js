import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {    
    if (loading) {
      setTimeout(() => {
        setError(value !== SECURITY_CODE);
        setLoading(false);
      }, 3000);
    }

    // eslint-disable-next-line
  }, [loading]);
  
  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad.</p>

      {(error && !loading) && <p>Error: el codigo es incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input
        placeholder="Codigo de seguridad"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };