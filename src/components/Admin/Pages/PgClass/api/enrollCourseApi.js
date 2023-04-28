import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllEnrollCourse = (params) => {
    return get(`${base_api}EnrollCourse`, params);
}
export const createASingleEnrollCourse = (payload) => {
    return post(`${base_api}EnrollCourse`, payload);
}
