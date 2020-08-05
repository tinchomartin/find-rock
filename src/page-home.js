import React from "react";
import "./page-home.css";
import logo from "./download.svg";
import ReactDom from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  state = {
    busqueda: "",
    modal: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    //al page home le agrego la ruta de busqueda + artista buscado al presionar enter
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  handleClick = (e) => {
    e.preventDefault(e);
    this.setState({
      modal: true,
    });
  };

  //gestiona el cierre del modal para que se actualice el padre
  handleHide = (e) => {
    e.preventDefault();
    this.setState({
      modal: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Resultado de la prueba: "
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  value={this.state.busqueda}
                  type="text"
                  id="buscar"
                  placeholder="Buscar una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng">Artistas Similares</button>
                <button className="btng" onClick={this.handleClick}>
                  Acerca del sitio
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDom.createPortal(
          <Modal estado={this.state.modal} hide={this.handleHide}>
            <p>Proyecto realizado en EscuelaDevRock</p>
            <p>
              Aclaración: La API de LastFM impuso restricciones y no muestra las
              imagenes de los artistas
            </p>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
