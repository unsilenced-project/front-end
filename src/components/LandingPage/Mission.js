import React from "react";
import styled, { css } from "styled-components";

export default function Mission() {
  return (
    <MissionContainer>
      <Article>
        <h2>What We Can Offer</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheet
        </p>
        <GetStarted>Learn More</GetStarted>
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
    height: 500px;
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

const GetStarted = styled.button`
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
  &:hover {
    background: black;
    border: 2px solid #fff;
    color: #fff;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
`;
