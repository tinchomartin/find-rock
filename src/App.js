import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar.js";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar />

        <div className="container">
          <div className="row">
            <ArtistCard
              titulo="Marilina Bertoldi"
              img="https://e.snmc.io/i/600/w/d5fe8afc20519a5655c0f5e0e45d0851/7170119"
            />
            <ArtistCard
              titulo="El Kuelgue"
              img="https://direct.rhapsody.com/imageserver/images/alb.129444543/600x600.jpg"
              titulo="El Kuelgue"
            />
            <ArtistCard
              titulo="Barbi Recanati"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UveNW9ZpgIiXT9_-M3ixZVrOZ5e1l9Wq6RKqsbEEgeG1UxfA&s"
            />
            <ArtistCard
              titulo="The Who"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZu5arKWWQ9qC6prRDXx2Bz7RZWQiEQ9ds5Y3bTtIPgW1ZUUR5&s"
            />
            <ArtistCard
              titulo="Mariana Michi"
              img="https://e.snmc.io/i/600/w/631d042b96b98deb8ec8fc79d6e56ad2/7751383"
            />
            <ArtistCard
              titulo="Usted Señalemelo"
              img="data:image/jpeg;base64,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"
            />
            <ArtistCard
              titulo="SMS"
              img="http://primitivosr.com/wp-content/uploads/2019/05/foto-e1557200538679.jpg"
            />
            <ArtistCard
              titulo="Piti Fernandez"
              img="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/9/1/e/cc75-7d83-4ca9-af92-1b37a662d683.jpg"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
