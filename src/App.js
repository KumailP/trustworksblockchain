import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./routes/splash.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Splash} />
        </div>
      </Router>
    );
  }
}

export default App;
