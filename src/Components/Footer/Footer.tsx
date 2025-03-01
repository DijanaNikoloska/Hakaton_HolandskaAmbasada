import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img
            src="/images/FooterLogo.png"
            alt="Logo"
            className="footer-logo"
          />
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <NavLink to="/help-center">Help Center</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/press">Press</NavLink>
        </div>

        <div className="footer-section">
          <h3>Community</h3>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/forums">Forums</NavLink>
          <NavLink to="/events">Events</NavLink>
        </div>

        <div className="footer-section">
          <h3>Social</h3>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
