import React, { useState, useEffect } from "react";
import { TimeCounter } from "./TimeCounter";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (!isCounting) {
      setIsCounting(true);
    }
  };

  const handleProceed = () => {
    closeModal();
    if (!isCounting) {
      setIsCounting(true);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-container">
            <div className="assessment">
              <div>
                <h4>Start assessment</h4>
              </div>
              <div>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
            <div className="process-container">
              <h3>Proceed to start assessment</h3>
              <p>
                Kindly keep to the rules of the assessment and sit up, stay in
                front of your camera/webcam and start your assessment.
              </p>
            </div>
            <div className="proceed-btn">
              {isCounting ? (
                <TimeCounter />
              ) : (
                <a href="#" onClick={handleProceed}>
                  Proceed
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
