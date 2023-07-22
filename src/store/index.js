import {bindActionCreators, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {AppActions, AppReducers} from './slices/app/AppSlice';
export const store=configureStore({
    reducer:{
        app: AppReducers
    },
});
const actions={
    ...AppActions
}
export const useAppSelector = useSelector
export const useAppAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}
