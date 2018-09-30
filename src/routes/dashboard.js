import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/citizen-dashboard/Home";
import Application from "../components/citizen-dashboard/Application";
import Properties from "../components/citizen-dashboard/Properties";
class dashboard extends Component {
  render() {
    return (
      <div className="citizen-dashboard">
        <Switch>
            <Route path="/citizen-dashboard/application" component={Application} />
            <Route path="/citizen-dashboard/properties" component={Properties} />
            <Route path="/citizen-dashboard/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default dashboard;
