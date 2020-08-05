import React from "react";
import "./search-bar.css";
import logo from "../download.svg";
import { Link } from "react-router-dom";

class NoSearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default NoSearchBar;
