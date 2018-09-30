import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/citizen-dashboard/Home";
import Application from "../components/citizen-dashboard/Application";
import Properties from "../components/citizen-dashboard/Properties";
import DCOffice from "./DCOffice";
import LeaseOffice from "./LeaseOffice";
import RegistrarOffice from "./RegistrarOffice";

class dashboard extends Component {
  render() {
    return (
      <div className="citizen-dashboard">
        <Switch>
            <Route path="/citizen-dashboard/application" component={Application} />
            <Route path="/citizen-dashboard/properties" component={Properties} />
            <Route path="/citizen-dashboard/" component={Home} /> 
            <Route path="/dept-dashboard/DCOffice/" component={DCOffice} />          
            <Route path="/dept-dashboard/LeaseOffice/" component={LeaseOffice} />          
            <Route path="/dept-dashboard/RegistrarOffice/" component={RegistrarOffice} />          
        </Switch>
      </div>
    );
  }
}

export default dashboard;
