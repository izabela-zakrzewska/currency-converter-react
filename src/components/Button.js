import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="item" type="submit" id="button" onClick={onClick}>
      Przelicz
    </button>
  );
};

export default Button;
