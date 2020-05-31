import React from "react";
import "./search-bar.css";
import logo from "../download.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  // state = {
  //   busqueda: ""
  // };

  //creo la funcion para recibir los datos del input
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  //creo la funcion para enviar los datos del input. e = evento, target = elemento llamado
  //el preventdefault ayuda a que la página no se refresque
  handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-6">
            <form
              className="form-inline"
              onSubmit={this.handleSumbit}
              name="Resultado de la prueba: "
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  value={this.props.busqueda}
                  type="text"
                  id="buscar"
                  placeholder="Buscar una banda"
                  onChange={this.props.onChange}
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
