import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import DisqusEmbed from "./components/DisqusEmbed";
// import YoutubeInfo from "./components/YoutubeInfo";
import "./components/measureElement";
import "./App.css";

class App extends React.Component {
  render() {
    const disqusShortname = "unsilenced";
    const disqusConfig = {
      url: "https://unsilenced.netlify.com/testing",
      id: "testing"
    };
    return (
      <div className="App">
        <Router>
          {/* <YoutubeInfo /> */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={CreateAccount} />
            <Route
              path="/testing"
              render={props => {
                return (
                  <DisqusEmbed
                    {...props}
                    disqusShortname={disqusShortname}
                    disqusConfig={disqusConfig}
                  />
                );
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
