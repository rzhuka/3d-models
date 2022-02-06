import React, { Component } from "react";
import Home from "./components/home/index.js";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
