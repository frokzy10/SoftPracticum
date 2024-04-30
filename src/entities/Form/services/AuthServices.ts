import {API_URL} from "../../../shared/api/api";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/AuthResponse";


export default class AuthServices {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return  API_URL.post<AuthResponse>("/login", {email, password});
    }

    static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return API_URL.post<AuthResponse>("/register", {email, password});
    }

    static async logout(): Promise<void> {
        return API_URL.post('/logout')
    }
    static points(userId:any,headers:any):Promise<AxiosResponse<AuthResponse>>{
        return API_URL.post('/points',{userId},{headers})
    }
}
