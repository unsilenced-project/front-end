import React, { createRef, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Input from "./InputCompoent";
import { connect } from "react-redux";
import { getUserById, updateUser } from "../../actions/userActions";
import { Button, Message } from "semantic-ui-react";

const Settings = props => {
  const [usernameData, setUsernameData] = useState(props.currentUser.username);
  const [emailData, setEmailData] = useState(props.currentUser.email);
  const [ChannelName, setChannelName] = useState(
    props.currentUser.channel_name
  );
  const [ChannelLink, setChannelLink] = useState(
    props.currentUser.channel_link
  );
  const [DisqusName, setDisqusName] = useState(props.currentUser.disqus_name);
  const [passwrdData, setPasswordData] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    props.getUserById(userId);
  }, []);

  const updateUser = () => {
    setError("");
    const userId = localStorage.getItem("userId");

    const newUser = {
      username: usernameData,
      email: emailData,
      channel_link: ChannelLink,
      channel_name: ChannelName,
      disqus_name: DisqusName
    };

    console.log(userId, newUser);
    props.updateUser(userId, newUser);
  };

  const changePassword = () => {
    const userId = localStorage.getItem("userId");

    setError("");
    if (passwrdData === newPassword) {
      alert(passwrdData);
      props.updateUser(userId, { password: passwrdData });
    } else {
      setError("Please provide the same password in the fields");
    }
  };
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
          handleChange={e => setUsernameData(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Email"
          placeholder={email}
          handleChange={e => setEmailData(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Channel Link"
          placeholder={channel_link}
          handleChange={e => setChannelLink(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Channel Name"
          placeholder={channel_name}
          handleChange={e => setChannelName(e.target.value)}
          loading={props.loading}
        />
        <Input
          content="Disqus Name"
          placeholder={disqus_name}
          handleChange={e => setDisqusName(e.target.value)}
          loading={props.loading}
        />
        <CostumButton positive onClick={updateUser} loading={props.loading}>
          Update
        </CostumButton>

        <PasswordField>
          <Input
            content="Password"
            placeholder="new password"
            handleChange={e => setPasswordData(e.target.value)}
            loading={props.loading}
            type="password"
          />
          <Input
            content="Comfirm new Passwoord"
            placeholder="test"
            handleChange={e => setNewPassword(e.target.value)}
            loading={props.loading}
            type="password"
          />
          <CostumButton positive onClick={changePassword}>
            Change Password
          </CostumButton>

          {error && <Message>{error}</Message>}
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
  getUserById,
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  width: 100%;
  height: 100%;
`;

const PasswordField = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CostumButton = styled(Button)`
  width: 350px;
  margin: 20px auto;
`;
