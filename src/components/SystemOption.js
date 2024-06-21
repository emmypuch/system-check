import React from "react";
import Webcam from "../images/webcam.svg";
import Speed from "../images/speed.svg";
import Light from "../images/light.svg";
import Circle from "../images/circle.svg";
// import Video from "../images/video.svg"
// import Internet from "../images/full-network.svg"
// import Microphone from "../images/microphone.svg"
// import LightFull from "../images/light-full.svg"

export const SystemOption = () => {
  return (
    <>
      <div className="system-option-container">
        <div className="box">
          <div className="box-content">
            <img src={Webcam} alt="webcam" />
            <p>Webcam</p>
            <div className="circle">
              <img src={Circle} alt="circle" />
              {/* <img src={Video} alt="video" /> */}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <img src={Speed} alt="speed" />
            <p>Speed</p>
            <div className="circle">
              <img src={Circle} alt="circle" />
              {/* <img src={Internet} alt="network" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="system-option-container">
        <div className="box">
          <div className="box-content">
            <img src={Webcam} alt="webcam" />
            <p>Gadget mic</p>
            <div className="circle">
              <img src={Circle} alt="circle" />
              {/* <img src={Microphone} alt="microphone" /> */}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <img src={Light} alt="speed" />
            <p>Lighting</p>
            <div className="circle">
              <img src={Circle} alt="circle" />
              {/* <img src={LightFull} alt="bulb" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
