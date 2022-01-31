import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Result from "./components/Result";
//import Axios from "axios";

/* let getData = async () => {
  let responseEUR = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/eur/"
  );
  let responseUSD = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/usd/"
  );
  let responseCHF = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/chf/"
  );

  if (optionEUR) {
    finalAmount = amountFromInput.value * responseEUR.data.rates[0].mid;
  } else if (optionUSD) {
    finalAmount = amountFromInput.value * responseUSD.data.rates[0].mid;
  } else if (optionCHF) {
    finalAmount = amountFromInput.value * responseCHF.data.rates[9].mid;
  }


document.querySelector("#button").addEventListener("click", getData); */

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState(0);

  const createResult = () => {
    let finalResult;
    setResult(finalResult);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Przelicznik walut</h1>
        <div className="outerForm">
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Select currency={currency} setCurrency={setCurrency} />
          <Button onClick={createResult} />
          <Result result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
