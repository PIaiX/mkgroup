import {Api} from "./index";
import {apiRoutes} from "../config/api";

export const GetAllNews = async (params) =>{
    const result = await Api(`${apiRoutes.GET_NEWS}?${ new URLSearchParams(params)}`)
    return result?.body
}

export const GetOneNew = async (id) =>{
    const result = await Api(`${apiRoutes.GET_NEWS}/${id}`)
    return result
}