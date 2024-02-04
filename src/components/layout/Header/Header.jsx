import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { headerNavLinks } from "../../..//constants/navigationData";

import Logo from "../../common/Logo/Logo";
import HeaderNav from "../Nav/HeaderNav";
import Button from "../../common/Button/Button";

import littleLemonLogo from "../../../assets/little-lemon-logo.svg";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Logo logoImg={littleLemonLogo} />
      <HeaderNav headerNavLinks={headerNavLinks} />
      <div className="button-group flex justify-center align-center">
        <Button variant="none">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
      <div className="hamburger-menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
