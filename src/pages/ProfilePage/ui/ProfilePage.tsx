import React, {FC, useContext, useState} from 'react';
import {STORECONTEXT} from "../../../index";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {observer} from "mobx-react-lite";
import cls from "./ProfilePage.module.scss";
import Spinner from "../../../shared/spinner/Spinner";
import UserService from "../../../entities/Form/services/UserService";
import {IUser} from "../../../entities/Form";
import {IoMdArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {MdEmail} from "react-icons/md";
import {HiStatusOnline} from "react-icons/hi";
import {FaCoins} from "react-icons/fa6";
import {TbMilitaryRank} from "react-icons/tb";

const ProfilePage: FC = () => {
    const {store} = useContext(STORECONTEXT);
    const [getUser, setGetUser] = useState<IUser[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    if (store.isLoading) {
        return <Spinner/>
    }
    if (!store.isAuth) {
        return <LoginPage/>
    }

    const userGet = async () => {
        setLoading(true)
        try {
            const res = await UserService.fetchUsers();
            setGetUser(prevUser => prevUser.length > 0 ? [] : res.data);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <div className={cls.profileAll}>
                    <div className={cls.goBack} onClick={handleBack}>
                        <IoMdArrowBack/>
                        <span className={cls.goBackText}>Назад</span>
                    </div>
                    <div className={cls.profileContainer}>
                        <div className={cls.profileHeader}>
                            <img className={cls.profileLogo} src="https://avatars.githubusercontent.com/u/110032093?v=4"
                                 alt="img"/>
                            <div className={cls.headerRightSide}>
                                <div className={cls.emailCon}>
                                    <MdEmail/>
                                    <h2 className={cls.profileEmail}>{store.isAuth ? `Почта: ${store.user.email}` : 'Почта: Авторизуйтесь'}</h2>
                                </div>
                                <div className={cls.profileStatusCon}>
                                    <HiStatusOnline/>
                                    <h2 className={cls.profileStatus}>{store.user.isActivated ? 'Статус: Аккаунт подтвержен' : "Статус: Подтвердите аккаунт"}</h2>
                                </div>
                                <div className={cls.profileRankCon}>
                                    <TbMilitaryRank/>
                                    <div className={cls.profileRank}>Звание: {!store.user.status ? "Никто" : store.user.status}</div>
                                </div>
                                <div className={cls.profileCoinCon}>
                                    <FaCoins/>
                                    <div className={cls.profilePoints}>Кодкоинов: {!store.user.points ? "0" : store.user.points}  </div>
                                </div>
                            </div>
                        </div>
                        <div className={cls.profileBtnContainer}>
                            <button className={cls.profileLogoutBtn} onClick={() => store.logout()}>Выйти</button>
                        </div>
                    </div>
                    <button className={cls.getUsersBtn}
                            onClick={userGet}>{getUser.length > 0 ? 'Delete Users' : 'Get Users'}</button>
                    <div className={cls.getUser}>
                        {getUser.map(g => (
                            <div key={g.email}>{g.email}</div>
                        ))}
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                </div>
            )}
        </>
    );
};

export default observer(ProfilePage);
