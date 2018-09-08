import React, { Component } from "react";
import "./Overlay.css";
export default class Overlay extends Component {
  handleClick() {
    console.log("works");
  }
  render() {
    return (
      <React.Fragment>
        <div id="overlayWrapper">
          <div className="circle" onClick={this.handleClick}>
            69
          </div>
        </div>
      </React.Fragment>
    );
  }
}
