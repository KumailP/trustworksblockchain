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
    value: 0,
    itemADone: false,
    itemBDone: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  removeItemA = () => {
    this.setState({itemADone: true});
    const panel = document.querySelector("#panel1");

    panel.style.opacity = 0;
    setTimeout(() => {
      panel.style.display = "none";
    }, 500);
  };

  removeItemB = () => {
    this.setState({itemBDone: true});
    const panel = document.querySelector("#panel2");

    panel.style.opacity = 0;
    setTimeout(() => {
      panel.style.display = "none";
    }, 500);
  };

  getTabData = () => {
    switch (this.state.value) {
      case 0:
        return (
          <div>
            <h1>Pending Applications</h1>
            <ExpansionPanel
              id="panel1"
              style={{ opacity: 1, transition: "0.5s" }}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Application #23125123 </Typography>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.removeItemA}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.removeItemA}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "White"
                    }}
                  >
                    Reject
                  </Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              id="panel2"
              style={{ opacity: 1, transition: "0.5s" }}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Application #23125123 </Typography>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.removeItemB}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.removeItemB}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "White"
                    }}
                  >
                    Reject
                  </Button>
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
                    Application #23125123{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      Approved
                    </span>
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
                    Application #57316549{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      Rejected
                    </span>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <ul>
                      <li>Buyer: Shayan Mustafa</li>
                      <li>Seller: Ehtasham Ali</li>
                      <li>Area: 250 sq yards</li>
                      <li>Type: Commercial</li>
                      <li>Plot #: 213412412</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Application #34852167{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Rejected
                    </span>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <ul>
                      <li>Buyer: Shayan Mustafa</li>
                      <li>Seller: Ehtasham Ali</li>
                      <li>Area: 250 sq yards</li>
                      <li>Type: Commercial</li>
                      <li>Plot #: 213412412</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Application #46513465{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Rejected
                    </span>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <ul>
                      <li>Buyer: Shayan Mustafa</li>
                      <li>Seller: Ehtasham Ali</li>
                      <li>Area: 250 sq yards</li>
                      <li>Type: Commercial</li>
                      <li>Plot #: 213412412</li>
                    </ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Application #13468254{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      Approved
                    </span>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <ul>
                      <li>Buyer: Shayan Mustafa</li>
                      <li>Seller: Ehtasham Ali</li>
                      <li>Area: 250 sq yards</li>
                      <li>Type: Commercial</li>
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
            <h2>Deputy Commissioner's Office</h2>
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
