import React, { Component } from "react";
import davidsonCollegeMap from "../davidsonCollegeMap.png";
import "./Map.css";
export default class Map extends Component {
  render() {
    return (
      <div id="map">
        <img
          src={davidsonCollegeMap}
          alt="An interactive map for Davidson College"
        />
      </div>
    );
  }
}
