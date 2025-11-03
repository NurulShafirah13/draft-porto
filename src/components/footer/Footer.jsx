import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-left">
          &copy; {new Date().getFullYear()} Nurul Shafirah Ramadhani Portofolio
          Website
        </p>
        <div className="footer-right">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> nshafirah37@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} /> NurulShafirah13
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/nurul-shafirah-r
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
