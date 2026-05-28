import { useState } from 'react'
import './App.css'
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from 'locomotive-scroll';
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
   
      <div className="main">
        <Routes>
          <Route path='/' element={<Home/>}>home</Route>
          <Route path="/agence" element={<Agence/>}>AGENCE</Route>
          <Route path="/project"  element={<Projects/>}>PROJECTS</Route>
        </Routes>
      </div>
    </>
  )
}

export default App
