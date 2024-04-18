
interface IFormSchema{
    formData:{
        email:string,
        password:string
    },
    errors:object
}

export enum FormTypesActions {
    UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
    SET_FORM_DATA = "SET_FORM_DATA"
}
interface UpdateData {
    type:FormTypesActions.UPDATE_FORM_DATA,
    payload:string
}
export interface SetData {
    type:FormTypesActions.SET_FORM_DATA;
    payload:any
}

export type {
    IFormSchema
}