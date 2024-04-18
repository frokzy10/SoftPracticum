import React, {useEffect} from 'react';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/router/ui/AppRouter";
import {useLocation} from "react-router-dom";
import DontHeader from "../widgets/Header/DontHeader/DontHeader";
import Router from "./providers/NavigateRouter/NavigateRouter";
import {useSelector} from "react-redux";


function App() {
    const location = useLocation();
    const user = useSelector((state:any)=>state.user)
    useEffect(() => {
        console.log(location)
        console.log(user)
    }, [location]);

    if (location.pathname === "/auth" || location.pathname === "/log_in") {
        return (
            <DontHeader/>
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
