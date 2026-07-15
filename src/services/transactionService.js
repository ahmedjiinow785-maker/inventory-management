import api from "./api";

const getAllTransactions = async () => {
    const response = await api.get("/transactions");
    return response.data;
};

const stockIn = async (data) => {
    const response = await api.post("/transactions/stock-in", data);
    return response.data;
};

const stockOut = async (data) => {
    const response = await api.post("/transactions/stock-out", data);
    return response.data;
};

export default {
    getAllTransactions,
    stockIn,
    stockOut,
};