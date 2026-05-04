import { Component } from 'react'
import './App.css'
import { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import License from "./pages/License";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>

      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    
      <Navbar/>
      <Home/>
      <About/>
      <Projects />
      <Skills />
      <Experience />
      <License />
      <Contact />
      <Footer />
    </>
  )
}

export default App
