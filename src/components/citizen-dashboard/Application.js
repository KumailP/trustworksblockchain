import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      willReject: false,
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        { dcStatus: { color: "green", status: "Approved" } },
        () => {
          setTimeout(() => {
            if (!this.state.willReject) {
              this.setState(
                { registrarStatus: { color: "green", status: "Approved" } },
                () => {
                  setTimeout(() => {
                    this.setState({
                      leasureStatus: { color: "green", status: "Approved" },
                      appStatus: {
                        color: "green",
                        status: "Ownership Transferred",
                        submitted: true
                      }
                    });
                  }, 1500);
                }
              );
            } else {
              this.setState({
                registrarStatus: { color: "red", status: "Rejected" },
                leasureStatus: { color: "red", status: "Rejected" },
                appStatus: {
                  color: "red",
                  status: "Application Rejected",
                  submitted: true
                }
              });
            }
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
      this.setState({
        loading: false,
        appStatus: { color: "orange", status: "In-Progress", submitted: true }
      });
    }, 1000);
  };

  render() {
    const {
      loading,
      appStatus,
      dcStatus,
      registrarStatus,
      leasureStatus,
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
                Status:{" "}
                <strong>
                  <span style={{ color: appStatus.color }}>
                    {appStatus.status}
                  </span>
                </strong>
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  DC Office:{" "}
                  <span style={{ color: dcStatus.color }}>
                    {dcStatus.status}
                  </span>
                </li>
                <li>
                  Registrar:{" "}
                  <span style={{ color: registrarStatus.color }}>
                    {registrarStatus.status}
                  </span>
                </li>
                {this.state.appStatus.status === "Application Rejected" ? (
                  <em>
                    The Registrar's office did not approve your transfer.{" "}
                    <button style={{backgroundColor: "white", border: "0", cursor: "pointer", color: "blue"}} onClick={this.handleClickOpen}>
                      Click here to know why.
                    </button>
                  </em>
                ) : null}

                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Application Rejected
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <p>
                        Your application has been rejected from the registrar's
                        office.
                        <br />
                        Here's why:
                      </p>
                      <p>
                        Your original land records of this land were not found.
                      </p>
                      <p>Kind regards,</p>
                      <p>The Registrar's Office</p>
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
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
