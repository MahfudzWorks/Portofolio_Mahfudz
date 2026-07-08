import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import License from "./pages/License";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      <button
        onClick={() => setDark((prev) => !prev)}
        className="
          fixed bottom-5 right-5 z-50
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-gray-300 dark:border-gray-700
          bg-white/80 dark:bg-gray-800/80
          text-xl
          shadow-lg
          backdrop-blur-md
          transition-all duration-300
          hover:scale-110
          active:scale-95
        "
        aria-label="Toggle Theme"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <License />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;