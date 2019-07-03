import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import scrollToComponent from "react-scroll-to-component";

const Navigation = props => {
  const [isOpen, setSideBar] = useState(false);

  const logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const closeMenu = () => {
    setSideBar(false);
  };

  const toggleMenu = () => {
    setSideBar(!isOpen);
  };

  return (
    <NavContainer style={{ boxShadow: "0 0 5px rgba(0,0,0,0.5)" }}>
      <Logo>
        <Link
          to="/"
          onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Unsilenced logo" />
        </Link>
      </Logo>

      <NavContent>
        <NavItems>
          <NavLinkWrap
            exact
            to="/"
            onClick={e => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
          >
            Home
          </NavLinkWrap>
          <NavLinkWrap
            to="/"
            onClick={e => {
              e.preventDefault();
              window.scrollTo(0, 600);
            }}
          >
            About
          </NavLinkWrap>
          {localStorage.getItem("token") && (
            <SettingsWrapper>
              <NavLinkWrap to="/settings">Settings</NavLinkWrap>
              <Button
                inverted
                color="red"
                onClick={logout}
                style={{ marginLeft: 20 }}
              >
                Logout
              </Button>
            </SettingsWrapper>
          )}
        </NavItems>
        <Hamburger onClick={toggleMenu} />
      </NavContent>

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={closeMenu}
        vertical
        visible={isOpen}
        width="thin"
        style={{ marginTop: "100px" }}
      >
        <Menu.Item as="div" />
        <Menu.Item as="div" style={{ marginBottom: 50 }}>
          <Logo>
            <img src={logo} alt="Unsilenced logo" />
          </Logo>
        </Menu.Item>
        <Link
          to="/"
          onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <Menu.Item as="div" style={{ marginBottom: 50 }}>
            <Icon name="code" />
            Home
          </Menu.Item>
        </Link>
        <Link
          to="/"
          onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 600);
          }}
        >
          <Menu.Item as="a" style={{ marginBottom: 50 }}>
            <Icon name="user md" />
            About
          </Menu.Item>
        </Link>
        <Link to="/settings">
          <Menu.Item as="div" style={{ marginBottom: 50 }}>
            <Icon name="settings" />
            Settings
          </Menu.Item>
        </Link>

        <Button
          inverted
          color="red"
          onClick={logout}
          style={{ marginLeft: 20 }}
        >
          Logout
        </Button>
      </Sidebar>
    </NavContainer>
  );
};

export default withRouter(Navigation);

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
  font-size: 2.4rem;
  margin-right: 20px;
  display: none;
  z-index: 1000;
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
  padding-right: 20px;
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
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
    color: black;
    text-decoration: none;
  }
`;

const NavContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const SettingsWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    border-radius: 30%;
    padding: 0 10px;
    height: 50px;
    transition: all 1s;
    outline: none;
    &:hover {
      background-color: darkred;
      color: white;
    }
  }
`;
