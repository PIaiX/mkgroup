import {Api} from "./index";
import {apiRoutes} from '../config/api'

export const getOneAd = async (id)=>{
    const result = await Api(`${apiRoutes.GET_ALL_PRODUCT}/${id}`)
    return result
}

export const getManyAds = async (params)=>{
    const result = await Api(`${apiRoutes.GET_ALL_PRODUCT}?page=1&limit=20&${new URLSearchParams(params)}`)
    return result
}

export const getManyAdsBySearch = async (query)=>{
    const result = await Api(`${apiRoutes.GET_PRODUCT_BY_SEARCH}?query=${query}`)
    return result
}