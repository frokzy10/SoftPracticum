import {useNavigate} from "react-router-dom";
import {ChangeEvent, useContext, useState} from "react";
import FormDetails from "../../../widgets/FormDetails/ui/FormDetails";
import cls from "./AuthFeatures.module.scss"
import {HiOutlineArrowLeft} from "react-icons/hi";
import {AuthUtil} from "../../../app/util/AuthUtil/AuthUtil";
import {STORECONTEXT} from "../../../index";


const AuthFeatures = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const {store} = useContext(STORECONTEXT);

    const handleGoBack = () => {
        navigate(-1);
    };

    const authSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthUtil(password,email,setEmailError,setPasswordError);
        const res = store.register(email,password,navigate);
        console.log(res)
    };

    return (
        <div className={cls.Auth}>
            <div className={cls.AuthContainer}>
                <form method="POST" onSubmit={authSubmit}>
                    <FormDetails
                        email={email}
                        emailError={emailError}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setPasswordError={setPasswordError}
                        password={password}
                        passwordError={passwordError}
                    />
                </form>

                <button type="submit" className={cls.goBackBtn} onClick={handleGoBack}><HiOutlineArrowLeft/></button>
            </div>
        </div>
    );
};

export default AuthFeatures;
