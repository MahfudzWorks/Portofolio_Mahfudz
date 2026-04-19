import { Component } from 'react'
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
// import License from "./pages/License";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects />
      <Skills />
      <Experience />
      {/* <License />
      <Contact /> */}
      <Footer />
    </>
  )
}

export default App
