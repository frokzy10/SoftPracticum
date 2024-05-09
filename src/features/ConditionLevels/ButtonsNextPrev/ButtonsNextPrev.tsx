import React from 'react';
import cls from "../../../pages/GameStartPage/ui/GameStart.module.scss";

interface ButtonsNextPrevProps {
    tab: string,
    handleTabChange: any
}
const ButtonsNextPrev = (props: ButtonsNextPrevProps) => {
    const {tab, handleTabChange} = props
    return (
        <>
            <button onClick={() => handleTabChange("start")}
                    className={tab === "start" ? cls.btnNone : ""}>Назад
            </button>
            <button onClick={() => handleTabChange("nextPage")}
                    className={tab === "nextPage" ? cls.btnNone : ""}>
                {tab === "nextPage" ? "Проверить" : "К игре"}
            </button>
            <button className={tab === "start" || "nextPage" ? cls.btnNone : ""}>Проверить
            </button>
        </>
    );
};

export default ButtonsNextPrev;