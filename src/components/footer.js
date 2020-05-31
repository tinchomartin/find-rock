import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./artist-card.css";

function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {/* el children permite que el footer renderice todo el contenido y que se vea en todos los pages */}
      {children}
      <div className="row">
        <div className="col-md-12 centrar">
          <p>Todos los derechos reservados a EDR</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
