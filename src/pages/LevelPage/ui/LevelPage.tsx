import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {observer} from "mobx-react-lite";
import cls from "./LevelPage.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import Spinner from "../../../shared/spinner/Spinner";

interface IGameSchema {
    _id: string;
    title: string;
    description: string;
    video: string;
    output: string;
}

const LevelPage: FC = () => {
    const {id} = useParams();
    const [game, setGame] = useState<IGameSchema | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

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
    }, [id]);

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
                        <video controls>
                            <source src={game.video} type="video/mp4"/>
                        </video>
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
                        <input placeholder={"Введите ответ"} type="text" className={cls.inputGame}/>
                        <button className={cls.checkGameBtn}>Проверить</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(LevelPage);
