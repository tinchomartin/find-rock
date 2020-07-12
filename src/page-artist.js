import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import "./page-home.css";
import SimilarArtist from "./components/similar-artist.js";
import { Redirect } from "react-router-dom";

class PageArtist extends Component {
  state = {
    data: {
      artist: {
        image: [
          {
            "#text": "",
          },
          {
            "#text": "",
          },
          {
            "#text": "",
          },
          {
            "#text": "",
          },
          {
            "#text": "",
          },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                {
                  "#text": "",
                },
                {
                  "#text": "",
                },
                {
                  "#text": "",
                },
                {
                  "#text": "",
                },
                {
                  "#text": "",
                },
              ],
            },
          ],
        },
      },
    },
    // busqueda: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=d8e5a112499233abfabf4049aa4d39a9&format=json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      data: data,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
                src={this.state.data.artist.image[3]["#text"]}
                alt=""
                className="pic-artist margenes50"
              />

              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>

          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
