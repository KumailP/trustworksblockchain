import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./routes/splash.js";
import dashboard from "./routes/dashboard.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Splash} />
          <Route path="/citizen-dashboard" component={dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
