import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./routes/splash.js";
import dashboard from "./routes/dashboard.js";
import DCOffice from "./routes/DCOffice.js";
import RegistrarOffice from "./routes/RegistrarOffice.js";
import LeaseOffice from "./routes/LeaseOffice.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Splash} />
          <Route path="/citizen-dashboard" component={dashboard} />
          <Route path="/DCOffice" component={DCOffice} />
          <Route path="/RegistrarOffice" component={RegistrarOffice} />
          <Route path="/LeaseOffice" component={LeaseOffice} />
        </div>
      </Router>
    );
  }
}

export default App;
