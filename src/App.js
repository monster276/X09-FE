import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/index";
import Admin from "./components/Admin/index";
import Teacher from "./components/Teacher/index";
import Login from "./Pages/Login";
import Detail from "./components/Home/Courses/Detail";
import Courses from "./components/Home/Courses/Courses";
import CourseState from "./components/Home/Context/course/CourseState";
import EnrollState from "./components/Home/Context/enrollCourse/EnrollState";
import LocationState from "./components/Home/Context/location/LocationState";

const App = () => {
  return (
    <LocationState>
      <EnrollState>
        <CourseState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="admin/*" element={<Admin />} />
            <Route path="teacher/*" element={<Teacher />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </CourseState>
      </EnrollState>
    </LocationState>
  );
};

export default App;
