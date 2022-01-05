import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, } from 'react-router-dom';
import { Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Menu from "./Menu";
import Topbar from "./Topbar";
import Works from "./Works";
import Home from "./Home"
import ScrollToTop from "./ScrollToTop";



function App() {
const [menuOpen, setMenuOpen] = useState(false)

useEffect( ()=>{
Aos.init()
}, [])


  return (
    
    
    <Router>
       <div className="app">

         <ScrollToTop />
         <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
         <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
         <div className="page">
         
         <Routes>
           <Route path="/" exact element={<Home />}/>
         </Routes>
         <Routes>
           <Route path="/projects" element={<Works />}/>
         </Routes>
         <Routes>
           <Route path="/contact" element={<ContactPage />}/>
         </Routes>
         </div>
        <Footer />   
      </div>
      
  </Router>
  )}


export default App;
