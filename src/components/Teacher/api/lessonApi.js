import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllLesson = (params) => {
    return get(`${base_api}Lessons`, params);
}
export const getASingleLesson = (params) => {
    return get(`${base_api}Lessons`, params);
}
export const createASingleLesson = (payload) => {
    return post(`${base_api}Lessons`, payload);
}
export const updateASingleLesson = (payload,params) => {
    return put(`${base_api}Lessons`, payload, params);
}
export const deleteASingleLesson = (params) => {
    return deleteRequest(`${base_api}Lessons`, params);
}
