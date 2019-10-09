import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button className="buttons numberButton">
      {props.displayNum}
      </button>
    </>
  );
};
export default NumberButton;
