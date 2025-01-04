import axios from "axios";

export const fetchCryptoData = async() => {
    try {
        const response = await axios.get("http://localhost:3000/api/crypto");
        return response.data;
    } catch (error) {
        console.error("Error fetching crypto data:", error);
        return [];
    }
};