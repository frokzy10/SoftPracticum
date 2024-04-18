import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {FormReducer} from "../../../../entities/Form/model/reducer/FormReducer";
import asyncMiddleware from "./middleware";
import {StoreSchema} from "./storeSchema";
import {authStatus} from "../../../../entities/isLoggedIn/reducer/isLoggedIn";


const rootReducer = combineReducers<StoreSchema>({
    form: FormReducer,
    isLoggedIn: authStatus
})
const store = createStore(rootReducer, applyMiddleware(asyncMiddleware));
export {store, rootReducer};
export type AppDispatch = typeof store.dispatch;