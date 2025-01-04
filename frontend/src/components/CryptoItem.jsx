import React from "react";

const CryptoItem = ({ crypto }) => (
    <div className="crypto-item">
        <h2>{crypto.name}</h2>
        <p>Price: ${crypto.current_price.toFixed(2)}</p>
        <p>Market Cap: ${crypto.market_cap.toFixed(2)}</p>
        <p>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
)

export default CryptoItem;