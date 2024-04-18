import {CLEAR_EMAIL_AND_PASSWORD, IUserSchema, SET_EMAIL_AND_PASSWORD, UserActionTypes} from "../types/UserTypes";
import {IActions} from "../../../app/providers/StoreProvider";

const initialState:IUserSchema = {
    email:null,
    password:null
}

export const UserReducer = (state = initialState,action:IActions):IUserSchema =>{
    switch (action.type){
        case SET_EMAIL_AND_PASSWORD:
            return{
                ...state,
                email:action.payload.email,
                password:action.payload.password
            }
        case CLEAR_EMAIL_AND_PASSWORD:
            return{
                ...state,
                email:null,
                password:null
            }
        default:
            return state
    }
}