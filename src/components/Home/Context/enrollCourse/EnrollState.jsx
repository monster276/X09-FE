import React, { useReducer } from "react";
import axios from "axios";
import EnrollContext from "./EnrollContext";
import EnrollReducer from "./EnrollReducer";
import { ADD_ENROLL_COURSE } from "../types";

const EnrollState = (props) => {
  const initialState = {
    enrollCourses: [],
    error: null,
  };

  const [state, dispatch] = useReducer(EnrollReducer, initialState);

  const addEnrollCourse = async (enroll) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://x09-be.onrender.com/api/enrollCourse/create",
        enroll,
        config
      );
      dispatch({
        type: ADD_ENROLL_COURSE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ENROLL_COURSE,
        payload: error.response.data.message,
      });
    }
  };

  return (
    <EnrollContext.Provider
      value={{
        addEnrollCourse,
        enrollCourses: state.enrollCourses,
        current: state.current,
      }}
    >
      {props.children}
    </EnrollContext.Provider>
  );
};

export default EnrollState;
