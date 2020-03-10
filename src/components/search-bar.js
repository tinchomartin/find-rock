import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
  state = {
    busqueda: ""
  };

  //creo la funcion para recibir los datos del input
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  //creo la funcion para enviar los datos del input. e = evento, target = elemento llamado
  //el preventdefault ayuda a que la página no se refresque
  handleSumbit = e => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <img src="" alt="" className="logo-barra" />
          </div>
          <div className="col-md-6">
            <form
              className="form-inline"
              onSubmit={this.handleSumbit}
              name="Resultado de la prueba: "
            >
              <div className="busqueda">
                <input
                  name="Prueba del buscador"
                  type="text"
                  id="buscar"
                  placeholder="Buscar banda"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
