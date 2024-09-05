import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Service from './Pages/Services/Service';


function App() {
  return (
    <>
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path="/" element={<Home />}/>
      <Route exact={true} path="/about" element={<About />}/>
      <Route exact={true} path="/gallery" element={<Gallery />}/>
      <Route exact={true} path="/services" element={<Service />}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
