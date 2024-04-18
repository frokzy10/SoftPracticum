import {FormReducer} from "../../../../entities/Form/model/reducer/FormReducer";
import {authStatus} from "../../../../entities/isLoggedIn/reducer/isLoggedIn";


interface StoreSchema {
    form: typeof FormReducer,
    isLoggedIn:typeof authStatus
}

interface IActions {
    type:string,
    payload?:any;
}

export type {
    StoreSchema,
    IActions,
}