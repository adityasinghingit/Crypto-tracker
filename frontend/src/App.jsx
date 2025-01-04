import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "./services/getCryptoData";
import CryptoList from "./components/cryptoList";
import "./App.css";

function App() {
  const [ cryptos, setCryptos ] = useState([]);

  useEffect(() => {
    const loadCryptoData = async () => {
      const data = await fetchCryptoData();
      setCryptos(data);
    };

    loadCryptoData();
  }, []);

  return (
    <div className="App">
      <h1>Cryptocurrency Tracker</h1>
      <CryptoList cryptos={cryptos} />
    </div>
  );
}


export default App;