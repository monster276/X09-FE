import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllCourse = (params) => {
    return get(`${base_api}Courses`, params);
}
export const getASingleCourse = (params) => {
    return get(`${base_api}Courses`, params);
}
export const createASingleCourse = (payload) => {
    return post(`${base_api}Courses`, payload);
}
export const updateASingleCourse = (payload,params) => {
    return put(`${base_api}Courses`, payload, params);
}
export const deleteASingleCourse = (params) => {
    return deleteRequest(`${base_api}Courses`, params);
}
