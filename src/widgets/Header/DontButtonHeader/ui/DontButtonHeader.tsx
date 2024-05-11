import React, {useState} from 'react';
import cls from "../../ui/Header.module.scss";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

const DontButtonHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <Link to="/">
                    <p className={cls.gameLogo}>GameLogo</p>
                </Link>
                <button className={cls.burgerMenu} onClick={toggleMenu}>
                    <FaBars className={cls.FaBars}/>
                </button>
            </div>
        </header>
    );
};

export default DontButtonHeader;