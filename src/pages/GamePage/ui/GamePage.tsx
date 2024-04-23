import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import Router from "../../../app/providers/NavigateRouter/NavigateRouter";
import {useSelector} from "react-redux";
import AuthServices from "../../../entities/Form/services/AuthServices";
import {logoutSuccess} from "../../../entities/LoginForm/types/LoginFormTypes";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";

const GamePage = () => {
    const {email} = useSelector((state:any)=>state.loginForm.user);
    const {isAuth} = useSelector((state:any)=>state.loginForm);
    console.log(isAuth);
    const dispatch = useAppDispatch()
    if(!isAuth){
        return <Navigate to="/"/>
    }

    const handleLogout = async ()=>{

        try{
            const res = await AuthServices.logout();
            console.log(res)
            localStorage.removeItem("token");
            dispatch(logoutSuccess())
        }catch (e){
            console.log(e)
        }
    }
    return (
        <>
            <h2 style={{color:"white"}}>{isAuth ? `Пользователь авторизован ${email}`:"Авторизуйтесь"}</h2>
            <button onClick={handleLogout}>Выйти</button>
            <Router/>
        </>
    );
};

export default GamePage;