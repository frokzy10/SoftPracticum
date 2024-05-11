import React, {useContext, useState} from 'react';
import cls from "./SuccessModal.module.scss"
import {jwtDecode} from "jwt-decode";
import {STORECONTEXT} from "../../../index";
import {Link, useNavigate} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

const SuccessPage = () => {
    const [added, setAdded] = useState<boolean>(false);
    const {store} = useContext(STORECONTEXT);
    const navigate = useNavigate();

    const handlePointsBtn = async () => {
        try {
            const token = localStorage.getItem('token');
            let userId = null;
            if (token) {
                userId = jwtDecode(token);
            } else {
                console.error('Token not found');
            }
            if (userId) {
                await store.UpdatePointInFrontend(userId, token);
                setAdded(true)
            } else {
                console.error('UserId is null or undefined');
            }
        } catch (error: any) {
            console.error('Error updating points:', error.response.data);
        }
    };
    const handleBack = () => navigate(-1);

    return (
        <div className={cls.modalCon}>
            <div className={cls.modal}>
                <div className={cls.goBack} onClick={handleBack}>
                    <IoMdArrowBack/>
                    <span className={cls.goBackText}>Назад</span>
                </div>
                <div className={cls.modalContent}>
                    <div className={cls.modalCon}>
                        <h2>Поздравляю вы выполнили задание !!!</h2>
                        <button onClick={handlePointsBtn}>Получить очки!!!</button>
                        {added && <>
                            <div>Ваше звание: <span>{store.user.status}</span></div>
                            <div>Очки получены.</div>
                            <div>Посмотрите на ваши очки в профиле!!! +10 очков</div>
                                <Link
                                    to="/game/profile"> Профиль
                                </Link>
                        </>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SuccessPage;