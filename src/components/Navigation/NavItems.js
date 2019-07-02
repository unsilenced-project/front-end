import React from "react";

import NavItem from "./NavItem";

export default function NavItems() {
  return (
    <div>
      <CustomNavLink exact link="/">
        Home
      </CustomNavLink>
      <CustomNavLink link="/about-us">About</CustomNavLink>
    </div>
  );
}

const CustomNavLink = styled(NavLink)`
  color: black;
  font-size: 1.6rem;
  text-decoration: none;
  padding-bottom: 2.1rem;
  line-height: 1.5;
  text-transform: uppercase;
  &:hover,
  &.active {
    border-bottom: 4px solid red;
    color: blue;
  }
`;
