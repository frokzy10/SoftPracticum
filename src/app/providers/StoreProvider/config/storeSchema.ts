import {authStatus} from "../../../../entities/isLoggedIn/reducer/isLoggedIn";
import {UserReducer} from "../../../../entities/User/reducer/UserReducer";
import {LoginFormReducer} from "../../../../entities/LoginForm/reducer/LoginForm";


interface StoreSchema {
    isLoggedIn: typeof authStatus,
    user:typeof UserReducer,
    loginForm:typeof LoginFormReducer
}

interface IActions {
    type:string,
    payload?:any;
}

export type {
    StoreSchema,
    IActions,
}