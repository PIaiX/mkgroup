import {BASE_API_URL} from '../config/api'
export async function Api(url='', {body, method}={body:null, method:'GET'}) {
    const mainHeaders = {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Fingerprint': localStorage.getItem('fingerprint')
    }
    try {
        const init=method=='GET'?{headers: {...mainHeaders}, method}:{headers: {...mainHeaders}, method, body:JSON.stringify(body)}
        const result = await fetch(BASE_API_URL+url,
            {...init})
        if(result.status!=400 && result.status!=500)
            return result.json()
        return null
    }catch (e){
        console.log(e)
        return null
    }
}
