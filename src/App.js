import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/index";
import Admin from "./components/Admin/index";
import Teacher from "./components/Teacher/index";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="teacher/*" element={<Teacher />} />
    </Routes>
  );
};

export default App;
