// import React from "react";
import Logo from "../../common/Logo/Logo";
import HeaderNav from "../Nav/HeaderNav";
import Button from "../../common/Button/Button"

import "./header.scss";

function Header() {
  return (
    <header className="header flex justify-between align-center">
      <Logo />
      <HeaderNav />
      <div className="button-group flex justify-center align-center">
        <Button variant="none">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
