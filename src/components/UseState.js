import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {    
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  
  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad.</p>

      {error && <p>Error: el codigo es incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input placeholder="Codigo de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };