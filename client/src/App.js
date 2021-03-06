import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { withFirebase } from "./components/Firebase";
import { withAuthentication } from "./components/Session";

//components
import Navbar from "./components/Navbar";

//Pages
import landing from "./pages/landing";
import signup from "./pages/signup";
import login from "./pages/login";
import findMissing from "./pages/findMissing";
import registerNewCase from "./pages/registerNewCase";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#819595",
      main: "#819595",
      dark: "#819595",
      contrastText: "#fff",
    },
    secondary: {
      light: "#B1B6A6",
      main: "#B1B6A6",
      dark: "#B1B6A6",
      contrastText: "#fff",
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/login" component={login} />
                <Route exact path="/findMissing" component={findMissing} />
                <Route exact path="/register" component={registerNewCase} />
                <Route exact path="/landing" component={landing} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withFirebase(withAuthentication(App));
