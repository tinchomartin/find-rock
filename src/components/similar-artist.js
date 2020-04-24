import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Artistas Similares</h5>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="https://via.placeholder.com/350x350" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://via.placeholder.com/350x350" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://via.placeholder.com/350x350" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://via.placeholder.com/350x350" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SimilarArtist;
