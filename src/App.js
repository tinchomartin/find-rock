import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Footer from "./components/footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // el react router ayuda a que se cargue todo en una página pero cada sitio tenga su ruta
      <BrowserRouter>
        <Footer>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route patch="/" component={PageHome} />
          </Switch>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default App;
