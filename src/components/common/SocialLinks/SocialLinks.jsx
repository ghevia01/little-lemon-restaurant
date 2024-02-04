import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social-links.scss";

const SocialLinks = ({ socialMediaLinks }) => {
  return (
    <div className="socials-icon-group">
      {socialMediaLinks.map((social) => (
        <a
          key={social.name}
          className={`socials-icon ${social.className}`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  socialMediaLinks: PropType.array.isRequired,
};

export default SocialLinks;
