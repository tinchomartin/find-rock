import React from "react";
import "./page-home.css";
import logo from "./download.svg";

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
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
              <div className="actions">
                <button className="btng">Artistas Similares</button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
