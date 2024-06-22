import React, { useState } from "react";
import Capture from "../images/capture.svg";
import { Camera } from "./Camera";
import ObjectDetection from "./ObjectDetection";

export const PictureCapture = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleCapture = (imageSrc) => {
    setImageUrl(imageSrc);
  };

  return (
    <>
      <div className="picture-container">
        <Camera onCapture={handleCapture} />
      </div>
      {imageUrl && (
        <div className="picture-capture-container">
          <img src={imageUrl} alt="Captured" />
          {/* Add object detection */}
          <ObjectDetection imageUrl={imageUrl} />
        </div>
      )}
      {/* <div className="picture-capture-container">
        <img src={Capture} alt="" />
      </div> */}
    </>
  );
};
