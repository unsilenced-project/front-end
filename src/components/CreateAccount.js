import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { createAccount } from "../actions/authActions";
import { Collapse, Spin, Alert, Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./Login.scss";
import Navigation from "./Navigation/Navigation";
import Flip from "react-reveal/Flip";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class CreateAccount extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    channel_link: "",
    channel_name: "",
    img_link: "",
    disqus_name: "",
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

  youtubeUpdate = async channel => {
    if (!channel.includes("youtube.com")) return null;
    if (!channel.includes("http")) channel = "https://" + channel;
    const searchType = channel.includes("/channel/") ? "id" : "forUsername";
    channel = channel.split("/");
    if (channel.length < 5) {
      return null;
    } else {
      channel = channel[4].split("?")[0];
    }
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            [searchType]: channel,
            part: "snippet",
            key: YOUTUBE_API_KEY
          }
        }
      );
      console.log(response);
      if (response.data.items) {
        this.setState({
          ...this.state,
          channel_name: response.data.items[0].snippet.title,
          img_link: response.data.items[0].snippet.thumbnails.default.url
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  createAccount = event => {
    console.log("create account event", event);
    event.preventDefault();
    const {
      username,
      email,
      password,
      channel_link,
      channel_name,
      img_link,
      disqus_name,
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
      channel_name,
      img_link,
      disqus_name: disqus_name.split(".")[0],
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
    // const { onBlur } = this.props;
    return (
      <div className="login-wrapper">
        <Navigation />
        <Flip left>
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
                  onBlur={() => this.youtubeUpdate(this.state.channel_link)}
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
              <span style={{ fontSize: "2em", verticalAlign: "middle" }}>
                *
              </span>{" "}
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
              <h3>Comment Moderation</h3>
              <p>
                If you want to moderate your comments, a quick, easy and free
                signup at Disqus is required.{" "}
                <a href="/disqus" target="_blank">
                  STEP BY STEP INSTRUCTIONS
                </a>
              </p>
              <p>
                <em>Leave this blank if you want unmoderated comments.</em>
              </p>
              <Form.Item className="form-item">
                <Input
                  className="login-input"
                  prefix={
                    <Icon type="wechat" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="disqus_name"
                  placeholder="Disqus subdomain"
                  value={this.state.disqus_name}
                  onChange={this.handleChanges}
                />
              </Form.Item>
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
                    <>
                      Sign up <em>{this.state.channel_name}</em>{" "}
                      {this.state.img_link ? (
                        <img src={this.state.img_link} width={20} height={20} alt="img"/>
                      ) : (
                        ""
                      )}
                    </>
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
        </Flip>
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
