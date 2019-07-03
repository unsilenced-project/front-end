import React from "react";
import styled, { css } from "styled-components";
import { Title } from "./landingStyles";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <MissionContainer>
      <Article>
        <Title>Unsilenced</Title>
        <p>
          Comments disabled? Not anymore. Take back the conversation with your
          own Unsilenced Space. Add a simple link to your video description to
          provide an enhanced viewing experience for your visitors, complete
          with comments. Moderated and unmoderated options available.
        </p>
        <p>This service is and always will be free.</p>
        <GetStarted
          to={localStorage.getItem("token") ? "/dashboard" : "/login"}
        >
          Get Started
        </GetStarted>
      </Article>
    </MissionContainer>
  );
}

const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;

const MissionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkred;
  flex-wrap: nowrap;
  @media (max-width: 500px) {
    height: 700px;
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightcyan;
  width: 60%;
  margin: auto;
  padding: 2rem;
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    line-height: 1.5;
    text-align: justify;
    padding-top: 2rem;
    font-size: 1.3rem;
  }

  h2 {
    position: relative;
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: bold;
    &::after {
      content: " ";
      position: absolute;
      height: 2px;
      width: 30%;
      background-color: lightgray;
      bottom: 0;
      right: 30%;
    }
    &:hover {
      color: grey;
      ${transition};
    }
  }
`;

const GetStarted = styled(Link)`
  margin-top: 4rem;
  width: 280px;
  height: 57px;
  padding: 1rem 2rem;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  font-weight: 400;
  font-size: 1.8rem;
  color: darkred;
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: black;
    border: 2px solid #fff;
    color: #fff;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
  }
`;
