import { useState } from 'react'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/home'
import Teachers from './pages/Teachers/teachers'
import Profile from './pages/Profile/profile'
import Signup from './pages/Signup/signup'
import Login from './pages/Login/login'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
