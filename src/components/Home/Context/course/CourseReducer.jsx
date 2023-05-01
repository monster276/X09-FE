import { GET_COURSES, COURSE_ERROR, GET_COURSE_DETAIL } from "../types";

const CourseReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSES:
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
    default:
      return state;
  }
};

export default CourseReducer;
