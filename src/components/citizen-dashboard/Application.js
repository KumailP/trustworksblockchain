import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerName: "",
      landType: "",
      landSize: "",
      projectName: "",
      loading: false,
      appStatus: {
        color: "orange",
        status: "In-Progress"
      },
      dcStatus: {
        color: "orange",
        status: "In-Progress"
      },
      registrarStatus: {
        color: "orange",
        status: "In-Progress"
      },
      leasureStatus: {
        color: "orange",
        status: "In-Progress"
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        { dcStatus: { color: "green", status: "Approved" } },
        () => {
          setTimeout(() => {
            this.setState(
              { registrarStatus: { color: "green", status: "Approved" } },
              () => {
                setTimeout(() => {
                  this.setState({
                    leasureStatus: { color: "green", status: "Approved" },
                    appStatus: { color: "green", status: "Ownership Transferred", submitted: true }
                  });
                }, 1500);
              }
            );
          }, 1500);
        }
      );
    }, 4500);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submitApplication = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, appStatus: {color: "orange", status: "In-Progress", submitted: true} });
    }, 1000);
  };

  render() {
    const {
      loading,
      appStatus,
      dcStatus,
      registrarStatus,
      leasureStatus
    } = this.state;

    return (
      <div className="citizen-dashboard-inner">
        {loading ? (
          <img src="/images/spinner.svg" alt="loading" />
        ) : appStatus.submitted ? (
          <React.Fragment>
            <Link to="/citizen-dashboard" style={{ textDecoration: "none" }}>
              <Button variant="contained">{"<- Dashboard"}</Button>
            </Link>
            <div className="citizen-dashboard-heading">
              <h2>Apply for title transfer</h2>
            </div>
            <Paper
              style={{ padding: "20px", maxWidth: "20vw", margin: "0 auto" }}
              className="submitted"
            >
              <p>Application has been submitted.</p>
              <p>
                Status: <strong><span style={{ color: appStatus.color }}>{appStatus.status}</span></strong>
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  DC Office:{" "}
                  <span style={{ color: dcStatus.color }}>{dcStatus.status}</span>
                </li>
                <li>
                  Registrar:{" "}
                  <span style={{ color: registrarStatus.color }}>
                    {registrarStatus.status}
                  </span>
                </li>
                <li>
                  Leasure Office:{" "}
                  <span style={{ color: leasureStatus.color }}>
                    {leasureStatus.status}
                  </span>
                </li>
              </ul>
            </Paper>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/citizen-dashboard" style={{ textDecoration: "none" }}>
              <Button variant="contained">{"<- Dashboard"}</Button>
            </Link>
            <div className="citizen-dashboard-heading">
              <h2>Apply for title transfer</h2>
            </div>
            <Paper
              style={{ padding: "20px", maxWidth: "20vw", margin: "0 auto" }}
            >
              <TextField
                style={{ width: "300px" }}
                label="Buyer Name"
                value={this.state.buyerName}
                onChange={this.handleChange("buyerName")}
                margin="normal"
              />
              <br />
              <TextField
                style={{ width: "300px" }}
                label="Land Type"
                value={this.state.landType}
                onChange={this.handleChange("landType")}
                margin="normal"
              />
              <br />
              <TextField
                style={{ width: "300px" }}
                label="Land Size"
                value={this.state.landSize}
                onChange={this.handleChange("landSize")}
                margin="normal"
              />
              <br />
              <TextField
                style={{ width: "300px" }}
                label="Project Name"
                value={this.state.projectName}
                onChange={this.handleChange("projectName")}
                margin="normal"
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.submitApplication}
              >
                Submit Application
              </Button>
            </Paper>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Application;

// landType
// landSize
// projectName
