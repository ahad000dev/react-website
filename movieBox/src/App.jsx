import { useState } from 'react'
import './App.css'
import Home  from './pages/home'
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  { path: "/", Component: Root },
]);
function App() {
  return (
    <>
    <Home/>
    </>
  )
}

export default App
