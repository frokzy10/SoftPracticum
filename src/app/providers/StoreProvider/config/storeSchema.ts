import {FormReducer} from "../../../../entities/Form/model/reducer/FormReducer";
import {authStatus} from "../../../../entities/isLoggedIn/reducer/isLoggedIn";
import {UserReducer} from "../../../../entities/User/reducer/UserReducer";


interface StoreSchema {
    form: typeof FormReducer,
    isLoggedIn: typeof authStatus,
    user:typeof UserReducer
}

interface IActions {
    type:string,
    payload?:any;
}

export type {
    StoreSchema,
    IActions,
}