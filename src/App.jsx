import Form from "./components/Form";
import "./css/App.css";

import { useRef, useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [hexValue, setHexValue] = useState("");
  const displayText = color ? color : "Empty Value";

  const squareRef = useRef(null);

  useEffect(() => {
    if (squareRef.current) {
      const computedColor = window.getComputedStyle(
        squareRef.current
      ).backgroundColor;
      const hex = rgbToHex(computedColor);
      setHexValue(hex);
    }
  }, [color]);

  const rgbToHex = (color) => {
    // If color is empty, return an empty string
    if (!color || color === "rgba(0, 0, 0, 0)") {
      return "";
    }
    // Convert RGB to HEX
    const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgb) return color;
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + (hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
  };

  const toggleTextColor = () => {
    setTextColor(textColor === "black" ? "white" : "black");
  };

  return (
    <div className="App">
      <Form
        color={color}
        setColor={setColor}
        textColor={textColor}
        toggleTextColor={toggleTextColor}
        squareRef={squareRef}
        hexValue={hexValue}
        displayText={displayText}
      />
    </div>
  );
}

export default App;
