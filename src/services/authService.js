import api from "./api";

const login = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

const register = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getToken = () => {
  return localStorage.getItem("token");
};

export default {
  login,
  register,
  logout,
  getToken,
};