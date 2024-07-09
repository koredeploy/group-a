import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tedible-backend.onrender.com",
});

export default axiosInstance;
