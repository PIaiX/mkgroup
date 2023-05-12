import {Api} from "./index";
import {apiRoutes} from '../config/api'

export const getOneAd = async (id)=>{
    const result = await Api(`${apiRoutes.GET_AD+id}`)
    return result
}

export const getManyAds = async (body)=>{
    const result = await Api(`${apiRoutes.GET_ADS}`, body)
    return result
}

export const getCategories = async () =>{
    const result = await Api(`${apiRoutes.GET_CATEGORIES}`)
    return result
}
