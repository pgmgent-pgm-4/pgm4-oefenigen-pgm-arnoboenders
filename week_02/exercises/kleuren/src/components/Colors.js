import React, { useState } from "react";
import Color from "./Color";

export default function Colors() {
  const [listColors, setListColors] = useState([
    "rgb(10,30,55)",
    "rgb(255,0,0)",
    "rgb(200,50,10)",
    "rgb(0,255,40)",
  ]);
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };
  const handleClick = () => {
    const newColor = generateRandomColor()
    setListColors((prev) => [...prev, newColor])
  }
  return (
    <div>
      {listColors.map((color) => (
        <Color color={color} />
      ))}
      <button onClick={handleClick}>Add random color</button>
    </div>
  );
}
