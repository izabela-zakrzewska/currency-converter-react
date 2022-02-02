import React from "react";

const Select = ({ currency, setCurrency }) => {
  return (
    <select
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
      className="item"
      id="select">
      <option disabled value="0">
        Wybierz walutę
      </option>

      <option value="eur" id="eur">
        EUR
      </option>
      <option value="usd" id="usd">
        USD
      </option>
      <option value="chf" id="chf">
        CHF
      </option>
    </select>
  );
};

export default Select;
