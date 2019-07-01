import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import WatchVideo from "./components/WatchVideo";
import "./components/measureElement";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashbord";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <YoutubeInfo /> */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={CreateAccount} />
            <PrivateRoute path="/dashbord" component={Dashboard} />
            <Route
              exact
              path="/:username/:videoID"
              render={props => {
                return <WatchVideo {...props} />;
              }}
            />
            <Route
              exact
              path="/:videoID"
              render={props => {
                return <WatchVideo {...props} default={true} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
