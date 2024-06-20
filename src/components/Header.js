import React from "react";
import { TimeCounter } from "./TimeCounter";

export const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src="" alt="Logo" />
          </a>
          <div className="logo-header">
            <h2>Frontend developer</h2>
            <p>Skill assessment test</p>
          </div>
        </div>
        <TimeCounter />
      </nav>
    </>
  );
};
