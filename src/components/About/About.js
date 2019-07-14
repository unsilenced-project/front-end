import React from "react";
import "styled-components/macro";
import styled from "styled-components";
import sorin from "../../assets/sorin.jpg";
import michael from "../../assets/michael.jpeg";
// import Footer from "../Footer/Footer";

import {
  // FacebookIcon,
  // TwitterIcon,
  LinkedinIcon,
  GitHubIcon
} from "../generalStyles/reusables";

export default function AboutPage() {
  return (
    <Container id="about" background="white">
      <Section>
        <Article color="black">
          <Title color="darkred">About Unsilenced</Title>
          <p>
            In an effort to protection children from inappropriate comments on
            Youtube, Google disabled comments at mass scale on many accounts
            featuring children in any fashion, even if those accounts were
            well-moderated by adults. One of those channels was SBSK, Special
            Books by Special Kids, which despite its name features interviews
            with special people of all ages, of varying kinds and degrees of
            disability, and relies on comments as a way for the public to show
            their loving support and acceptance to those being interviewed and
            their families and friends. Google refused to re-enable their
            comments despite a massive petition with hundreds of thousands of
            supporters, and a long history of SBSK showing careful moderation of
            their comments. The people SBSK interviews were suddenly cut off
            from the support they so much need.
          </p>

          <p>
            The story has been the same for many positive channels on Youtube,
            and Google has refused to provide a process for comments to be
            restored.
          </p>

          <p>
            Creators whose comments have been disabled will be able to enter
            their Youtube video link in a form, and they will receive back a
            special link to include in the description section of their Youtube
            video. Clicking the link will take the user to Unsilenced where they
            can watch the video while also having a comments section below to
            interact with the video's creators, participants, and other viewers.
            Moderation is optional and left up to the video creator to decide.
            The comments section is kindly provided for free by Disqus.
          </p>

          <p>
            This is a tool to unsilence the silenced, and re-enable the free and
            easy discussion forum that these many good channels once enjoyed.
            While not ideal, we hope it will serve as a useful stopgap measure
            until Google provides a way for creators to have comments
            re-enabled, and also to send a message that broad, overreaching
            attempts to counter bad behavior that affect more good people than
            bad will never be acceptable or tolerated.
          </p>

          <Title color="darkred">Meet the Team</Title>
        </Article>
        <Content>
          <Profile>
            <Card bgImage={michael} />
            <h2>Michael Hart</h2>
            <SocialLinksWrapper>
              <a
                href="https://www.linkedin.com/in/michael-hart-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://github.com/fromthehart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </SocialLinksWrapper>
          </Profile>
          <Profile>
            <Card bgImage={sorin} />
            <h2>Sorin Chis</h2>
            <SocialLinksWrapper>
              <a
                href="https://www.linkedin.com/in/chis-sorin-993940130/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/SorinC6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </SocialLinksWrapper>
          </Profile>
        </Content>
      </Section>
    </Container>
  );
}

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
  font-family: "Monoton", cursive;
  font-size: 3rem;
  letter-spacing: 20px;
  padding: 40px;
  text-align: center;
  word-break: break-word;
  color: ${props => (props.color ? props.color : "white")};

  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  font-family: "Work Sans", sans-serif;
  background: ${props => (props.background ? props.background : "darkred")};
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
  padding: 2rem;
  font-size: 16px;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

const Article = styled.article`
  padding: 2rem 4rem 0rem;

  h1 {
    padding-top: 70px;
  }
  p {
    margin-top: 20px;
    line-height: 1.2;
    font-size: 16px;
    text-align: justify;
    color: ${props => (props.color ? props.color : "darkred")};
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
  @media (max-width: 500px) {
    width: 100%;
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

// const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(37, 37, 37, 0.459);
//   border-radius: 6px;
//   height: 100%;
//   width: 100%;
//   h3 {
//     font-size: 2.5rem;
//     padding: 1rem 0;
//   }

//   p {
//     margin-top: -5rem;
//     color: white;
//     text-align: center;
//     font-size: 2.5rem;
//     padding: 2rem;
//   }
// `;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
