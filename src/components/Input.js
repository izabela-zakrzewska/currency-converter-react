import React from "react";

const Input = ({ inputValue, setInputValue }) => {
  return (
    <input
      className="item"
      type="number"
      min="0"
      id="input"
      placeholder="Wpisz kwotę"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export default Input;
