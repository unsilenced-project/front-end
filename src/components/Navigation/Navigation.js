import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  // const [isOpen, setState] = useState(false);

  // const toggleNav = () => {
  //   setState(prevState => !prevState);
  // };

  return (
    <NavContainer>
      <Logo>
        <img src={logo} alt="logoo" />
      </Logo>

      <NavContent>
        <NavItems>
          <NavLinkWrap exact to="/">
            Home
          </NavLinkWrap>
          <NavLinkWrap to="/about-us">About</NavLinkWrap>
          {localStorage.getItem("token") && (
            <NavLinkWrap to="/settings">Settings</NavLinkWrap>
          )}
        </NavItems>
        <Hamburger />
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: #fff;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  /* @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  } */
`;

export const Hamburger = styled(FaBars)`
  color: darkred;
  cursor: pointer;
  font-size: 1.6rem;
  display: none;
  @media (max-width: 500px) {
    display: inline-block;
  }
  &:hover {
    border: 1px solid darkred;
    border-radius: 4px;
    padding: 2px;
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
    border-radius: 30%;
  }
`;

const NavItems = styled.div`
  padding-right: 50px;
`;

const NavLinkWrap = styled(NavLink)`
  font-size: 1.4rem;
  color: darkred;
  padding: 1.1rem 1rem;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  &:hover,
  &.active {
    border-bottom: 4px solid darkred;
    color: green;
    text-decoration: none;
  }
`;

const NavContent = styled.div`
  display: flex;
`;
