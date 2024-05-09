import React from 'react';
import cls from "./ConditionStart.module.scss";
import {IoMdArrowBack} from "react-icons/io";

interface ConditionStartProps{
    handleBack?:()=>void,
    startGame:any
}

const ConditionStart = (props:ConditionStartProps) => {
    const {startGame,handleBack} = props
    return (
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
    );
};

export default ConditionStart;