import {Api} from "./index";
import {apiRoutes} from "../config/api";

export const getAllNews = async () =>{
    const result = await Api(`${apiRoutes.GET_NEWS}`)
    return result
}

export const getOneNew = async (id) =>{
    const result = await Api(`${apiRoutes.GET_NEWS+id}`)
    return result
}