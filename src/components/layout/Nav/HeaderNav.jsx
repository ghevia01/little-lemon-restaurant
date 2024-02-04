import PropType from "prop-types";
import { Link } from "react-router-dom";

import "./header-nav.scss";

function HeaderNav({ headerNavLinks }) {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        {headerNavLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

HeaderNav.propTypes = {
  headerNavLinks: PropType.array.isRequired,
};

export default HeaderNav;
