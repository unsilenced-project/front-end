import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { Spin, Alert, Form, Icon, Input, Button } from "antd";
import Navigation from "./Navigation/Navigation";
import Flip from "react-reveal/Flip";

import "antd/dist/antd.css";
import "./Login.scss";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    this.setState({
      credentials: {
        username: localStorage.getItem("username"),
        password: ""
      }
    });
  }

  handleChanges = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.credentials.username);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    console.log("login event", event);
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      !this.props.error && this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="login-wrapper">
        <Navigation />
        <Flip right>
          <div className="login-layout">
            <h2 className="login-heading">Log in</h2>
            <Form onSubmit={this.login} className="login-form">
              <Form.Item className="form-item">
                <Input
                  required
                  className="login-input"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="username"
                  placeholder="Username"
                  value={this.state.credentials.username}
                  onChange={this.handleChanges}
                />
              </Form.Item>
              <Form.Item className="form-item">
                <Input
                  required
                  className="login-input"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={this.state.credentials.password}
                  onChange={this.handleChanges}
                />
              </Form.Item>
              <Form.Item className="form-item">
                {this.props.error && (
                  <Alert
                    message={this.props.error.message}
                    type="error"
                    className="error"
                  />
                )}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {!this.props.loggingIn ? (
                    "Log in"
                  ) : (
                    <>
                      {"Logging in..."}
                      <Spin size="small" style={{ color: "black" }} />
                    </>
                  )}
                </Button>
                <a
                  className="login-form-forgot"
                  href="/forgot"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/forgot");
                  }}
                >
                  Forgot password?
                </a>
                {" or "}
                <a
                  href="/register"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/register");
                  }}
                >
                  Register now
                </a>
              </Form.Item>
            </Form>
          </div>
        </Flip>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.error,
  loggingIn: state.user.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
