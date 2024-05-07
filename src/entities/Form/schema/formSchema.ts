import * as yup from "yup";

export const FormSchema = {
    email:"",
    password:""
}
const regx = {
    email:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password:/^.{6,}$/
}
const emailValidator = yup.string()
    .matches(regx.email,"Введите почту. Например, example@example.com.")
    .required("Введите email")

const passwordValidator = yup.string()
    .matches(regx.password,"Пароль должен иметь не менее 6 букв")
    .required("Введите пароль")

export const yupSchema = {
    custom:yup.object().shape({
        emailValidator,
        passwordValidator
    })
}