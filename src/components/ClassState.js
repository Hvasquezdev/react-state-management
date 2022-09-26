import React from "react";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      value: "",
    }
  }

  componentDidUpdate() {
    if (this.state.loading === true) {
      setTimeout(() => {
        this.setState((state) => ({
          loading: false,
          error: state.value !== SECURITY_CODE,
        }));
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad.</p>

        {(this.state.error && !this.state.loading) && <p>Error: el codigo es incorrecto</p>}

        {this.state.loading && <p>Cargando...</p>}

        <input
          placeholder="Codigo de seguridad"
          value={this.state.value}
          onInput={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };