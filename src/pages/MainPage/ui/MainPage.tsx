import React from 'react';
import cls from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <p className={cls.MainPageText}>
                Добро пожаловать в мир игр и мультфильмов! Это увлекательное пространство развлечений, где
                каждый может
                найти что-то интересное.
            </p>
        </div>
    );
};

export default MainPage;