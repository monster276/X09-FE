import React, { useReducer } from "react";
import axios from "axios";
import CourseContext from "./CourseContext";
import CourseReducer from "./CourseReducer";
import { GET_COURSES } from "../types";

const CourseState = (props) => {
  const initialState = {
    courses: [],
  };

  const [state, dispatch] = useReducer(CourseReducer, initialState);

  const getCourses = async () => {
    const res = await axios.get("https://x09-be.onrender.com/api/courses");
    console.log(res.data.courses);
    dispatch({
      type: GET_COURSES,
      payload: res.data.courses,
    });
  };

  return (
    <CourseContext.Provider value={{ courses: state.courses, getCourses }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
