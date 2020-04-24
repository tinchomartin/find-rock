import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import "./page-home.css";
import SimilarArtist from "./components/similar-artist.js";

class PageArtist extends Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://e.snmc.io/i/600/w/631d042b96b98deb8ec8fc79d6e56ad2/7751383"
                alt=""
                className="pic-artist margenes50"
              />

              <h2>Mariana Michi</h2>
              <p>
                Cuando era adolescente, Mariana Michi se quedó sin voz. Fue por
                una disfonía reiterada a causa del esfuerzo vocal, según el
                “otorrino”. Cantar era lo que más le gustaba, lo que motorizaba
                su deseo. Por eso se había metido de lleno en el coro del
                colegio y en cuanto taller musical encontrara. Pero tuvo un
                problema en las cuerdas vocales por usar mal la voz. Entonces
                empezó a estudiar canto y ahí se le abrió otro mundo. “Empecé a
                flashear con el cuerpo, con el instrumento y con el poder de la
                voz”, recupera.
              </p>
            </div>
          </div>

          <SimilarArtist />
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
