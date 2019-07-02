import React, { createRef, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Input from "./InputCompoent";
import { connect } from "react-redux";

const Settings = ({ userData }) => {
  const [username, setUsername] = useState("");

  const handleClick = () => inputRef.current.focus();
  const inputRef = createRef();

  console.log("User DATA:  ", userData);

  console.log(username);
  return (
    <div>
      <Navigation />
      <FormContainer>
        <Input
          content="Username"
          placeholder="test"
          handleChange={e => setUsername(e.target.value)}
        />
        <Input
          content="Email"
          placeholder="test"
          handleChange={e => setUsername(e.target.value)}
        />
        <Input
          content="Channel Link"
          placeholder="test"
          handleChange={e => setUsername(e.target.value)}
        />
        <Input
          content="Channel Name"
          placeholder="test"
          handleChange={e => setUsername(e.target.value)}
        />
        <Input
          content="Disqus Name"
          placeholder="test"
          handleChange={e => setUsername(e.target.value)}
        />

        <button>Update</button>

        <PasswordField>
          <Input
            content="Password"
            placeholder="test"
            handleChange={e => setUsername(e.target.value)}
          />
          <Input
            content="Comfirm Passwoord"
            placeholder="test"
            handleChange={e => setUsername(e.target.value)}
          />
          <Input
            content="New Passwoord"
            placeholder="test"
            handleChange={e => setUsername(e.target.value)}
          />
          <button>Change Password</button>
        </PasswordField>
      </FormContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user.userData
  };
};

export default connect(mapStateToProps)(Settings);

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  button {
    width: 20%;
    margin: 0 auto;
  }
`;

const PasswordField = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 10px;
  flex-direction: column;
  border: 1px solid black;

  button {
    width: 20%;
    margin: 0 auto;
  }
`;
