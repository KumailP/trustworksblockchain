import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MailIcon from "@material-ui/icons/Mail";
import HistoryIcon from "@material-ui/icons/History";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class DCOffice extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  getTabData = () => {
    switch (this.state.value) {
      case 0:
        return (
          <div>
            <h1>Pending Applications</h1>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Plot #123, Gulshan-e-Iqbal, Karachi</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <ul>
                    <li>Buyer: Kumail Pirzada</li>
                    <li>Seller: Shayan Mustafa</li>
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
          </div>
        );
      case 1:
        return (
          <div>
            <h1>History</h1>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Plot #123, Gulshan-e-Iqbal, Karachi{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>Approved</span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <ul>
                    <li>Buyer: Kumail Pirzada</li>
                    <li>Seller: Shayan Mustafa</li>
                    <li>Area: 500 sq yards</li>
                    <li>Type: Residential</li>
                    <li>Plot #: 213412412</li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Plot #456, Clifton Block-3, Karachi{" "}
                  <span style={{ color: "red", fontWeight: "bold"}}>Rejected</span>
                </Typography>
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
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="citizen-dashboard">
        <div className="citizen-dashboard-inner">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">{"<- Logout"}</Button>
          </Link>
          <div className="citizen-dashboard-heading">
            <h2>Lease Office</h2>
          </div>
          <Paper
            style={{
              padding: "20px",
              maxWidth: "40vw",
              margin: "0 auto",
              textAlign: "left"
            }}
          >
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab icon={<MailIcon />} label="PENDING APPLICATIONS" />
              <Tab icon={<HistoryIcon />} label="HISTORY" />
            </Tabs>
            {this.getTabData()}
          </Paper>
        </div>
      </div>
    );
  }
}
