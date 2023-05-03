import {
  GET_COURSES,
  GET_NEW_COURSES,
  COURSE_ERROR,
  GET_COURSE_DETAIL,
  SET_LOADING,
} from "../types";

const CourseReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case GET_NEW_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case GET_COURSE_DETAIL:
      return {
        ...state,
        course: action.payload,
        loading: false,
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default CourseReducer;
