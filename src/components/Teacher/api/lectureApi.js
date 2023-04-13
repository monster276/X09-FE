import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllLecture = (params) => {
    return get(`${base_api}Lectures`, params);
}
export const getASingleLecture = (params) => {
    return get(`${base_api}Lectures`, params);
}
export const createASingleLecture = (payload) => {
    return post(`${base_api}Lectures`, payload);
}
export const updateASingleLecture = (payload,params) => {
    return put(`${base_api}Lectures`, payload, params);
}
export const deleteASingleLecture = (params) => {
    return deleteRequest(`${base_api}Lectures`, params);
}
