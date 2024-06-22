import React, { useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ObjectDetection = ({ imageUrl }) => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const runObjectDetection = async () => {
      setLoading(true);
      const net = await cocoSsd.load();
      console.log("Model loaded:", net);

      if (imageUrl) {
        const imageElement = new Image();
        imageElement.src = imageUrl;
        imageElement.onload = async () => {
          console.log("Image loaded, running detection...");
          const predictions = await net.detect(imageElement);
          console.log("Predictions:", predictions);
          setPredictions(predictions);
        };

        imageElement.onerror = (error) => {
          console.error("Error loading image:", error);
        };
      }
      setLoading(false);
    };

    runObjectDetection();
  }, [imageUrl]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="object-detection" style={{ position: "relative" }}>
      {predictions.map((prediction, index) => (
        <div key={index} style={{ position: "absolute" }}>
          <p>
            {prediction.class} - {Math.round(prediction.score * 100)}%
          </p>
          <div
            style={{
              position: "absolute",
              top: `${prediction.bbox[1]}px`,
              left: `${prediction.bbox[0]}px`,
              width: `${prediction.bbox[2]}px`,
              height: `${prediction.bbox[3]}px`,
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
