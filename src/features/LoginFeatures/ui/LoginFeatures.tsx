import {useNavigate} from "react-router-dom";
import cls from "./LoginFeatures.module.scss";
import {ChangeEvent, useEffect, useState} from "react";
import LoginDetails from "../../../widgets/LoginDetails/LoginDetails";
import {LoginUtil} from "../../../app/util/LoginUtil/LoginUtil";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import AuthServices from "../../../entities/Form/services/AuthServices";



const LoginFeatures = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState<string>("");
    const [passwordError,setPasswordError] = useState<string>("")

    useEffect(() => {
        const handleLogin = async () => {
            try {
                await AuthServices.login(email, password, navigate, dispatch);
            } catch (error) {
                console.error('Ошибка входа:', error);
            }
        };
        handleLogin();
    }, []);

    const handleLoginBtn = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await LoginUtil(email,password,setPasswordError,setEmailError,dispatch,navigate)
    }

    return (
        <div className={cls.Auth}>
            <LoginDetails
                handleLoginBtn={handleLoginBtn}
                setEmail={setEmail}
                setPassword={setPassword}
                navigate={navigate}
                passwordError={passwordError}
                emailError={emailError}
                setPasswordError={setPasswordError}
                password={password}
                email={email}
            />
        </div>
    );
};

export default LoginFeatures;
