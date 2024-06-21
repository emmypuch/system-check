import React from "react";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="assessment">
          <div>
            <h4>Start assessment</h4>
          </div>
          <div>
            <button>Close</button>
          </div>
        </div>
        <div className="process-container">
          <h3>Proceed to start assessment</h3>
          <p>
            Kindly keep to the rules of the assessment and sit up, stay in front
            of your camera/webcam and start your assessment.
          </p>
        </div>
        <div className="proceed-btn">
          <a href="#">Proceed</a>
        </div>
      </div>
    </div>
  );
};
