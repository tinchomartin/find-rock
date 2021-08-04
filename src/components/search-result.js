import React from "react";
import ArtistCard from "./artist-card.js";
import "./search-bar.css";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends React.Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
    error: null,
    loading: false,
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=d8e5a112499233abfabf4049aa4d39a9&format=json"
    );
  }



  async fetchData(url) {
    try {
      this.setState({
        loading: true,
      });

      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
        });
      } else {
        this.setState({
          error: false,
          data: data,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
