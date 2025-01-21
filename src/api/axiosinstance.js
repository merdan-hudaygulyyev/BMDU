import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://bmdu.depder.com/api',
});
export { axiosInstance };
