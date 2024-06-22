import React, { useRef } from "react";
import Webcam from "react-webcam";

export const Webcam = () => {
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback((mediaDevices) => {
    setDevices(mediaDevices.filter(({ kind }) => kind === "videinput")),
      [setDevices];
  });

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <>
      {devices.map((device, key) => (
        <div key={key}>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {device.label || `Device ${key + 1}`}
        </div>
      ))}
    </>
  );
};
