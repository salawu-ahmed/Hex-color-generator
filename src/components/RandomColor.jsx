import React, { useState } from "react";
import styles from "./RandomColor.module.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("black");

  function utility(length) {
    return Math.floor(Math.random() * length);
  }
  const handleCreateHexColor = () => {
    const hexDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexDigits[utility(hexDigits.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgbColor = `rgb(${r},${g},${b})`;
    const rgbColor2 = `rgb(${utility(255)},${utility(255)},${utility(255)})`;

    console.log(rgbColor);
    console.log(rgbColor2);
    setColor(rgbColor);
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: color,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div className={styles.wrapper}>
          <button
            onClick={() => setColorType("rgb")}
            className={
              colorType === "rgb" ? `${styles.active}` : `${styles.deactivated}`
            }
          >
            Generate RGB color
          </button>
          <button
            onClick={() => setColorType("hex")}
            className={
              colorType === "hex" ? `${styles.active}` : `${styles.deactivated}`
            }
          >
            Generate Hex color
          </button>
          <button
            onClick={
              colorType === "hex" ? handleCreateHexColor : handleCreateRGBColor
            }
            className={styles.generate}
          >
            Generate Random Color
          </button>
        </div>
        <div className={styles.center}>
            <h1>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h1>
            <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
