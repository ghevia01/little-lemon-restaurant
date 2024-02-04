import PropType from "prop-types";
import { Link } from "react-router-dom";
import "./logo.scss";

function Logo({ logoImg }) {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logoImg} alt="Little Lemon Logo" />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  logoImg: PropType.string.isRequired,
};

export default Logo;
