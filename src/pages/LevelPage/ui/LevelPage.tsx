import React, {FC, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {observer} from "mobx-react-lite";
import cls from "./LevelPage.module.scss";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import Spinner from "../../../shared/spinner/Spinner";
import {STORECONTEXT} from "../../../index";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {FaArrowRight} from "react-icons/fa";

interface IGameSchema {
    _id: string,
    title: string,
    description: string,
    img: string,
    win: boolean,
    condition: string,
    conditionName: string,
    conditionImg: string
    conditionVideo: string,
    responseMeasure: string,
    realAnswer: string;
}

const LevelPage: FC = () => {
    const {id} = useParams();
    const [game, setGame] = useState<IGameSchema | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const {store} = useContext(STORECONTEXT);
    const location = useLocation()

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchGameById = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/games/${id}`);
                setGame(res.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };
        fetchGameById();
    }, [id, location.pathname]);

    if (store.isLoading) {
        return <Spinner/>
    }
    if (!store.isAuth) {
        return <LoginPage/>
    }

    return (
        <>
            <div className={cls.levelMain}>
                <div className={cls.goBack} onClick={handleBack}>
                    <IoMdArrowBack/>
                    <span className={cls.goBackText}>Назад</span>
                </div>
                {loading ? (
                    <><Spinner/></>
                ) : game ? (
                    <div className={cls.levelHeader}>
                        <iframe width="760" height="415"
                                src={game.conditionVideo}
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                        >
                        </iframe>
                        <div className={cls.levelRightSide}>
                            <h2 style={{color: "white"}}>{game.title}</h2>
                            <p style={{color: "white"}}>{game.description}</p>
                        </div>
                    </div>
                ) : (
                    <div>No data</div>
                )}
                <div className={cls.levelContent}>
                    <p className={cls.levelContentText}>Задание: посмотрите видео и выполните задание снизу!!!</p>
                    <div className={cls.gameTest}>
                        <div className={cls.levelContentTest}>
                            <h2>К заданиям</h2>
                            <FaArrowRight/>
                        </div>
                        <Link to={`/game/${id}/startGame`}>
                            <button className={cls.checkGameBtn}>Перейти</button>
                        </Link>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        </>
    );
};

export default observer(LevelPage);
