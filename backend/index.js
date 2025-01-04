import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
}));

// To get crypto data
app.get("/api/crypto", async (req, res) => {
    try {
        const response = await axios.get("http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", 
        {params : {vs_currency: "usd"}}
        )
        res.json(response.data);
    } catch (error) 
    {
        console.error('Error fetching data from CoinGecko:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
    }
});

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);  
})