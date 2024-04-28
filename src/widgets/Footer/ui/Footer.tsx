import React from 'react';
import cls from "./Footer.module.scss"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={cls.footerContainer}>
                <Link to="/">
                    <p className={cls.gameLogo}>GameLogo</p>
                </Link>

            </div>
        </footer>
    );
};

export default Footer;