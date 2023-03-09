import {BASE_URL} from '../config/api'

export const Api = async (url, config={})=>{
    const result = await fetch(`${BASE_URL}${url}`, {...config})
    if(result.status == 200)
        return result.json()
    else{
        console.log('Error: ',result.json())
        return undefined
    }
}
