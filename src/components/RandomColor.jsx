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

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: color,
      }}
    >
      <div className={styles.wrapper}>
        <button onClick={() => setColorType("rgb")}>Generate RGB color</button>
        <button onClick={() => setColorType("hex")}>Generate Hex color </button>
        <button
          onClick={
            colorType === "hex" ? handleCreateHexColor : handleCreateRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div>{color}</div>
    </div>
  );
};

export default RandomColor;