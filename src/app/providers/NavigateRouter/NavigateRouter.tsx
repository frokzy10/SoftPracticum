import React, { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../../pages/LoginPage/ui/LoginPage";

import ProfilePage from "../../../pages/ProfilePage/ui/ProfilePage";
import GamePage from "../../../pages/GamePage/ui/GamePage";



export const ProtectedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean, children: React.ReactNode }) => {
    return isLoggedIn ? <>{children}</> : <Navigate to="/log_in" />;
};

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <Routes>
            <Route path="/log_in" element={<LoginPage/>}/>
            <Route path="/game"
                element={<ProtectedRoute isLoggedIn={isLoggedIn}><GamePage/></ProtectedRoute> }
            />
            <Route
                path="/game/profile"
                element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProfilePage /></ProtectedRoute>}
            />
        </Routes>
    );
};


export default Router;
