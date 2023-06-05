import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRoutes} from "../config/api";
import {Api} from "../services/index";

export const CreateOrder = createAsyncThunk(
    'user/createOrder',
    async (body = {}, thunkAPI) => {
        try {
            const response = await Api(`${apiRoutes.CREATE_ORDER}`, {body, method:'POST'})
            return thunkAPI.fulfillWithValue({response, body})
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data.message)
        }
    })

export const SetConnect = async (body) =>{
    const result = await Api(apiRoutes.CREATE_CONNECT, {body, method:'POST'})
    return result
}
