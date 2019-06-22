import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Appbar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

export class Success extends Component {
  continue = e => {
    // e.prevetDefault();

    //process form

    this.props.nextStep();
  };

  back = e => {
    // e.prevetDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title="Success" />

          <h1>Thank You</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
