import React, { useReducer } from "react";
import axios from "axios";
import CourseContext from "./CourseContext";
import CourseReducer from "./CourseReducer";
import { GET_COURSES, GET_COURSE_DETAIL, COURSE_ERROR } from "../types";

const CourseState = (props) => {
  const initialState = {
    courses: [],
    course: {},
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(CourseReducer, initialState);

  const getCourses = async () => {
    try {
      const res = await axios.get("https://x09-be.onrender.com/api/courses");
      dispatch({
        type: GET_COURSES,
        payload: res.data.courses,
      });
    } catch (error) {
      dispatch({
        type: COURSE_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  const getCourseDetail = async (id) => {
    try {
      const res = await axios(`https://x09-be.onrender.com/api/courses/${id}`);
      dispatch({
        type: GET_COURSE_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        course: state.course,
        error: state.error,
        loading: state.loading, 
        getCourses,
        getCourseDetail,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
