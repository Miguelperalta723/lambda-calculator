import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operators-button">
      {props.operatorProp}
    </button>
  );
};

export default OperatorButton;
