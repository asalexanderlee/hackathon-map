import React, { Component } from "react";
import "./InfoPopup.css";

const Panel = props => {
  return (
    <div className="panel" style={{ backgroundColor: props.color }}>
      {props.title}
    </div>
  );
};
export default class InfoPopup extends Component {
  render() {
    const colors = ["#308a8e"];
    return (
      <div className="popup">
        <div className="row">
          <Panel color={colors[0]} title={"900 Room"} />
        </div>
      </div>
    );
  }
}
