import {FormReducer} from "../../../../entities/Form/model/reducer/FormReducer";


interface StoreSchema {
    form: typeof FormReducer,
}

interface IActions {
    type:string,
    payload?:any;
}

export type {
    StoreSchema,
    IActions,
}