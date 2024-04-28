import React, {FC, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import ButtonsById from "../../../features/ButtonsById/ui/ButtonsById";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {STORECONTEXT} from "../../../index";

interface IGameSchema {
    _id: string,
    title: string,
    description: string,
    img:string,
    isWon:boolean,
    points:number
}

const GamePage: FC = () => {
    const {store} = useContext(STORECONTEXT);
    const [games, setGames] = useState<IGameSchema[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/games');
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);

    if(!store.isAuth){
        return (
            <>
                <LoginPage/>
            </>
        )
    }
    return (
        <>
            <ButtonsById games={games} loading={loading}/>
        </>
    )
};

export default observer(GamePage);
