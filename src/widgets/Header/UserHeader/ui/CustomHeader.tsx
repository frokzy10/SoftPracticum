import React from 'react';
import cls from "./CustomHeader.module.scss"
import {Link} from "react-router-dom";

const CustomHeader = () => {
    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <Link to="/">
                    <p className={cls.gameLogo}>GameWeb</p>
                </Link>
                <nav>
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Нурдин</li>
                    </ul>
                </nav>
                <Link to="/game/profile">
                    <button className={cls.headerProfile}>
                        Ваш профиль
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default CustomHeader;