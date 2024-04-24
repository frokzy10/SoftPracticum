import React, {useContext, useState} from 'react';
import cls from "./Header.module.scss";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {FaBars} from "react-icons/fa";
import {STORECONTEXT} from "../../../index";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {store} = useContext(STORECONTEXT);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <Link to="/">
                    <p className={cls.gameLogo}>GameLogo</p>
                </Link>
                <nav className={!isOpen ? cls.hide : ''}>
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Нурдин</li>
                    </ul>
                    {store.isAuth ? (
                        <Link to="/game">
                            <button className={cls.headerButton}>
                                Войти
                            </button>
                        </Link>
                    ) : (
                        <Link to="/log_in">
                            <button className={cls.headerButton}>
                                Войти
                            </button>
                        </Link>
                    )}
                </nav>
                <button className={cls.burgerMenu} onClick={toggleMenu}>
                    <FaBars className={cls.FaBars}/>
                </button>
            </div>
            <div className={`${cls.modal} ${isOpen ? cls.show : ''}`}>
                <div className={cls.navContainer}>
                    <nav>
                        <ul>
                            <li>О нас</li>
                            <li>Контакты</li>
                            <li>Нурдин</li>
                        </ul>
                        {store.isAuth ? (
                            <Link to="/game">
                                <button className={cls.headerButton}>
                                    Войти
                                </button>
                            </Link>
                        ) : (
                            <Link to="/log_in">
                                <button className={cls.headerButton}>
                                    Войти
                                </button>
                            </Link>
                        )}
                        <div className={cls.burgerClose} onClick={closeMenu}>
                            <div className={cls.closeModal}>
                                <IoMdClose/>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;
