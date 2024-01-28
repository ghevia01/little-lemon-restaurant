import { Link } from "react-router-dom";

import "./header-nav.scss";

function HeaderNav() {
  return (
    <nav className="header-nav flex justify-between align-center">
      <ul className="flex justify-center align-center">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Order Online
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
