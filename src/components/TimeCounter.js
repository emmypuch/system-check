import React from "react";

export const TimeCounter = () => {
  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <div className="timer">
          <div>
            <img src="" alt="Clock" />
          </div>
          <div className="timer-count">
            <p>
              29:10 <span>time left</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hide">
        <img src="" alt="eye" />
      </div>
    </div>
  );
};
