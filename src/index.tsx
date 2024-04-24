import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import "./app/styles/index.scss"
import "./app/styles/reset.scss"
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import Store from "./app/providers/StoreProvider/config/store";

interface State {
    store: Store
}

export const store = new Store();
export const STORECONTEXT = createContext<State>({
    store
})
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <STORECONTEXT.Provider value={{store}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </STORECONTEXT.Provider>
    </React.StrictMode>
);