import {Api} from "./index";
import {apiRoutes} from "../config/api";

export const GetAllServices = async () =>{
    const result = await Api(`${apiRoutes.GET_ALL_SERVICES}`)
    return result
}

export const GetOneService = async (id) =>{
    const result = await Api(`${apiRoutes.GET_ALL_SERVICES}/${id}`)
    return result
}