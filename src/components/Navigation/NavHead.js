import React from "react";
import Logo from "./Logo";
import { Hamburger } from "./NavigationStyles";
import { FaBars } from "react-icons/fa";

export default function Header({ toggle }) {
  return (
    <div>
      <Logo />
      <Hamburger onClick={() => toggle()} />
    </div>
  );
}

export const Hamburger = styled(FaBars)`
  color: ${primary_color};
  cursor: pointer;
  font-size: 1.6rem;
  display: none;
  @media (max-width: 500px) {
    display: inline-block;
  }
  &:hover {
    border: 1px solid ${primary_color};
    border-radius: 4px;
    padding: 2px;
  }
`;
