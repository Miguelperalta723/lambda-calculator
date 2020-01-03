import React from "react";

const NumberButton = (props) => {
  function clicked() {
    
  }
  return (
    <button className="number-button" onClick={clicked}>
      {props.numberProp}
    </button>
  );
};

export default NumberButton;
