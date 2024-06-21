import React from "react";
import Clock from "../images/time.svg";
import Hide from "../images/hide.svg";

export const TimeCounter = () => {
  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <div className="timer">
          <div>
            <img src={Clock} alt="Clock" />
          </div>
          <div className="timer-count">
            <p>
              29:10 <span>time left</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hide">
        <img src={Hide} alt="eye" />
      </div>
    </div>
  );
};
