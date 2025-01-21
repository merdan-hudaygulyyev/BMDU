import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/api" // Your development URL
    : "https://bmdu.depder.com/api"; // Your production URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance };
