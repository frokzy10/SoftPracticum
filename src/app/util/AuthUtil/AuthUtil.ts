import axios from "axios";
import { API_URL } from "../../../shared/api/api";
import { NavigateFunction } from "react-router-dom";
import {Dispatch} from "redux";
import {setAuthDataAction} from "../../../entities/isLoggedIn/types/isLoggedInTypes";

export const AuthUtil = async (
    password: string,
    email: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,
    navigate: NavigateFunction,
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

    setEmailError(emailValid ? "" : "Неправильный формат email");
    setPasswordError(
        password.length < 6 ? "Пароль должен иметь 6 символов и цифры" :
            !passwordValid ? "Неправильно введен пароль" : ""
    );

    if (!emailValid || !passwordValid) {
        return;
    }

    try {
        const res = await axios.post(`${API_URL}/auth`, {
            email,
            password
        });

        if (res.data.message === "exist") {
            setEmailError("Эта почта уже зарегистрована");
        } else if (res.data.message === "notexist") {
            navigate("/game", { state: { id: email, password: password } });
            dispatch(setAuthDataAction(true))
        }
    } catch (error) {
        alert("Произошла ошибка при регистрации");
        console.error(error);
    }
}
