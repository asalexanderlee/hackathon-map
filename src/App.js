import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//React Components
import Map from "./components/Map";
import InfoPopup from "./components/InfoPopup.js";
import Overlay from "./components/Overlay.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <Overlay />
        <div>
          <InfoPopup />
        </div>
      </div>
    );
  }
}

export default App;
