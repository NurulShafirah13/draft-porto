import React, { useState } from "react";
import "./Navbar.scss";
import queenLogo from "../../assets/images/shaf-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <div className="logo-section">
          <img className="logo" src={queenLogo} alt="logo" />
          {/* <a className="logo-name">Rara's Portofolio</a> */}
        </div>

        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="menu-item">
            Home
          </Link>
          {/* <li>
            <Link to="/skills" className="menu-item">
              Skills
            </Link>
          </li> */}
          <li>
            <Link to="/projects" className="menu-item">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experiences" className="menu-item">
              Work Experiences
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
