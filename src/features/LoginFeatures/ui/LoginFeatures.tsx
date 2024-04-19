import {useNavigate} from "react-router-dom";
import cls from "./LoginFeatures.module.scss";
import {ChangeEvent, useState} from "react";

import LoginDetails from "../../../widgets/LoginDetails/LoginDetails";
import {LoginUtil} from "../../../app/util/LoginUtil/LoginUtil";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {isloggedInSelectors} from "../../../entities/isLoggedIn/selectors/isLoggedInSelectors";



const LoginFeatures = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useSelector(isloggedInSelectors.getIsLoggedInUser);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState<string>("");
    const [passwordError,setPasswordError] = useState<string>("")

    const handleLoginBtn = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await LoginUtil(email,password,setPasswordError,setEmailError)
        setPassword("")
        setEmail("")
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
