import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptos }) => (
    <div>
        {cryptos.map((crypto) => {
            return <CryptoItem key={crypto.id} crypto={crypto} />;  // Add return statement here
        })}
    </div>
);

export default CryptoList;
