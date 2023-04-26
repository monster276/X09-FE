import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllLocation = (params) => {
    return get(`${base_api}locations`, params);
}
export const getASingleLocation = (params) => {
    return get(`${base_api}locations`, params);
}
export const createASingleLocation = (payload) => {
    return post(`${base_api}locations`, payload);
}
export const updateASingleLocation = (payload,params) => {
    return put(`${base_api}locations`, payload, params);
}
export const deleteASingleLocation = (params) => {
    return deleteRequest(`${base_api}locations`, params);
}
