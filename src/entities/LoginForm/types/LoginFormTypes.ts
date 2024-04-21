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
export const LoginSuccessAction = (email:string,password:String)=>{
    return {
        type:LoginFormActions.LOGIN_SUCCESS,
        payload:{email,password}
    }
}
export const RegisterSuccessAction = (email:string,password:string)=>{
    return{
        type:LoginFormActions.REGISTRATION_SUCCESS,
        payload:{email,password},
    }
}
export const LogoutSuccessAction = () => {
    return{
        type:LoginFormActions.LOGOUT_SUCCESS
    }
}
export const setLoadingAction = (value:boolean)=>{
    return{
        type:LoginFormActions.SET_LOADING,
        payload:value
    }
}