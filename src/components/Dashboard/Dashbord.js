import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Bounce from "react-reveal/Bounce";
import { Message } from "semantic-ui-react";

const Dashboard = () => {
  const [inputLink, setInputLink] = useState("");
  const [currentUser, setCurrentUser] = useState("testUser");
  const [unsilencedPath, setUnsilencedPath] = useState("");
  const [showLinkButton, setShowLinkButton] = useState(false);
  const [error, setError] = useState("");
  //   const [youtubeIntentifier, setYoutubeIndentifier] = useState("");

  const handleChange = e => {
    setInputLink(e.target.value);
  };

  const handleGenerate = () => {
    linkParser(inputLink);
  };

  const inputValidation = () => {
    if (inputLink.length === 0) {
      setError("Please provide a youtube link");
      setShowLinkButton(false);
      return false;
    } else if (!inputLink.includes("www.youtube.com/")) {
      setError("Please provide valid youtube link");
      setShowLinkButton(false);

      return false;
    }
    return true;
  };

  const linkParser = link => {
    const splitBy = link.split("/");
    //console.log(splitBy);
    //setYoutubeIndentifier(splitBy[3]);
    if (inputValidation()) {
      setError(null);
      createUnsilencedPath(splitBy[3]);
    }
  };

  const createUnsilencedPath = link => {
    setShowLinkButton(true);
    console.log(link);
    const path = `${currentUser}/${link}`;
    setUnsilencedPath(path);
  };

  return (
    <EntryWrap>
      <Wrapper>
        <h1>We are here to Help</h1>
        <h2>
          Paste your youtube link here and start your comments experience with
          us
        </h2>
      </Wrapper>
      <Title>
        <>UNSILENCED</>
      </Title>
      <InputWrapper>
        <Input
          label="youtube link"
          // className={classes.textField}
          onChange={handleChange}
          type="text"
          variant="outlined"
        />
      </InputWrapper>
      <ButtonWrapper>
        <button onClick={handleGenerate}>Generate</button>
      </ButtonWrapper>
      <LinkWrapper>
        {showLinkButton && (
          <Bounce>
            <Link to={`${unsilencedPath}`}>
              <Message>https://unsilenced/{unsilencedPath}</Message>
            </Link>
          </Bounce>
        )}

        {error && (
          <Bounce>
            <Message error>{error}</Message>{" "}
          </Bounce>
        )}
      </LinkWrapper>
    </EntryWrap>
  );
};

export default Dashboard;

const EntryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #85144b;
  color: lightslategray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
  font-family: "Monoton", cursive;
  font-size: 50px;
  letter-spacing: 20px;
  padding: 40px;
`;

const InputWrapper = styled.div``;

const Input = styled(TextField)`
  width: 400px;
  height: 100px;
  padding: 400px;
  color: red;
`;

const ButtonWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;

  button {
    padding: 20px 100px;
    border-radius: 20%;
    max-width: 400px;
    font-size: 20px;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    outline: none;

    &:before {
      content: "Unsilenced";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #85144b;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(5);
      opacity: 0;
      transition: all 0.5s;
    }
    &:hover:before {
      transform: scale(1);
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const LinkWrapper = styled.div`
  padding: 20px;
  outline: none;
  text-decoration: none;
  font-size: 20px;

  a {
    color: red;

    &:hover {
      color: green;
    }
  }
`;
