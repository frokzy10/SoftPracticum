import React from 'react';
import cls from "./MicroSpinner.module.scss";

const MicroSpinner = () => {
    return (
        <span className={cls.loader}></span>
    );
};

export default MicroSpinner;