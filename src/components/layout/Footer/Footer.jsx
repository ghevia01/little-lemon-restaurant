import { footerNavLinks } from "../../../constants/navigationData";
import { socialMediaLinks } from "../../../constants/socialMediaData";

import FooterNav from "../Nav/FooterNav";
import SocialLinks from "../../common/SocialLinks/SocialLinks";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-links">
        <FooterNav footerNavLinks={footerNavLinks} />
        <div className="footer-socials">
          <h3 className="socials-title">Follow us on Social Media</h3>
          <SocialLinks socialMediaLinks={socialMediaLinks} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; LITTLELEMON 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
