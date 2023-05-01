import { ADD_ENROLL_COURSE, ENROLL_COURSE_ERROR } from "../types";

const EnrollReducer = (state, action) => {
  switch (action.type) {
    case ADD_ENROLL_COURSE:
      return {
        ...state,
        enrollCourses: [action.payload, ...state.enrollCourses],
        loading: false,
      };
    case ENROLL_COURSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default EnrollReducer;
