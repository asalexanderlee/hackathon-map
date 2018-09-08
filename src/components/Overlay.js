import React, { Component } from "react";
import "./Overlay.css";
import union from "../union.png";

const Circle = props => {
  const onExit = () => {
    document.getElementById(props.popupId).style.visibility = "hidden";
    document.getElementById("blackout").style.visibility = "hidden";
    document.getElementById("unionPic").style.visibility = "hidden";
  };
  const onClick = () => {
    document.getElementById(props.popupId).style.visibility = "visible";
    document.getElementById("blackout").style.visibility = "visible";
    document.getElementById("unionPic").style.visibility = "visible";
  };
  return (
    <div className="circle" id={props.id}>
      <span onClick={onClick}>{props.number}</span>
      <div className="tooltip">{props.description}</div>
      <div className="buildingPopup" id={props.popupId}>
        {props.popupInfo}
        <br />
        <br />
        <span onClick={onExit} className="exit-smart-view">
          Exit Smart View
        </span>
      </div>
    </div>
  );
};
export default class Overlay extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="overlayWrapper">
          <Circle
            id="union"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="69"
            description="College Union"
            popupInfo="Alvarez College Union and Duke Family Performance Hall comprise the state-of-the-art Knobloch Campus Center. The atrium-a popular gathering, meeting, and study locale-is open to Davidson students around the clock throughout the academic year. The union is also home to the Davis Café, a fitness center, meeting spaces, and a variety of student organizations and services."
            popupId="unionPopup"
          />
          <img src={union} alt="Alvarez College Union" id="unionPic" />
          <div id="blackout" />
          <Circle
            id="duke"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="61"
            description="Duke Residence Hall"
            popupInfo=""
            popupId="dukePopup"
          />
          <Circle
            id="sentelle"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="60"
            description="Sentelle Residence Hall"
            popupInfo=""
            popupId="dukePopup"
          />
          <Circle id="cannon" onClick={this.handleClick} number="59" description="Cannon Residence Hall" popupInfo="" />
          <Circle
            id="richardsonStadium"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="71"
            description="Richardson Stadium"
            popupInfo=""
            popupId="dukePopup"
          />
          <Circle
            id="library"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="32"
            description="Library"
            popupInfo=""
          />
          <Circle
            id="baker"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="72"
            description="Baker Sports Center"
            popupInfo=""
          />
          <Circle
            id="chambers"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="31"
            description="Chambers Academic Center"
            popupInfo=""
            popupId="dukePopup"
          />
          <Circle
            id="wall"
            onClick={this.handleClick}
            onExit={this.handleExit}
            number="30"
            description="Wall Academic Center"
            popupInfo=""
          />
        </div>
      </React.Fragment>
    );
  }
}
