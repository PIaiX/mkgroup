import {Api} from './index';
import {apiRoutes} from '../config/api';

export const getAd = async (id)=>{
    const result = await Api(`${apiRoutes.GET_AD}`)
    return result
}