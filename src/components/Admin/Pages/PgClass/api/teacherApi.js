import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllTeacher = (params) => {
    return get(`${base_api}Teachers`, params);
}
export const getASingleTeacher = (params) => {
    return get(`${base_api}Teachers`, params);
}
export const createASingleTeacher = (payload) => {
    return post(`${base_api}Teachers`, payload);
}
export const updateASingleTeacher = (payload,params) => {
    return put(`${base_api}Teachers`, payload, params);
}
export const deleteASingleTeacher = (params) => {
    return deleteRequest(`${base_api}Teachers`, params);
}
