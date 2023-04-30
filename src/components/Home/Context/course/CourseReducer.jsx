import { GET_COURSES } from "../types";

const CourseReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default CourseReducer;
