import React from 'react';
import { Link } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";

export default () => {
  return (
    <div className="citizen-dashboard-inner">    
            <Link to="/citizen-dashboard" style={{ textDecoration: "none" }}>
              <Button variant="contained">{"<- Dashboard"}</Button>
            </Link>
            <div className="citizen-dashboard-heading">
              <h2>Properties</h2>
            </div>
            <Paper
              style={{ padding: "20px", maxWidth: "20vw", margin: "0 auto", textAlign: "left" }}
            >
            <p>The following properties are registered under your name:</p>
            <p><strong>Commercial:</strong></p>
            <ul>
              <li>Plot 69, Block-2, Gulshan-e-Iqbal, Karachi</li>
            </ul>
            <p><strong>Residential:</strong></p>
            <ul>
              <li>Plot 69, Block-2, Gulshan-e-Iqbal, Karachi</li>
            </ul>
            </Paper>
    </div>
  )
}