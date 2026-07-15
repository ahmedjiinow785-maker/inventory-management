import api from "./api";

const getAllCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
};

const getCategoryById = async (id) => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
};

const createCategory = async (category) => {
    const response = await api.post("/categories", category);
    return response.data;
};

const updateCategory = async (id, category) => {
    const response = await api.put(`/categories/${id}`, category);
    return response.data;
};

const deleteCategory = async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
};

export default {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};