import React, { useState } from "react";

export default function LightSwitch() {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const handleClickSwitch = () => {
    setBackgroundColor(!backgroundColor);
  };
  
  return (
    <div>
          <button onClick={handleClickSwitch}>Switch color</button>
          
    </div>
  );
}
