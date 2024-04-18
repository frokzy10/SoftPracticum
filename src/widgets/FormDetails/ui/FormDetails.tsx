// FormDetails.tsx
import {ChangeEvent} from "react";
import cls from "./FormDetails.module.scss";
import {Link} from "react-router-dom";


interface FormDetailsProps {
    email: string;
    emailError: string;
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
    setPasswordError: (error: string) => void;
    passwordError: string;
    password: string;
}

const FormDetails = (props: FormDetailsProps) => {
    const {
        email,
        emailError,
        setPassword,
        setEmail,
        setPasswordError,
        passwordError,
        password,
    } = props;

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        const isPasswordValid = passwordRegex.test(e.target.value);
        setPasswordError(isPasswordValid ? "" : "Пароль должен иметь 6 сим-лов,и цифры");
    };

    return (
        <>
            <h2 className={cls.AuthTitle}>Здравствуйте!</h2>
            <p className={cls.AuthSubtitle}>Зарегистрируйтесь на нашу платформу</p>
            <div className={cls.InputContainer}>
                {emailError && <div className={cls.AuthError}>{emailError}</div>}
                <input
                    className={cls.AuthInput}
                    onChange={emailHandler}
                    value={email}
                    autoComplete="off"
                    type="text"
                    placeholder="Введите свой email..."
                />
                {passwordError && <div className={cls.AuthError}>{passwordError}</div>}
                <input
                    onChange={passwordHandler}
                    value={password}
                    className={cls.AuthInput}
                    type="password"
                    placeholder="Придумайте пароль..."
                />
            </div>
            <button className={cls.AuthButton} type="submit">Зарегистрироваться</button>
            <br/>
            <hr/>
            <div className={cls.account}>
                <h2 className={cls.DontHaveAccount}>Есть аккаунт?</h2>
                <div>
                    <Link to="/log_in">Войти</Link>
                </div>
            </div>
        </>
    );
};

export default FormDetails;
