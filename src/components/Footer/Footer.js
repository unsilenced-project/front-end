import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Navigation = props => {
  return (
    <NavContainer>
      <Logo>
        <img src={logo} alt="logoo" />
      </Logo>
      <h1>ALL RIGHT RESERVED</h1>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.div`
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: #fff;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  h1 {
    font-size: 17px;
    padding: 10px;
  }
  /* @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  } */
`;

const Logo = styled.div`
  img {
    width: 100px;
    border-radius: 30%;
  }
`;

const NavContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
