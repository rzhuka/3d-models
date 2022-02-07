import React, { Component } from "react";
import Home from "./components/home/index.js";
import { Container } from "./components/models/index";
import { NewModel } from "./components/newDesign/index.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    view: "home",
  };

  handleChangeView = (newView) => {
    this.setState({ view: newView });
  };
  render() {
    const { view } = this.state;
    if (view === "home") {
      return (
        <div className="app-container">
          <Home handleChangeView={this.handleChangeView} />
        </div>
      );
    } else if (view === "newDesign") {
      return (
        <div className="app-container">
          <NewModel />
        </div>
      );
    }
  }
}

export default App;
