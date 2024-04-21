import {ILoginFormSchema, LoginFormActions} from "../types/LoginFormTypes";
import {IUser} from "../../Form";
import {IActions} from "../../../app/providers/StoreProvider";

const initialState:ILoginFormSchema = {
    user:{} as IUser,
    isAuth:false,
    isLoading:false
}

export const LoginFormReducer = (state = initialState,action:IActions):ILoginFormSchema=>{
    switch (action.type){
        case LoginFormActions.LOGIN_SUCCESS:
        case LoginFormActions.REGISTRATION_SUCCESS:
            return {
                ...state,
                user:action.payload.user,
                isAuth:true
            }

        case LoginFormActions.LOGOUT_SUCCESS:
            return{
                ...state,
                isAuth:true,
                user: {} as IUser,
            }
        case LoginFormActions.SET_LOADING:
            return {
                ...state,
                isLoading:action.payload
            }

        default:
            return state
    }
}