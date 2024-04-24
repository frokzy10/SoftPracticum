import React, {useState} from 'react';
import cls from "../../ui/Header.module.scss";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

const DontButtonHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

export default DontButtonHeader;