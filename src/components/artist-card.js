import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./artist-card.css";

class ArtistCard extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img className="pic" src={this.props.img} alt="" />
          <p className="titulo">{this.props.titulo}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
