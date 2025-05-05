import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
