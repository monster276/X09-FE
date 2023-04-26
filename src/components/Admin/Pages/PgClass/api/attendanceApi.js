import {get,post,put,deleteRequest} from "./restApi"
import {base_api} from "./config"

export const getAllAttendance = (params) => {
    return get(`${base_api}Attendances`, params);
}
