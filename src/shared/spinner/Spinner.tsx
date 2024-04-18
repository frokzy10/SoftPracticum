import React from 'react';
import cls from "./Spinner.module.scss"

const Spinner = () => {
    return (
        <div className={cls.spinnerBackground}>
            <span className={cls.loader}></span>
        </div>
    );
};

export default Spinner;