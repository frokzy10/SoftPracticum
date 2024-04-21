import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import asyncMiddleware from "./middleware";
import {StoreSchema} from "./storeSchema";
import {authStatus} from "../../../../entities/isLoggedIn/reducer/isLoggedIn";
import {UserReducer} from "../../../../entities/User/reducer/UserReducer";
import {LoginFormReducer} from "../../../../entities/LoginForm/reducer/LoginForm";


const rootReducer = combineReducers<StoreSchema>({
    isLoggedIn: authStatus,
    user:UserReducer,
    loginForm:LoginFormReducer
})
const store = createStore(rootReducer, applyMiddleware(asyncMiddleware));
export {store, rootReducer};
export type AppDispatch = typeof store.dispatch;