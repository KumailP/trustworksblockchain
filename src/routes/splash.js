import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

export default class splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className="splash">
        <div className="splash-center">
          <div className="splash-switch">
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange("checked")}
                  value="checked"
                  color="primary"
                />
              }
              label="Agencies"
            />
          </div>
          <div className="splash-loginas">
            {!checked ? (
              <Card className="splash-card">
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      Citizen
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/citizen-dashboard">
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ) : (
              <React.Fragment>
                <Card className="splash-card">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        DC Office
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </CardActions>
                </Card>

                <Card className="splash-card">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Society Office
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </CardActions>
                </Card>

                <Card className="splash-card">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Registrar Office
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </CardActions>
                </Card>

                <Card className="splash-card">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Lease Office
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </CardActions>
                </Card>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
