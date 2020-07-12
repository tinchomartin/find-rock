import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./artist-card.css";
import { Link } from "react-router-dom";

class ArtistCard extends Component {
  render() {
    return (
      <div className="col-3">
        <Link to={"/artista?" + this.props.titulo}>
          <div className="item">
            <img className="pic" src={this.props.img} alt="" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
