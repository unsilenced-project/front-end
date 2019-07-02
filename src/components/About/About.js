import React from "react";
import "styled-components/macro";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import sorin from "../../assets/sorin.jpg";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  GitHubIcon
} from "../generalStyles/reusables";

export default function AboutPage() {
  return (
    <Container>
      <Navigation />
      <Section>
        <Article>
          <h1>Meet The Usilenced Team</h1>
          <p>
            While not ideal, We hope it will serve as a useful stopge measure
            until Google provides a way for creators to have comments
            re-enabled, and also to send a message that broad, overreaching
            attempts to counter bad behavior that affect more good people than
            bad will never be acceptable or tolerated.
          </p>
        </Article>
        <Content>
          <Profile>
            <Card bgImage="sdsds" />
            <h2>Michael Hart</h2>
            <SocialLinksWrapper>
              <a href="">
                <LinkedinIcon />
              </a>

              <a href="">
                <GitHubIcon />
              </a>
            </SocialLinksWrapper>
          </Profile>
          <Profile>
            <Card bgImage={sorin} />
            <h2>Sorin Chis</h2>
            <SocialLinksWrapper>
              <a href="">
                <LinkedinIcon />
              </a>

              <a href="">
                <GitHubIcon />
              </a>
            </SocialLinksWrapper>
          </Profile>
        </Content>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Work Sans", sans-serif;
  background-color: darkred;
  color: white;

  @media (max-width: 500px) {
    top: 0;
    -webkit-clip-path: none;
    clip-path: none;
    width: 100%;
    margin: 0;
  }
`;

const Section = styled.section`
  flex-wrap: nowrap;
  padding: 4rem 2rem;
  font-size: 16px;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

const Article = styled.article`
  margin-bottom: 3rem;

  h1 {
    padding-top: 70px;
  }
  p {
    margin-top: 20px;
    line-height: 1.2;
    font-size: 16px;
    text-align: center;
    @media (max-width: 500px) {
      text-align: justify;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  @media (max-width: 500px) {
    width: 100%;
    margin: 3rem 0;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px rgba(48, 37, 37, 0.459);
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 2px solid black;
  overflow: hidden;
  margin: 20px;
  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(37, 37, 37, 0.459);
  border-radius: 6px;
  height: 100%;
  width: 100%;
  h3 {
    font-size: 2.5rem;
    padding: 1rem 0;
  }

  p {
    margin-top: -5rem;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    padding: 2rem;
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
