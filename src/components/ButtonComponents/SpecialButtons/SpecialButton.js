import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="buttons specialButton">
        {props.displaySpe}
      </button>
      </>
  );
};
export default SpecialButton;