import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    }
  }

  componentDidUpdate() {
    if (this.state.loading === true) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad.</p>

        {this.state.error && <p>Error: el codigo es incorrecto</p>}

        {this.state.loading && <p>Cargando...</p>}

        <input placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };