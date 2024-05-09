import React, {FC, useContext, useEffect} from 'react';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/router/ui/AppRouter";
import {useLocation} from "react-router-dom";
import DontHeader from "../widgets/Header/DontHeader/DontHeader";
import CustomHeader from "../widgets/Header/UserHeader/ui/CustomHeader";
import {STORECONTEXT} from "../index";
import DontButtonHeader from "../widgets/Header/DontButtonHeader/ui/DontButtonHeader";
import Footer from "../widgets/Footer/ui/Footer";


const App: FC = () => {
    const {store} = useContext(STORECONTEXT);
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.checkAuth();
        }
    }, [store]);

    if(location.pathname === "/game/success") {
        return <div className="AppContainer">
            <DontButtonHeader/>
            <div className="content">
                <AppRouter/>
            </div>
        </div>
    }
    if (location.pathname === "/game") {
        return (
            <>
                <main className="App">
                    <div className="AppContainer">
                        <CustomHeader/>
                        <div className="content">
                            <AppRouter/>
                        </div>
                    </div>
                </main>
                <div className="footerCon">
                    <Footer/>
                </div>
            </>
        )
    }

    if (location.pathname === "/auth" || location.pathname === "/log_in") {
        return (
            <DontHeader/>
        )
    }
    if (location.pathname === "/game/profile") {
        return (
            <>
                <div className="AppContainer">
                    <DontButtonHeader/>
                    <div className="content">
                        <AppRouter/>
                    </div>
                </div>
                <div className="footerCon">
                    <Footer/>
                </div>
            </>
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
            <div className="footerCon">
                <Footer/>
            </div>
        </>
    );
}

export default App;
