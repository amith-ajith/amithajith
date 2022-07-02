import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ResumePage from './pages/ResumePage'

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


