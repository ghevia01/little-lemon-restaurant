import logo from "../../../assets/little-lemon-logo.svg";
import "./logo.scss";

function Logo() {
  return (
    <div className="logo flex justify-center align-center">
      <img src={logo} alt="Little Lemon Logo" />
    </div>
  );
}

export default Logo;