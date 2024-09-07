import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Course from './pages/Course.jsx'
import Detail from './pages/Detail.jsx'
import NotFound from './pages/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Course' element={<Course/>} />
            <Route path='/Product/:id' element={<Detail/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>} />
         </Routes>
      </Router>
    </>
  )
}

export default App
