import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="buttons numberButton">
      {props.displayNum}
      </button>
    </>
  );
};

export default NumberButton;
