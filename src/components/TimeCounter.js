import React, { useState, useEffect } from "react";
import Clock from "../images/time.svg";
import Hide from "../images/hide.svg";
import Close from "../images/close-eye.png";

export const TimeCounter = () => {
  const [showTimeLeft, setShowTimeLeft] = useState(true);
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 10); // Initial time in seconds (29 minutes and 10 seconds)

  const toggleTimeLeft = () => {
    setShowTimeLeft(!showTimeLeft);
  };

  useEffect(() => {
    let intervalId;

    if (showTimeLeft) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(intervalId);
            return 0;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000); // Update every second
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [showTimeLeft]);

  // Format seconds into MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <div className="timer">
          <div>
            <img src={Clock} alt="Clock" />
          </div>
          <div className="timer-count">
            {showTimeLeft ? (
              <p>
                {formatTime(timeLeft)} <span>time left</span>
              </p>
            ) : (
              <p>****</p>
            )}
          </div>
        </div>
      </div>
      <div className="hide" onClick={toggleTimeLeft}>
        <div className="close-eye"></div>
        <img src={Hide} alt="eye" />
        {/* <img src={Close} alt="" className="close-eye" /> */}
      </div>
    </div>
  );
};
