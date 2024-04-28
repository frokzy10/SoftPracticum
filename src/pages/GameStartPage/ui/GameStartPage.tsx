import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {STORECONTEXT} from "../../../index";
import LoginPage from "../../LoginPage/ui/LoginPage";
import cls from "./GameStart.module.scss"
import {IoMdArrowBack} from "react-icons/io";
import Level2 from "../../../features/PaginationLevels/level2/ui/Level2";

interface IStartGame {
    _id: string,
    title: string,
    description: string,
    img: string,
    win: boolean,
    condition: string,
    conditionName: string,
    conditionImg: string
}

const GameStartPage = () => {
    const {id} = useParams();
    const {store} = useContext(STORECONTEXT);
    const navigate = useNavigate();
    const [startGame, setStartGame] = useState<IStartGame | null>(null)
    const [tab, setTab] = useState("start"); // состояние текущей вкладки

    const [modal,setModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchGameById = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/games/${id}`);
                setStartGame(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchGameById();
    }, [id]);

    const handleBack = () => {
        navigate(-1)
    }

    const handleTabChange = (selectedTab: string) => {
        setTab(selectedTab);
    };

    if (!store.isAuth) {
        return (
            <>
                <LoginPage/>
            </>
        )
    }

    const handleOpenModal = () => {
        setModal(true);
    }
    const handleCloseModal = () => {
        setModal(false)
    }
    return (
        <div className={cls.startGameContainer}>
            <div className={cls.tabContent}>
                <div className={cls.tabs}>
                    <button onClick={() => handleTabChange("start")}
                            className={tab === "start" ? cls.btnNone : ""}>Назад
                    </button>
                    <button onClick={() => handleTabChange("nextPage")}
                            className={tab === "nextPage" ? cls.btnNone : ""}>
                        {tab === "nextPage" ? "Проверить" : "К игре"}
                    </button>
                    <button className={tab === "start" ? cls.btnNone : ""} onClick={handleOpenModal}>Проверить</button>
                </div>
                {tab === "start" && (
                    <div className={cls.startGameContent}>
                        <div className={cls.goBack} onClick={handleBack}>
                            <IoMdArrowBack/>
                            <span className={cls.goBackText}>Назад</span>
                        </div>
                        {startGame && (
                            <div className={cls.startGameTitles}>
                                <h2>{startGame.condition}</h2>
                                <p>{startGame.conditionName}</p>
                            </div>
                        )}
                    </div>
                )}
                {tab === "nextPage" && (
                    <Level2 handleCloseModal={handleCloseModal} modal={modal}/>
                )}
            </div>
        </div>
    );
};

export default observer(GameStartPage);