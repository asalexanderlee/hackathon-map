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
  chooseRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  render() {
    const colors = [
      "#308a8e",
      "#db2745",
      "#43bc0f",
      "#1e70ce",
      "#13a07a",
      "#9b0c96",
      "#7c44ff",
      "#d61c00",
      "#e0cd00",
      "#001377"
    ];
    return (
      <div className="popup">
        <div className="row">
          <Panel color={this.chooseRandomColor(colors)} title={"After Midnight"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Live Thursday"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Duke Family Performance Hall"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Davis Cafe"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Career Center"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Post Office"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Gym"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Davidson Outdoors"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Chaplain's Office"} />
          <Panel color={this.chooseRandomColor(colors)} title={"Center for Civic Engagement"} />
        </div>
      </div>
    );
  }
}
