import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./artist-card.css";
import "./loading.css";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h3>Error al buscar artistas similares: {props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
