import {FormTypesActions, IFormSchema} from "../types/FormTypes";
import {IActions} from "../../../../app/providers/StoreProvider";

const initialState: IFormSchema = {
    formData: {
        email: '',
        password: ''
    },
    errors: {},
}

export const FormReducer = (state = initialState, action: IActions): IFormSchema => {
    switch (action.type) {
        case FormTypesActions.SET_FORM_DATA:
            return {
                ...state,
                formData: {...state.formData, ...action.payload}
            }
        case FormTypesActions.UPDATE_FORM_DATA:
            return {
                ...state,
                errors: {...state.errors, ...action.payload}
            }
        default:
            return state
    }
}
