import api from "./api";

const getAllProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

const createProduct = async (product) => {
    const response = await api.post("/products", product);
    return response.data;
};

const updateProduct = async (id, product) => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
};

const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
};

const getLowStockProducts = async (level) => {
    const response = await api.get(`/products/low-stock/${level}`);
    return response.data;
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getLowStockProducts,
};