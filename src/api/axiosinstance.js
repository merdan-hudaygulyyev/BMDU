import axios from "axios";

const token = "BMDU " + localStorage.getItem("access_token")
console.log(token)

const axiosInstance = axios.create({
  baseURL: "https://bmdu.depder.com/api",
  headers: {
    Authorization: token,
  },
});

export { axiosInstance };
