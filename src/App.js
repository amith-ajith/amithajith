import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ResumePage from './components/ResumePage'

const App = () => {



  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/amithajith" element={<Home/>}/>
    <Route path="/resume" element={<ResumePage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  
  // return(
  //   <BrowserRouter>
  //   <Navbar/>
  //   <Routes>
  //     <Route path="/amithajith" element={<Home/>}/>
  //     <Route path="/resume" element={<ResumePage/>}/>
  //   <Routes/>
  //   <BrowserRouter/>
  // )

}

export default App


