import "./App.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const pageVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", duration: 0.6, bounce: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100 selection:bg-indigo-500 selection:text-white">
      
      <button
        onClick={() => setDark((prev) => !prev)}
        className="
          fixed bottom-6 right-6 z-50
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-gray-200 dark:border-gray-800
          bg-white/70 dark:bg-gray-800/70
          text-xl shadow-xl
          backdrop-blur-md
          cursor-pointer
          transition-all duration-300
          hover:scale-110 hover:shadow-2xl
          active:scale-95
        "
        aria-label="Toggle Theme"
      >

        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? "☀️" : "🌙"}
        </motion.span>
      </button>

      <Navbar />
      
      <main className="space-y-20 overflow-hidden">
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} variants={pageVariants}><Home /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><About /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><Projects /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><Skills /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><Experience /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><License /></motion.section>
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}><Contact /></motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default App;