import React, {FC, useContext, useEffect} from 'react';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/router/ui/AppRouter";
import {useLocation} from "react-router-dom";
import DontHeader from "../widgets/Header/DontHeader/DontHeader";
import CustomHeader from "../widgets/Header/UserHeader/ui/CustomHeader";
import {STORECONTEXT} from "../index";
import DontButtonHeader from "../widgets/Header/DontButtonHeader/ui/DontButtonHeader";


const App: FC = () => {
    const location = useLocation();
    const {store} = useContext(STORECONTEXT);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.checkAuth()
        }
    }, [store]);

    if (location.pathname === "/game") {
        return (
            <main className="App">
                <div className="AppContainer">
                    <CustomHeader/>
                    <div className="content">
                        <AppRouter/>
                    </div>
                </div>
            </main>
        )
    }

    if (location.pathname === "/auth" || location.pathname === "/log_in") {
        return (
            <DontHeader/>
        )
    }
    if (location.pathname === "/game/profile") {
        return (
            <div className="AppContainer">
                <DontButtonHeader/>
                <div className="content">
                    <AppRouter/>
                </div>
            </div>
        )
    }

    return (
        <>
            <main className="App">
                <div className="AppContainer">
                    <Header/>
                    <div className="content">
                        <AppRouter/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
