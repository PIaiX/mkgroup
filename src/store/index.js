import {bindActionCreators, combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import {useDispatch, useSelector} from "react-redux";
import {AppActions, AppReducers} from './slices/app/AppSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    app: AppReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .prepend()
});
const actions={
    ...AppActions
}
export const useAppSelector = useSelector
export const useAppAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}

export const persistor = persistStore(store)