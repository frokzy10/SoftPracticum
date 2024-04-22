import axios from "axios";
import {API_URL} from "../../../shared/api/api";

export async function checkToken() {
    try {
        const response = await axios.get(`${API_URL}/refresh`,{withCredentials:true});
        console.log(response);
        localStorage.setItem("token",response.data.accessToken);

    } catch (error) {
        console.error('Ошибка входа:', error);
    }
}