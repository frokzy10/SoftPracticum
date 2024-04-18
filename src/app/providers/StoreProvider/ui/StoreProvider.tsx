import React, {ReactNode} from 'react';
import {createStore} from "redux";
import {rootReducer} from "../config/store";
import {Provider} from "react-redux";

type Props = {
    children:ReactNode
}
const StoreProvider:React.FC<Props> = ({children}) => {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;