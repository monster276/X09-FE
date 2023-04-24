import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/index";
import Admin from "./components/Admin/index";
import Teacher from "./components/Admin/index";
import Course from './components/Home/Courses/course';
import Register from './components/Home/Auth/Register';
import Detail from './components/Home/Courses/Detail';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App