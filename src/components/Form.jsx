import React from "react";
import Square from "./Square";
import "../css/form.css";

const Form = ({
  color,
  setColor,
  textColor,
  toggleTextColor,
  squareRef,
  hexValue,
  displayText,
}) => {
  return (
    <div>
      <Square
        color={color}
        textColor={textColor}
        squareRef={squareRef}
        hexValue={hexValue}
        displayText={displayText}
      />

      <form className="form">
        <label htmlFor="addColor">Add Color</label>
        <input
          type="text"
          autoFocus
          id="addColor"
          placeholder="Add Color Name"
          required
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
      <button onClick={toggleTextColor}>Toggle Text Color</button>
    </div>
  );
};

export default Form;
