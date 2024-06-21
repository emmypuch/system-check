import React, { useState } from "react";
import { TimeCounter } from "./TimeCounter";
import Logo from "../images/logo.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo-content">
        <div className={`logo ${menuOpen ? "hide-small-screen" : ""}`}>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className={`logo-header ${menuOpen ? "hide-small-screen" : ""}`}>
          <h2>Frontend Developer</h2>
          <p>Skill Assessment Test</p>
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        <div className={`bar ${menuOpen ? "active" : ""}`}></div>
      </div>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <TimeCounter />
      </nav>
      {/* <div className="desktop">
        <TimeCounter />
      </div> */}
    </header>
  );
};
