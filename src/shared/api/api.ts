import axios from "axios"

export const API_URL = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:8000/api"
})
API_URL.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})