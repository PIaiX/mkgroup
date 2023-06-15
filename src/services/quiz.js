import {Api} from "./index";
import {apiRoutes} from "../config/api";

export const GetAnswers = async () =>{
    const result = await Api(`${apiRoutes.GET_QUIZ}`)
    return result
}

export const PostAnswers = async (body) =>{
    const result = await Api(`${apiRoutes.POST_QUIZ}`, {method:'POST', body})
    return result
}

export const GetQuiz = async () =>{
    const result = await Api(`${apiRoutes.GET_QUIZ_INFO}`)
    return result
}