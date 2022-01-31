import React from "react";

const Result = ({ result, setResult }) => {
  return (
    <div id="finalAmount" onChange={(e) => setResult(e.target.value)}>
      to {result} zł
    </div>
  );
};

export default Result;
