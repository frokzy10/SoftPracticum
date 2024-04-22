import {IUser} from "../../Form";

export interface ILoginFormSchema {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

// actions
export enum LoginFormActions {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    SET_LOADING = 'SET_LOADING',
}

// Определяем интерфейсы для каждого действия
interface RegistrationSuccessAction {
    type: typeof LoginFormActions.REGISTRATION_SUCCESS;
    payload: {
        accessToken: string;
        refreshToken: string;
        user: IUser;
    };
}

interface LoginSuccessAction {
    type: typeof LoginFormActions.LOGIN_SUCCESS;
    payload: {
        accessToken: string;
        refreshToken: string;
        user: IUser;
    };
}

interface LogoutSuccessAction {
    type: typeof LoginFormActions.LOGOUT_SUCCESS;
}

interface SetLoadingAction {
    type: typeof LoginFormActions.SET_LOADING;
    payload: boolean;
}

export const registrationSuccess = (accessToken: string, refreshToken: string, user: IUser) => {
    return{
        type:LoginFormActions.REGISTRATION_SUCCESS,
        payload:{accessToken,refreshToken,user}
    }
}

export const loginSuccess = (accessToken: string, refreshToken: string, user:IUser)=>{
    return{
        type:LoginFormActions.LOGIN_SUCCESS,
        payload:{accessToken,refreshToken,user}
    }
}

export const logoutSuccess = () => {
    return{
        type:LoginFormActions.LOGOUT_SUCCESS,
    }
}

export const setLoadingAction = (isLoading: boolean) => {
    return {
        type:LoginFormActions.SET_LOADING,
        payload:{isLoading}
    }
}