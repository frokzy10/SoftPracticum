import React, {ChangeEvent} from 'react';
import cls from "./LoginDetails.module.scss";
import {Link, NavigateFunction} from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";

interface ILoginDetailsProps {
    setPassword:React.Dispatch<React.SetStateAction<string>>
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    navigate:NavigateFunction,
    emailError:string,
    passwordError:string,
    handleLoginBtn:any,
    setPasswordError: (error: string) => void,
    password:string,
    email:string
}

const LoginDetails = (props:ILoginDetailsProps) => {
    const {setPassword,email,password,setPasswordError,setEmail,navigate,handleLoginBtn,emailError,passwordError} = props;
    const emailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        const isPasswordValid = passwordRegex.test(e.target.value);
        setPasswordError(isPasswordValid ? "" : "Пароль должен иметь 6 сим-лов,и цифры");
    }
    const handleGoBack = () => {
        navigate(-1)
    };

    return (
        <div className={cls.AuthContainer}>
            <form method="POST" onSubmit={handleLoginBtn}>
                <h2 className={cls.AuthTitle}>Здравствуйте!</h2>
                <p className={cls.AuthSubtitle}>Войдите на нашу платформу</p>
                <div className={cls.InputContainer}>
                    {passwordError && <div className={cls.AuthError}>{passwordError}</div>}
                    <input
                        value={email}
                        onChange={emailHandler}
                        className={cls.AuthInput}
                        autoComplete="off"
                        name="email"
                        type="text"
                        placeholder="Введите свой email..."
                    />
                    {emailError && <div className={cls.AuthError}>{emailError}</div>}
                    <input
                        value={password}
                        onChange={passwordHandler}
                        className={cls.AuthInput}
                        name="password" type="password"
                        placeholder="Введите пароль..."
                    />
                </div>
                <button className={cls.AuthButton}>Войти</button>
                <br/>
                <hr/>
                <div className={cls.account}>
                    <h2 className={cls.DontHaveAccount}>Нету аккаунта?</h2>
                    <div>
                        <Link to="/auth">Создать</Link>
                    </div>
                </div>
            </form>
            <button className={cls.goBackBtn} onClick={handleGoBack}><HiOutlineArrowLeft/></button>
        </div>
    );
};

export default LoginDetails;