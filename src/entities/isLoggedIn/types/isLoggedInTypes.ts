export interface ILoggedInSchema {
    isLoggedIn:boolean
}

// actions
export enum ILoggedInActions {
    SET_AUTH_DATA = "SET_AUTH_DATA"
}

export const setAuthDataAction = (value: boolean) => {
    return {
        type: ILoggedInActions.SET_AUTH_DATA,
        payload: value
    };
};