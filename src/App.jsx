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
        className="
          fixed bottom-5 right-5 z-50
          w-11 h-11
          sm:w-12 sm:h-12
          rounded-full
          flex items-center justify-center
          backdrop-blur-md
          bg-white/80 dark:bg-gray-800/80
          text-xl
          shadow-lg
          border border-gray-300 dark:border-gray-700
          hover:scale-110
          active:scale-95
          transition-all duration-300
        "
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
