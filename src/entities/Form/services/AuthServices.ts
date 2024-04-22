import {API_URL} from "../../../shared/api/api";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/AuthResponse";
import {Dispatch} from "redux";
import {loginSuccess, registrationSuccess, setLoadingAction} from "../../LoginForm/types/LoginFormTypes";
import {NavigateFunction} from "react-router-dom";

export default class AuthServices {
    static async login(email: string, password: string, navigate: NavigateFunction, dispatch: Dispatch): Promise<AxiosResponse<AuthResponse>> {
        dispatch(setLoadingAction(true)); // Установка isLoading в true перед запросом

        try {
            const response = await API_URL.post<AuthResponse>("/log_in", {email, password});
            const {accessToken, refreshToken, user} = response.data
            dispatch(loginSuccess(accessToken, refreshToken, user));
            localStorage.setItem("token",response.data.accessToken);
            console.log(response)
            if (response.status === 200) {
                navigate("/game")
            }
            return response;
        } catch (error) {
            console.error("Ошибка входа:", error);
            throw error;
        } finally {
            dispatch(setLoadingAction(false));
        }
    }

    static async register(email: string, password: string, navigate: NavigateFunction, dispatch: Dispatch): Promise<AxiosResponse<AuthResponse>> {
        dispatch(setLoadingAction(true));
        try {
            const res = await API_URL.post<AuthResponse>("/auth", {email, password});
            const {accessToken, refreshToken, user} = res.data;
            localStorage.setItem("token",res.data.accessToken)
            console.log(res);
            dispatch(registrationSuccess(accessToken,refreshToken,user));

            if (res.status === 200) {
                navigate("/game");
            }
            return res
        } catch (e) {
            console.error("Ошибка входа:", e);
            throw e;
        }

    }

    static async logout(): Promise<void> {
        return API_URL.post('/logout')
    }
}
