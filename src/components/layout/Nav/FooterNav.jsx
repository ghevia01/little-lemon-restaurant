import PropType from "prop-types";
import { Link } from "react-router-dom";

import "./footer-nav.scss";

const FooterNav = ({ footerNavLinks }) => {
  return (
    <nav className="footer-nav" aria-label="Footer navigation">
      {Object.values(footerNavLinks).map((section) => (
        <div className="nav-column" key={section.title}>
          <h4 className="nav-title">{section.title}</h4>
          <ul className="nav-list">
            {section.links.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link to={link.url} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

FooterNav.propTypes = {
  footerNavLinks: PropType.object.isRequired,
};

export default FooterNav;
