import {ILoggedInSchema, ILoggedInActions} from "../types/isLoggedInTypes";
import {IActions} from "../../../app/providers/StoreProvider";

const initialState:ILoggedInSchema = {
    isLoggedIn:false,
    user:null
}

export const authStatus = (state = initialState,action:IActions):ILoggedInSchema=>{
    switch (action.type){
        case ILoggedInActions.SET_AUTH_DATA:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case ILoggedInActions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn:true,
                user:action.payload.user,
            }
        case ILoggedInActions.LOGOUT:
            return {
                ...state,
                isLoggedIn:false,
                user:null
            }
        default :
            return state
    }
}