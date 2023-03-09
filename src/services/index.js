import { BASE_URL } from '../config/api.js'
export const Api = async (url, config={})=>{
    const result = await fetch(`${BASE_URL}${url}`, {...config})
    return result
}