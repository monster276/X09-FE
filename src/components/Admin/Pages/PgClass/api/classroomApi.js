import { get, post, put, deleteRequest } from "./restApi";
import { base_api } from "./config";

export const getAllClassroom = (params) => {
  return get(`${base_api}classrooms`, params);
};
export const getASingleClassroom = (params) => {
  return get(`${base_api}classrooms`, params);
};
export const createASingleClassroom = (payload) => {
  return post(`${base_api}classrooms`, payload);
};
export const updateASingleClassroom = (payload, params) => {
  return put(`${base_api}classrooms`, payload, params);
};
export const deleteASingleClassroom = (params) => {
  return deleteRequest(`${base_api}classrooms`, params);
};
