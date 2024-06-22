import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 275,
  height: 168,
  borderRadius: 10,
  facingMode: "environment",
};

export const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {};

  return (
    <>
      <div
        className="picture-container"
        style={{
          borderRadius: "10px",
        }}
      >
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
          mirrored={true}
        />
        <button onClick={capturePhoto}>Take picture and continue</button>
        {/* <button onClick={() => setUrl(null)}>Refresh</button> */}

        {url && (
          <div>
            <img src={url} alt="screenshot" />
          </div>
        )}
      </div>
    </>
  );
};
