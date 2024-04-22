import React, { useEffect, useState } from "react";

export default function Username() {
  const [name, setName] = useState("");
  useEffect(
    () => {
      //   runs side effect here
      console.log("Mounted or rerenderd");
      return () => {
        //   do clean up here
        console.log("Clean up - unmounted");
      };
    },
    [name]
    //   array of dependecies
  );
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <p>{name}</p>
      <label>Username</label>
      <input id="username" type="text" value={name} onChange={handleChange} />
    </div>
  );
}
