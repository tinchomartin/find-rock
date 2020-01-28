import React from "react";
//prueba para branch funcionalidad-FR
class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">Demo Logo</div>
            <div className="col-md-4">
              <form class="form-inline">
                <div class="form-group mb-2"></div>
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar banda"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Buscar
                </button>
              </form>
            </div>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
