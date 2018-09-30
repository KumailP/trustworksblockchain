import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Properties extends Component {
  render() {
    return (
      <div className="citizen-dashboard-inner">
        <Link to="/citizen-dashboard" style={{ textDecoration: "none" }}>
          <Button variant="contained">{"<- Dashboard"}</Button>
        </Link>
        <div className="citizen-dashboard-heading">
          <h2>Properties</h2>
        </div>
        <Paper
          style={{
            padding: "20px",
            maxWidth: "40vw",
            margin: "0 auto",
            textAlign: "left"
          }}
        >
          <p>The following properties are registered under your name:</p>
          <p>
            <strong>Commercial:</strong>
          </p>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Plot #123, Gulshan-e-Iqbal, Karachi</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Area: 500 sq yards</li>
                  <li>Type: Residential</li>
                  <li>Plot #: 213412412</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Plot #456, Clifton Block-3, Karachi</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Area: 500 sq yards</li>
                  <li>Type: Residential</li>
                  <li>Plot #: 213412412</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <p>
            <strong>Residential:</strong>
          </p>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Plot #123, Gulshan-e-Iqbal, Karachi</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Area: 500 sq yards</li>
                  <li>Type: Residential</li>
                  <li>Plot #: 213412412</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Plot #456, Clifton Block-3, Karachi</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Area: 500 sq yards</li>
                  <li>Type: Residential</li>
                  <li>Plot #: 213412412</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </div>
    );
  }
}

export default Properties;
