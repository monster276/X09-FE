import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home/index'
import Admin from './components/Admin/index'
import Teacher from './components/Teacher/index'
import Login from './Pages/Login'
import Detail from './components/Home/Courses/Detail'
import Course from './components/Home/Courses/course'
import Register from './components/Home/Auth/Register'
import FeedbackForm from './Pages/Feedback/FeedbackForm'
import FeedbackManager from './Pages/Feedback/FeedbackManager'
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="teacher/*" element={<Teacher />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/feedbackmanage" element={<FeedbackManager />} />
    </Routes>
  )
}

export default App
