import api from "./api";

const getAllUsers = async () => {
    const response = await api.get("/users");
    return response.data;
};

const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

const createUser = async (user) => {
    const response = await api.post("/users", user);
    return response.data;
};

const updateUser = async (id, user) => {
    const response = await api.put(`/users/${id}`, user);
    return response.data;
};

const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};