import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateAccount from "./components/CreateAccount";
import WatchVideo from "./components/WatchVideo";
import "./components/measureElement";
import "./App.css";

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
            <Route path="/dashboard" comonent={Dashboard} />
            <Route
              path="/:username/:videoID"
              render={props => {
                return <WatchVideo {...props} />;
              }}
            />
            <Route
              path="/:videoID"
              render={props => {
                return <WatchVideo {...props} default={true} />;
              }}
            />
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
