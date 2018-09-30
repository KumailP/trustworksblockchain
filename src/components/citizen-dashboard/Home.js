import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="citizen-dashboard-inner">
      <div className="citizen-dashboard-heading">
        <h1>
        <span>Welcome,</span> Kumail
        </h1>
      </div>
      <div className="citizen-dashboard-items">
        <Link to="/citizen-dashboard/application" className="dashboard-item">
          Application
        </Link>
        <Link to="/citizen-dashboard/properties" className="dashboard-item">
          Properties
        </Link>
      </div>
    </div>
  );
};
