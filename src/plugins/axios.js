import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
})
export default axiosInstance