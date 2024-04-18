import axios from "axios";
import {API_URL} from "../../../shared/api/api";
import {NavigateFunction} from "react-router-dom";
import {setAuthDataAction} from "../../../entities/isLoggedIn/types/isLoggedInTypes";
import {Dispatch} from "redux";
import {setEmailAndPassword} from "../../../entities/User/types/UserTypes";


export const LoginUtil = async (
    email: string,
    password: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,
    navigate:NavigateFunction,
    dispatch:Dispatch
) => {
    const isEmailValid = (email: string) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    };

    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);

    setEmailError("Неправильно введен email")
    setPasswordError(
        passwordValid ? "Неправильно введен пароль" : ""
    );

    if (!emailValid || !passwordValid) {
        return;
    }

    try {
        const res = await axios.post(`${API_URL}/log_in`, {
            email,
            password
        });

        if (res.data.message === "exist") {
            dispatch(setAuthDataAction(true))
            dispatch(setEmailAndPassword(email,password));
            navigate("/game");
        } else if (res.data.message === "notexist") {
            setEmailError("Вы не зарегистрированы");
        }
    } catch (error) {
        alert("Произошла ошибка при входе");
        console.error(error);
    }
}