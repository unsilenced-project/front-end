import React from "react";
import Logo from "../../assets/logo.png";

export default function NavLogo() {
  return (
    <Logo>
      <img src={Logo} alt="logo" />
    </Logo>
  );
}

const Logo = styled.div``;
