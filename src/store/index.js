import {configureStore} from "@reduxjs/toolkit";
import category from './reducers/categories'

export const Store=configureStore({
    reducer: {
        category
    }
})