import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { forgetPassword } from "../actions/userActions";
import { Spin, Alert, Form, Icon, Input, Button, notification } from "antd";
import Navigation from "./Navigation/Navigation";
import Flip from "react-reveal/Flip";
import Modal from "./utils/Modal/Modal";

import "antd/dist/antd.css";
import "./Login.scss";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
      showModal: false,
      email: "",
      error: null
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

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

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

  openNotification = () => {
    notification.open({
      message: "Email Notification",
      description: "You will recive in a short time a email with a new password",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  handleConfirm = () => {
    if (this.state.email && this.state.email.includes("@")) {
      this.props.forgetPassword({ email: this.state.email }).then(response => {
        if (response) {
          this.setState({ showModal: false });
          this.openNotification();
        }
      });
    } else {
      this.setState({
        error: "please provide a valid email"
      });
    }
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
                    this.setState({
                      showModal: true
                    });
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
        <Modal
          show={this.state.showModal}
          toggle={this.toggleModal}
          modalTitle="Forgot Password"
          width="45%"
          clicked={this.handleConfirm}
        >
          <Form.Item className="form-item">
            <Input
              required
              className="forgot-email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="forgotemail"
              type="mail"
              placeholder="enter your email here"
              autoComplete="forgot-email"
              value={this.state.email}
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
            />
            <p>
              after pressing contiune a message with new password will be sent
            </p>
            {this.state.error && (
              <Alert
                message={this.state.error}
                type="error"
                className="error"
              />
            )}
            {this.props.errorMessage && (
              <Alert
                message={this.props.errorMessage}
                type="error"
                className="error"
              />
            )}
          </Form.Item>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.error,
  loggingIn: state.user.loggingIn,
  errorMessage: state.userData.message
});

const mapDispatchToProps = {
  login,
  forgetPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
