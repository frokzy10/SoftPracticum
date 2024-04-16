import React  from 'react';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/router/ui/AppRouter";
import {useLocation} from "react-router-dom";
import DontHeader from "../widgets/Header/DontHeader/DontHeader";
import CustomHeader from "../widgets/Header/UserHeader/ui/CustomHeader";
import Router from "./providers/NavigateRouter/NavigateRouter";


function App() {
    const location = useLocation();

    if (location.pathname === "/auth" || location.pathname === "/log_in") {
        return (
            <DontHeader/>
        )
    }

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
    return (
        <>
            <Router/>
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
