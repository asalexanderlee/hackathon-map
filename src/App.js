import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//React Components
import Map from "./components/Map";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Davidson College Interactive Map</h1>
        <Map />
      </div>
    );
  }
}

export default App;
