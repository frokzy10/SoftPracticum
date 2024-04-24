import axios from "axios"
import {AuthResponse} from "../../entities/Form/models/AuthResponse";

export const API_URL = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:8000/api"
});

API_URL.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
});
API_URL.interceptors.response.use((config)=>{
    return config
},async (error)=>{
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:8000/api/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return API_URL.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})