import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/styles/index.scss"
import "./app/styles/reset.scss"
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import StoreProvider from "./app/providers/StoreProvider/ui/StoreProvider";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>

            <StoreProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </StoreProvider>

    </React.StrictMode>
);