import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="buttons operatorButton">
        {props.displayOpr.char}
      </button>
      </>
  );
};
export default OperatorButton;