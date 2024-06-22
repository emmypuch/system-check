// ObjectDetection.js

import React, { useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ObjectDetection = ({ imageUrl }) => {
  const [loading, setLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const runObjectDetection = async () => {
      const net = await cocoSsd.load();
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.onload = async () => {
        // Detect objects in the image
        const predictions = await net.detect(imageElement);
        setPredictions(predictions);
        setLoading(false);
      };
    };

    if (imageUrl) {
      runObjectDetection();
    }
  }, [imageUrl]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="object-detection">
      {predictions.map((prediction, index) => (
        <div key={index}>
          <p>
            {prediction.class} - {Math.round(prediction.score * 100)}%
          </p>
          <div
            style={{
              position: "absolute",
              top: prediction.bbox[1],
              left: prediction.bbox[0],
              width: prediction.bbox[2],
              height: prediction.bbox[3],
              border: "2px solid red",
              backgroundColor: "transparent",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ObjectDetection;
