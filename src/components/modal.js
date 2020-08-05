import React from "react";
import "./modal.css";
class Modal extends React.Component {
  state = {
    estado: this.props.estado,
  };

  componentWillReceiveProps(e) {
    this.setState({
      estado: e.estado,
    });
  }

  render() {
    if (this.state.estado !== true) return null;

    return (
      <React.Fragment>
        <div className="modale">
          <div className="cardModal">
            <button className="salir" onClick={this.props.hide}>
              X
            </button>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
