import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special-buttons">
      {props.specialsProp}
    </button>
  );
};

export default SpecialButton;