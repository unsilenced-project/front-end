import React, { createRef, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Input from "./InputCompoent";
import { connect } from "react-redux";
import { getUserById } from "../../actions/userActions";

const Settings = props => {
  const [usernameData, setUsername] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    props.getUserById(userId);
  }, []);

  console.log(props.currentUser);
  const {
    username,
    email,
    channel_link,
    channel_name,
    img_link,
    disqus_name
  } = props.currentUser;
  return (
    <div>
      <Navigation />
      <FormContainer>
        <Input
          content="Username"
          placeholder={username}
          handleChange={e => setUsername(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Email"
          placeholder={email}
          handleChange={e => setUsername(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Channel Link"
          placeholder={channel_link}
          handleChange={e => setUsername(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Channel Name"
          placeholder={channel_name}
          handleChange={e => setUsername(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Disqus Name"
          placeholder={disqus_name}
          handleChange={e => setUsername(e.target.value)}
          loading={props.loading}
        />

        <button>Update</button>

        <PasswordField>
          <Input
            content="Password"
            placeholder="new password"
            handleChange={e => setUsername(e.target.value)}
            loading={props.loading}
          />
          <Input
            content="Comfirm new Passwoord"
            placeholder="test"
            handleChange={e => setUsername(e.target.value)}
            loading={props.loading}
          />
          <button>Change Password</button>
        </PasswordField>
      </FormContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.userData.userData,
    loading: state.userData.loading
  };
};

const mapDispatchToProps = {
  getUserById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  button {
    width: 20%;
    margin: 20px auto;
  }
`;

const PasswordField = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 10px;
  flex-direction: column;
  border-top: 0.4px solid grey;

  button {
    width: 20%;
    margin: 20px auto;
  }
`;
