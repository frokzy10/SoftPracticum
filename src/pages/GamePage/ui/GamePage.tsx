import React, {FC, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import ButtonsById from "../../../features/ButtonsById/ui/ButtonsById";
import LoginPage from "../../LoginPage/ui/LoginPage";
import {store, STORECONTEXT} from "../../../index";
import {Link, useParams} from "react-router-dom";


interface IGameSchema {
    _id: string,
    title: string,
    description: string,
    video: string,
    output: string
}

const GamePage: FC = () => {
    const {store} = useContext(STORECONTEXT);
    const {id} = useParams()
    const [games, setGames] = useState<IGameSchema[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/games');
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };
        fetchGames();
    }, []);
    if (!store.isAuth) {
        return <LoginPage/>
    }

    return (
        <ul>
            {games.map((game, index) => (
                <li key={index}>
                    <Link to={`/game/${game._id}`}>
                        <button>{game.title}</button>
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default observer(GamePage);