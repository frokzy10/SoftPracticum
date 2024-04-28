import React from 'react';
import Spinner from "../../../shared/spinner/Spinner";
import {Link} from "react-router-dom";
import cls from "./ButtonsById.module.scss"
import {IoMdClose} from "react-icons/io";


interface IGameSchema {
    _id: string,
    title: string,
    description: string,
    img:string,
    isWon:boolean
}

interface TProps {
    loading: boolean,
    games: any,
}

const ButtonsById = (props: TProps) => {
    const {loading, games} = props

    return (
        <>
            {loading ? (
                <><Spinner/></>
            ) : (
                <>
                    <h2 className={cls.gameTitle}>Проходите уровни и получайте очки!!!</h2>
                    <div className={cls.buttonsContainer}>
                        <aside className={cls.sidebar}>
                            <div className={cls.sidebarContent}>
                                <h2 className={cls.sidebarTitles}>Уровни</h2>
                                {games.map((game: IGameSchema, index: number) => (
                                    <div className={cls.sideBarSuccessLevel}>
                                        <div className={cls.sideBarSuccessLevelTitle}>Пройдите игру {game.title}</div>
                                        <IoMdClose/>
                                    </div>
                                ))}
                                <br/>
                                <hr/>
                            </div>
                        </aside>
                        <ul className={cls.levelButtons}>
                            {games.map((game: IGameSchema) => (
                                <li key={game._id} className={cls[`button${game._id}`]}>
                                    <Link to={`/game/${game._id}`}>
                                        <button className={cls.button19} role="button">{game.title}</button>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </>
            )
            }
        </>
    )
        ;
};

export default ButtonsById;