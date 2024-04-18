import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../../../pages/LoginPage/ui/LoginPage';
import ProfilePage from '../../../pages/ProfilePage/ui/ProfilePage';
import { useSelector } from 'react-redux';
import { setAuthDataAction } from '../../../entities/isLoggedIn/types/isLoggedInTypes';
import Spinner from '../../../shared/spinner/Spinner';
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {isloggedInSelectors} from "../../../entities/isLoggedIn/selectors/isLoggedInSelectors";

interface ProtectedRouteProps {
    isLoggedIn: boolean;
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
    return isLoggedIn ? <>{children}</> : <Navigate to="/log_in" />;
};

const Router: React.FC = () => {
    const isloggedIn = useSelector(isloggedInSelectors.getIsLoggedInAuthSelector)
    const [isLoading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        const savedInLoggedIn = localStorage.getItem('isLoggedIn');
        if (savedInLoggedIn) {
            dispatch(setAuthDataAction(savedInLoggedIn === 'true'));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isloggedIn.toString());
    }, [isloggedIn]);

    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },1500)
    }, [location]);

    return (
        <>
            {
                isLoading ?
                    <Spinner/>
                    :
                    <Routes>
                        <Route path="/log_in" element={<LoginPage/>}/>
                        <Route
                            path="/game/profile"
                            element={<ProtectedRoute isLoggedIn={isloggedIn}><ProfilePage/></ProtectedRoute>}
                        />
                    </Routes>
            }
        </>
    );
};

export default Router;
