import {Api} from "./index";
import {apiRoutes} from "../config/api";

export const GetAllPortfolios = async (params) =>{
    const result = await Api(`${apiRoutes.GET_PORTFOLIO}?${ new URLSearchParams(params)}`)
    return result
}

export const GetOnePortfolio = async (id) =>{
    const result = await Api(`${apiRoutes.GET_PORTFOLIO}/${id}`)
    return result
}