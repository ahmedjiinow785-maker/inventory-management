import api from "./api";

const login = async (data) => {
    const response = await api.post("/auth/login", data);

    localStorage.setItem("token", response.data.token);

    return response.data;
};

const register = async (data) => {
    const response = await api.post("/auth/register", data);
    return response.data;
};

const logout = () => {
    localStorage.removeItem("token");
};

export default {
    login,
    register,
    logout,
};