import React, { Component } from "react";
import davidsonCollegeMap from "../davidsonCollegeMap.png";

export default class Map extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>This is the map component</h1>
        <img
          src={davidsonCollegeMap}
          alt="An interactive map for Davidson College"
        />
      </React.Fragment>
    );
  }
}
