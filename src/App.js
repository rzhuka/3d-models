import React, { Component } from "react";
import Home from "./components/home/index.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="app-container">
        <Home />
      </div>
    );
  }
}

export default App;
