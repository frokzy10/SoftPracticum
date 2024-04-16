import React from 'react';
import {useLocation} from "react-router-dom";
import Router from "../../../app/providers/NavigateRouter/NavigateRouter";

const GamePage = () => {

    const location = useLocation()


    return (
        <>
            <Router/>
        </>
    );
};

export default GamePage;