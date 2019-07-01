import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount } from "../actions/authActions";
import { Collapse, Spin, Alert, Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./Login.scss";

class CreateAccount extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    channel_link: "",
    patreon: "",
    twitter: "",
    facebook: "",
    instagram: ""
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  youtubeUpdate = channel => {
    console.log("Youtube link", channel);
    // To do
  };

  createAccount = event => {
    console.log("create account event", event);
    event.preventDefault();
    const {
      username,
      email,
      password,
      channel_link,
      patreon,
      twitter,
      facebook,
      instagram
    } = this.state;
    const newUser = {
      username,
      email,
      password,
      channel_link,
      social_links: JSON.stringify({
        patreon,
        twitter,
        facebook,
        instagram
      })
    };
    this.props.createAccount(newUser).then(() => {
      !this.props.error && this.props.history.push("/login");
    });
  };

  render() {
    const { onBlur } = this.props;
    return (
      <div className="login-wrapper">
        <div className="login-layout">
          <h2>Register</h2>
          <Form onSubmit={this.createAccount} className="login-form">
            <Form.Item className="form-item">
              <Input
                required
                className="login-input"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                name="username"
                placeholder="Username *"
                autoComplete="username"
                value={this.state.username}
                onChange={this.handleChanges}
              />
            </Form.Item>
            <Form.Item className="form-item">
              <Input
                required
                className="login-input"
                prefix={
                  <Icon type="youtube" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                name="channel_link"
                placeholder="Youtube channel link *"
                value={this.state.channel_link}
                onChange={this.handleChanges}
                onBlur={this.youtubeUpdate(this.state.channel_link)}
              />
            </Form.Item>
            <Form.Item className="form-item">
              <Input
                required
                className="login-input"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                name="email"
                placeholder="E-mail *"
                autoComplete="email"
                value={this.state.email}
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
                placeholder="Password *"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChanges}
              />
            </Form.Item>
            <span style={{ fontSize: "2em", verticalAlign: "middle" }}>*</span>{" "}
            Required
            <Collapse>
              <Collapse.Panel header="Social Links (optional)">
                <Form.Item className="form-item">
                  <Input
                    className="login-input"
                    prefix={
                      <Icon
                        type="dollar"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    name="patreon"
                    placeholder="Patreon"
                    value={this.state.patreon}
                    onChange={this.handleChanges}
                  />
                </Form.Item>
                <Form.Item className="form-item">
                  <Input
                    className="login-input"
                    prefix={
                      <Icon
                        type="twitter"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    name="twitter"
                    placeholder="Twitter"
                    value={this.state.twitter}
                    onChange={this.handleChanges}
                  />
                </Form.Item>
                <Form.Item className="form-item">
                  <Input
                    className="login-input"
                    prefix={
                      <Icon
                        type="facebook"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    name="facebook"
                    placeholder="Facebook"
                    value={this.state.facebook}
                    onChange={this.handleChanges}
                  />
                </Form.Item>
                <Form.Item className="form-item">
                  <Input
                    className="login-input"
                    prefix={
                      <Icon
                        type="instagram"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    name="instagram"
                    placeholder="Instagram"
                    value={this.state.instagram}
                    onChange={this.handleChanges}
                  />
                </Form.Item>
              </Collapse.Panel>
            </Collapse>
            <Form.Item>
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
                onClick={e => this.createAccount}
              >
                {!this.props.creating ? (
                  "Sign up"
                ) : (
                  <>
                    {"Signing up..."}
                    <Spin size="small" />
                  </>
                )}
              </Button>
              or{" "}
              <a
                href="/login"
                onClick={e => {
                  e.preventDefault();
                  this.props.history.push("/login");
                }}
              >
                Log In
              </a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channel: state.channel_link,
  error: state.user.error,
  creating: state.user.creating
});

export default connect(
  mapStateToProps,
  { createAccount }
)(CreateAccount);
