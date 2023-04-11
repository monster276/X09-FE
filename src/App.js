import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

import Home from "./components/Home/index";
import Admin from "./components/Admin/index";
import Teacher from "./components/Teacher/index";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App