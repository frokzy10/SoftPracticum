import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {STORECONTEXT} from "../../../index";
import cls from "./GameStart.module.scss"
import {IoMdArrowBack, IoMdClose} from "react-icons/io";
import Spinner from "../../../shared/spinner/Spinner";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {jwtDecode} from "jwt-decode";
import CustomLink from "../../../entities/CustomLink/CustomLink";

interface IStartGame {
    _id: string,
    title: string,
    description: string,
    img: string,
    win: boolean,
    condition: string,
    conditionName: string,
    conditionImg: string
    conditionVideo: string,
    task: string,
    responseMeasure: string,
    realAnswer: string,
    conditionLink: string
}

const GameStartPage = () => {
    const {id} = useParams();
    const {store} = useContext(STORECONTEXT);
    const navigate = useNavigate();
    const [startGame, setStartGame] = useState<IStartGame | null>(null)
    const [tab, setTab] = useState("start"); // состояние текущей вкладки
    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const [added, setAdded] = useState<boolean>(false)
    const [inCorrectAns, setInCorrectAns] = useState<boolean>(true)
    // useEffect который берет данные из базы и выводит их
    useEffect(() => {
        const fetchGameById = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`http://localhost:8000/api/games/${id}`);
                setStartGame(res.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false)
            }
        };
        fetchGameById();
    }, [id]);

    // Функция которая нацисляет баллы
    const handlePointsBtn = async () => {
        try {
            const token = localStorage.getItem('token');
            let userId = null;
            if (token) {
                userId = jwtDecode(token);
            } else {
                console.error('Token is null or undefined');
            }
            if (userId) {
                const response = await store.UpdatePointInFrontend(userId, token);
                setAdded(true)
                console.log(response)
            } else {
                console.error('UserId is null or undefined');
            }
        } catch (error: any) {
            console.error('Error updating points:', error.response.data);
        }
    };

    // Проверки из store
    if (store.isLoading) {
        return <Spinner/>
    }
    if (!store.isAuth) {
        return <LoginPage/>
    }

    // Фукнции для TAB,MODAL,BACK
    const handleBack = () => {
        navigate(-1)
    }
    const handleTabChange = (selectedTab: string) => {
        setTab(selectedTab);
    };
    const handleCloseModal = () => {
        setModal(false)
    }

    const handleCheckNavigate = () => {
        setModal(true)
    }

    const handleOpenModal = () => {
        setModal(true)
    }

    return (
        <div className={cls.startGameContainer}>
            {loading ? (
                <Spinner/>
            ) : (
                <div className={cls.tabContent}>
                    <div className={cls.tabs}>
                        <button onClick={() => handleTabChange("start")}
                                className={tab === "start" ? cls.btnNone : ""}>Назад
                        </button>
                        <button onClick={() => handleTabChange("nextPage")}
                                className={tab === "nextPage" ? cls.btnNone : ""}>
                            {tab === "nextPage" ? "Проверить" : "К игре"}
                        </button>
                        <button className={tab === "start" || "nextPage" ? cls.btnNone : ""}>Проверить
                        </button>
                    </div>
                    {tab === "start" && (
                        <div className={cls.startGameContent}>
                            <div className={cls.goBack} onClick={handleBack}>
                                <IoMdArrowBack/>
                                <span className={cls.goBackText}>Назад</span>
                            </div>
                            {startGame && (
                                <div className={cls.startGameTitles}>
                                    <h2>{startGame?.condition}</h2>
                                    <p>{startGame?.conditionName}</p>
                                </div>
                            )}
                        </div>
                    )}
                    {tab === "nextPage" && (
                        <div className={cls.level2Container}>
                            {startGame && (
                                <>
                                    <div className={cls.heroImg}>
                                        <img src={startGame.conditionImg} alt="img"/>
                                    </div>
                                    <div className={cls.level2Content}>
                                        <h2 className={cls.level2Title}>{startGame.task}</h2>
                                        <div className={cls.levelInputContainer}>
                                            <div className={cls.levelInputSubtitle}>{startGame.responseMeasure}</div>
                                            <div>
                                                <CustomLink onLinkClick={handleCheckNavigate} href={startGame.conditionLink}>
                                                    {startGame.conditionLink}
                                                </CustomLink>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {modal && (
                                <>
                                    <div className={cls.modal}>
                                        <div className={cls.modalContent}>
                                            <div className={cls.modalCon}>
                                                <h2>Поздравляю вы выполнили задание </h2>
                                                <button onClick={handlePointsBtn}>Получить очки!!!</button>
                                                {added && <>
                                                    <div>Ваше звание: {store.user.status}</div>
                                                    <div>Очки получены.Посмотрите на ваши очки в профиле!!!</div>
                                                    <Link to="/game/profile">
                                                        <button className={cls.profileBtn}>В профиль</button>
                                                    </Link>
                                                </>}
                                            </div>
                                            <div onClick={handleCloseModal} className={cls.modalClose}>
                                                <IoMdClose/>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

            )}
        </div>
    );
};

export default observer(GameStartPage);