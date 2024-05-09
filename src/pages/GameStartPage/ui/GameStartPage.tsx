import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {STORECONTEXT} from "../../../index";
import cls from "./GameStart.module.scss"
import Spinner from "../../../shared/spinner/Spinner";
import LoginPage from "../../LoginPage/ui/LoginPage";
import LevelCode from "../../../features/ConditionLevels/levelCode/LevelCode";
import ConditionStart from "../../../features/ConditionLevels/ConditionStart/ConditionStart";
import ButtonsNextPrev from "../../../features/ConditionLevels/ButtonsNextPrev/ButtonsNextPrev";

interface IStartGame {
    _id: string,
    title: string,
    description: string,
    img: string,
    win: boolean,
    condition: string,
    conditionName: string,
    conditionImg: string,
    task:string,
    conditionVideo: string,
    responseMeasure: string,
    realAnswer: string,
    conditionLink:string,
    sphereLink:any,
    isLevel1:boolean,
    isLevel2:boolean,
    isLevel3:boolean,
    isLevel4:boolean,
}

const GameStartPage = () => {
    const {id} = useParams();
    const {store} = useContext(STORECONTEXT);
    const [startGame, setStartGame] = useState<IStartGame | null>(null)
    const navigate = useNavigate();
    const [tab, setTab] = useState("start");
    const [loading, setLoading] = useState<boolean>(false);


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

    // Проверки из store
    if (store.isLoading) return <Spinner/>
    if (!store.isAuth) return <LoginPage/>
    // Фукнции для TAB,MODAL,BACK
    const handleBack = () => navigate(-1)
    const handleTabChange = (selectedTab: string) => setTab(selectedTab);

    return (
        <div className={cls.startGameContainer}>
            {loading ? (
                <Spinner/>
            ) : (
                <div className={cls.tabContent}>
                    <div className={cls.tabs}>
                        <ButtonsNextPrev tab={tab} handleTabChange={handleTabChange}/>
                    </div>
                    {tab === "start" && (
                        <ConditionStart startGame={startGame} handleBack={handleBack}/>
                    )}
                    {tab === "nextPage" && (
                        <div className={cls.level2Container}>
                            <LevelCode startGame={startGame}/>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default observer(GameStartPage);