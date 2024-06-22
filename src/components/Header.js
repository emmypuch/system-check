import React from "react";
import { TimeCounter } from "./TimeCounter";
import Logo from "../images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-content">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="logo-header">
          <h2>Frontend Developer</h2>
          <p>Skill Assessment Test</p>
        </div>
      </div>
      <nav className="nav-menu">
        <TimeCounter />
      </nav>
    </header>
  );
};
