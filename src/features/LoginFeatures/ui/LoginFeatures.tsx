import {useNavigate} from "react-router-dom";
import cls from "./LoginFeatures.module.scss";
import {ChangeEvent, useContext, useState} from "react";
import LoginDetails from "../../../widgets/LoginDetails/LoginDetails";
import {LoginUtil} from "../../../app/util/LoginUtil/LoginUtil";
import {STORECONTEXT} from "../../../index";
import {observer} from "mobx-react-lite";



const LoginFeatures = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState<string>("");
    const [passwordError,setPasswordError] = useState<string>("")
    const {store} = useContext(STORECONTEXT);

    const handleLoginBtn = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        LoginUtil(email,password,setPasswordError,setEmailError);
        const res = store.login(email,password,navigate);
        console.log(res);
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

export default observer(LoginFeatures);
