import {API_URL} from "../../../shared/api/api";
import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/AuthResponse";

export default class AuthServices {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return API_URL.post<AuthResponse>("/log_in", {email, password})
    }

    static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return API_URL.post<AuthResponse>("/auth", {email, password})
    }

    static async logout(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return API_URL.post<AuthResponse>("/logout", {email, password})
    }
}