import React from "react";

class SearchBar extends React.Component {
  //creo la funcion para recibir los datos del input
  handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  //creo la funcion para enviar los datos del input. e = evento, target = elemento llamado
  //el preventdefault ayuda a que la página no se refresque
  handleSumbit = e => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">Demo Logo</div>
            <div className="col-md-4">
              <form
                className="form-inline"
                onSubmit={this.handleSumbit}
                name="Resultado de la prueba: "
              >
                <div className="form-group mb-2"></div>
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar banda"
                    onChange={this.handleChange}
                    name="Prueba del buscador"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={this.handleClick}
                >
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
