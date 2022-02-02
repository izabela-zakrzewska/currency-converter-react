import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Result from "./components/Result";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState(0);
  const [result, setResult] = useState(0);

  const createResult = async () => {
    if (currency) {
      const response = await axios.get(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}`
      );
      console.log(response);
      let dataFromAxios = response.data.rates[0].mid;
      let finalResult = inputValue * dataFromAxios;
      setResult(finalResult.toFixed(2));
    }
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
