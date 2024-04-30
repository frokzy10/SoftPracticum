import React, {FC, useContext, useEffect} from 'react';
import {STORECONTEXT} from "../../../index";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {observer} from "mobx-react-lite";
import cls from "./ProfilePage.module.scss";
import Spinner from "../../../shared/spinner/Spinner";

const ProfilePage: FC = () => {
    const {store} = useContext(STORECONTEXT);

    console.log(store.user.points)


    if (store.isLoading) {
        return <Spinner/>
    }
    if (!store.isAuth) {
        return <LoginPage/>
    }
    return (
        <>
            <div className={cls.profileAll}>
                <div className={cls.profileContainer}>
                    <div className={cls.profileHeader}>
                        <img className={cls.profileLogo} src="https://avatars.githubusercontent.com/u/110032093?v=4" alt="img"/>
                        <div className={cls.headerRightSide}>
                            <h2 className={cls.profileEmail}>{store.isAuth ? `Почта: ${store.user.email}` : 'Почта: Авторизуйтесь'}</h2>
                            <h2 className={cls.profileStatus}>{store.user.isActivated ? 'Статус: Аккаунт подтвержен' : "Статус: Подтвердите аккаунт"}</h2>
                            <div className={cls.profilePoints}>Очки: {!store.user.points ? "0" : store.user.points}  </div>
                        </div>
                    </div>
                    <div className={cls.profileBtnContainer}>
                        <button className={cls.profileLogoutBtn} onClick={() => store.logout()}>Выйти</button>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
            </div>
        </>
    );
};

export default observer(ProfilePage);
