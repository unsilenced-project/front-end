import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import step1 from "../../assets/Step-1.jpg";
import step2 from "../../assets/Step-2.jpg";
import step3 from "../../assets/Step-3.jpg";
import step4 from "../../assets/Step-4.jpg";
import step5 from "../../assets/Step-5.jpg";
import step6 from "../../assets/Step-6.jpg";
import step7 from "../../assets/Step-7.jpg";
import final from "../../assets/Final-Step.jpg";

export default function Tutorial() {
  return (
    <TutorialsWrap>
      <Navigation />
      <TutorialContainer>
        <Article>
          <Title>Disqus Quick Start</Title>
          <p>
            Follow the steps below to get started with Disqus. Setup will take
            less than five minutes. Making your own account will give you
            powerful moderation and customization capabilities.
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer color="black" background="white">
        <Article color="black" links="darkred">
          <Title color="darkred">Step 1</Title>
          <h3>
            Go to{" "}
            <a
              href="https://disqus.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens in a new window"
            >
              Disqus.com
            </a>{" "}
            and click <strong>Get Started</strong>
          </h3>
          <p>
            <img src={step1} alt="Disqus Get Started page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer>
        <Article>
          <Title>Step 2</Title>
          <h3>Enter details for signup or log in with an existing account</h3>
          <p>
            <img src={step2} alt="Disqus signup page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer color="black" background="white">
        <Article color="black" links="darkred">
          <Title color="darkred">Step 3</Title>
          <h3>
            Select <strong>I want to install Disqus on my site</strong>
          </h3>
          <p>
            <img src={step3} alt="Disqus install page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer>
        <Article>
          <Title>Step 4</Title>
          <h3>Choose a unique name for your site</h3>
          <h3>
            <strong>IMPORTANT!</strong>
          </h3>
          <h3>
            This will be the name you enter for{" "}
            <strong>Disqus subdomain</strong> on the Unsilenced registration
            page
          </h3>
          <p>
            <img src={step4} alt="Disqus subdomain name page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer color="black" background="white">
        <Article color="black" links="darkred">
          <Title color="darkred">Step 5</Title>
          <h3>
            Unless you expect more than 50K visitors every day or are
            commercial, you can choose <strong>Free</strong> for ad-free
            comments. If you have a really popular channel, choose{" "}
            <strong>Basic</strong> for an ad-supported comments section.
          </h3>
          <p>
            <img src={step5} alt="Disqus subscription page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer>
        <Article>
          <Title>Step 6</Title>
          <h3>
            Ignore platform selection and go straight to{" "}
            <strong>Settings</strong>
          </h3>
          <p>
            <img src={step6} alt="Disqus platform page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer color="black" background="white">
        <Article color="black" links="darkred">
          <Title color="darkred">Step 7</Title>
          <h3>
            Select <strong>Community</strong> and choose your moderation
            settings
          </h3>
          <p>
            Allowing guest commenting is highly recommended so your visitors
            don't need to log in with a social media account or Disqus. For the
            best user experience we also recommend setting Pre-moderation to
            None, unless you have issues with trolls or are administering an
            account for a child. Check out the other settings and choose what
            makes sense for your needs.
          </p>
          <p>
            <img src={step7} alt="Disqus community page" />
          </p>
        </Article>
      </TutorialContainer>
      <TutorialContainer>
        <Article>
          <Title>Final Step!</Title>
          <h3>
            Return to our <Link to="/register">Registration</Link> page and
            enter your <strong>Disqus subdomain</strong> from Step 4 into the
            form
          </h3>
          <p>
            <img src={final} alt="Unsilenced signup page" />
          </p>
        </Article>
      </TutorialContainer>
      <Footer />
    </TutorialsWrap>
  );
}

const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
  font-family: "Monoton", cursive;
  font-size: 50px;
  letter-spacing: 20px;
  padding: 40px;
  color: ${props => (props.color ? props.color : "white")};
`;

const TutorialsWrap = styled.div`
  padding-top: 75px;
`;

const TutorialContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.background ? props.background : "darkred"};
  color: ${props => (props.color ? props.color : "black")};
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
  padding: 2rem 2rem 4rem;
  @media (max-width: 1000px) {
    width: 100%;
  }
  p {
    line-height: 1.5;
    text-align: justify;
    padding-top: 2rem;
    font-size: 1.3rem;
    color: ${props => (props.color ? props.color : "white")};
  }

  strong,
  a {
    color: ${props => (props.links ? props.links : "white")};
  }

  a {
    text-decoration: underline;
  }

  h2,
  h3 {
    position: relative;
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: bold;

    &:hover {
      color: grey;
      ${transition};
    }
  }

  h3 {
    font-size: 2.5rem;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  }
`;

// const GetStarted = styled(Link)`
//   margin-top: 4rem;
//   width: 280px;
//   height: 57px;
//   padding: 1rem 2rem;
//   background-color: #fff;
//   text-align: center;
//   line-height: 35px;
//   font-weight: 400;
//   font-size: 1.8rem;
//   color: darkred;
//   text-transform: uppercase;
//   -webkit-transition: all 0.25s ease-in-out;
//   transition: all 0.25s ease-in-out;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &:hover {
//     background: black;
//     border: 2px solid #fff;
//     color: #fff;
//     -webkit-transition: all 0.25s ease-in-out;
//     transition: all 0.25s ease-in-out;
//     text-decoration: none;
//   }
// `;
