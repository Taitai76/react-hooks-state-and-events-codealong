import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn]= useState(false)
  
  function handleC(){
    setIsOn(!isOn);
  }

  return <button onClick={handleC}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
