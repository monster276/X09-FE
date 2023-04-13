import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesTeacher  from "./components/Teacher/Router/RouterConfig";
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
          <Route path="/teacher" element={<Teacher />} >
          {routesTeacher.length > 0 &&
              routesTeacher.map((item) => {
                return (
                  <Route
                    path={item.path}
                    element={<item.component />}
                    key={item.path}
                  />
                );
              })}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App