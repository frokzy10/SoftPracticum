import {LoginFormActions} from "../types/LoginFormTypes";
import {IUser} from "../../Form";
import {IActions} from "../../../app/providers/StoreProvider";

interface ILoginFormSchema {
    accessToken: string;
    refreshToken: string;
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

const initialState: ILoginFormSchema = {
    accessToken: '',
    refreshToken: '',
    user: { email: '', isActivated: false, id: '' },
    isAuth: false,
    isLoading: false
};
export const LoginFormReducer = (state = initialState, action: IActions): ILoginFormSchema => {
    switch (action.type) {
        case LoginFormActions.REGISTRATION_SUCCESS:
        case LoginFormActions.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                isAuth: true,
                user:{
                    email:action.payload.user.email,
                    isActivated:action.payload.isActivated,
                    id:action.payload.user.id
                }
            };
        case LoginFormActions.LOGOUT_SUCCESS:
            return {
                ...state,
                accessToken: '',
                refreshToken: '',
                isAuth:false,
                user: { email: '', isActivated: false, id: '' },
            };
        case LoginFormActions.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};