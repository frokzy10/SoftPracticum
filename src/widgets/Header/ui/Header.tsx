import React from 'react';
import cls from "./Header.module.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <Link to="/">
                    <p className={cls.gameLogo}>GameLogo</p>
                </Link>
                <nav>
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Нурдин</li>
                    </ul>
                </nav>
                <Link to="/log_in">
                    <button className={cls.headerButton}>
                        Войти
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;