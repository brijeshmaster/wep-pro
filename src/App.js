import React from 'react'
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      

        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />

        
    
      
    </Routes>
 <Footer />
    </>
  )
}

export default App