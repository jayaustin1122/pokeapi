import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
});

// Optional: interceptors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR:", error);
    return Promise.reject(error);
  },
);
