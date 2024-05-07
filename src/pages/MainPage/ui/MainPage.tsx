import React, {useContext} from 'react';
import cls from "./MainPage.module.scss"
import {Link} from "react-router-dom";
import {STORECONTEXT} from "../../../index";

const MainPage = () => {
    const {store} = useContext(STORECONTEXT)
    return (
        <>
            <section className={cls.MainPage}>
                <p className={cls.MainPageText}>
                    Добро пожаловать в мир игр! <br/> Развивайте свои знания в мире IT!
                </p><br/>
                {store.isAuth ? (
                    <Link to="/game">
                        <button className={cls.mainBtn}>
                            Узнать
                        </button>
                    </Link>
                ):(
                    <Link to="/log_in">
                        <button className={cls.mainBtn}>
                            Узнать
                        </button>
                    </Link>
                )}

            </section>
            <section id="about-section" className={cls.AboutUs}>
                <div className={cls.AboutUsContainer}>
                    <div>
                        <h2>О нас</h2>
                        <p>Я Нурдин Frontend Developer.15 .</p>
                        <p>Стек на этот проект Node js,MongoDB,React,TypeScript,Mobx,SCSS,Express</p>
                    </div>
                    <img className={cls.nolikImg} src="https://cdn-icons-png.flaticon.com/512/2503/2503732.png" alt="img"/>
                </div>
            </section>
            <section id="contacts-section" className={cls.contacts}>
                <div className={cls.contancTitle}>Контакты :</div>
                <p>
                    Telegram : @nurdinStack
                </p>
                <p>
                    Number: +99655555555
                </p>
                <p>
                    GitHub: frokzy10
                </p>
            </section>
        </>
    );
};

export default MainPage;