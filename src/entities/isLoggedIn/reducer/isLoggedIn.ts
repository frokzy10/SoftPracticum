import {ILoggedInSchema, ILoggedInActions} from "../types/isLoggedInTypes";
import {IActions} from "../../../app/providers/StoreProvider";

const initialState:ILoggedInSchema = {
    isLoggedIn:false
}

export const authStatus = (state = initialState,action:IActions):ILoggedInSchema=>{
    switch (action.type){
        case ILoggedInActions.SET_AUTH_DATA:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default :
            return state
    }
}