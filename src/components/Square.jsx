import React from "react";
import "../css/Square.css";

const Square = ({ color, textColor, squareRef, displayText, hexValue }) => {
  return (
    <div
      className="square"
      style={{ backgroundColor: color, color: textColor }}
      ref={squareRef}
    >
      <p>{displayText}</p>
      <p>{hexValue}</p>
    </div>
  );
};

export default Square;
