export interface ILoggedInSchema {
    isLoggedIn:boolean,
    user:null
}

// actions
export enum ILoggedInActions {
    SET_AUTH_DATA = "SET_AUTH_DATA",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGOUT = "LOGOUT"
}

export const setAuthDataAction = (value: boolean) => {
    return {
        type: ILoggedInActions.SET_AUTH_DATA,
        payload: value
    };
};