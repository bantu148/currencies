import axios from "axios";
const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": 'application/jspn'
    },
})

export const getCurrencis = async () => {
    const response = await api.get('/currencies.json');
    return response.data;
}