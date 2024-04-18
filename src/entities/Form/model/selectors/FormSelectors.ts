const getForm = (state:any) => state.form;
const getFormData = (state:any) => state.form.formData;
const getFormError = (state:any) => state.form.errors
const getFormDataEmail = (state:any) => state.form.formData.email
const getFormDataPassword = (state:any) => state.form.formData.password

export const FormSelectors = {
    getForm,
    getFormData,
    getFormError,
    getFormDataEmail,
    getFormDataPassword
}