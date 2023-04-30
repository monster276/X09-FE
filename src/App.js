import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/index";
import Admin from "./components/Admin/index";
import Teacher from "./components/Teacher/index";
import Login from "./Pages/Login";
import Detail from "./components/Home/Courses/Detail";
import Course from "./components/Home/Courses/course";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/login" element={<Login />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="teacher/*" element={<Teacher />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default App;
