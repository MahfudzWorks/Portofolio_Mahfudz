import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastY) {
        setShowNavbar(false);
        setIsOpen(false); 
      } else {
        setShowNavbar(true);
      }
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: "-90px 0px 0px 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 90;
      const posisi = section.offsetTop - navHeight;
      window.scrollTo({ top: posisi, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "license", label: "License" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl md:max-w-3xl rounded-3xl p-[2px] transition-all duration-500 bg-white/75 dark:bg-gray-950/75 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] border border-gray-200/50 dark:border-gray-800/50 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex items-center justify-between md:justify-center px-4 py-2.5 rounded-[22px]">
        <span className="md:hidden font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-green-500 text-sm tracking-wide">
          Portfolio.
        </span>

        <ul className="hidden md:flex list-none items-center gap-1 relative select-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <motion.button
                  onClick={() => handleScrollTo(link.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 focus:outline-none cursor-pointer group/nav
                    ${isActive 
                      ? "text-blue-600 dark:text-blue-400 font-bold" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                >

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-active/nav:opacity-100 blur-[2px] transition-opacity duration-150" />
                  
                  <span>{link.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl border border-blue-500/20 dark:border-blue-400/20 z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            );
          })}
        </ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-xl text-xl text-gray-700 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 cursor-pointer focus:outline-none group/menu relative overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-red-500/20 via-yellow-500/20 to-green-500/20 opacity-0 group-active/menu:opacity-100 transition-opacity duration-150" />
          {isOpen ? <HiX className="relative z-10" /> : <HiMenu className="relative z-10" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden px-2 pb-4 bg-transparent select-none"
          >
            <ul className="flex flex-col gap-1.5 bg-white/95 dark:bg-gray-900/95 rounded-2xl p-2.5 border border-gray-100 dark:border-gray-800 shadow-xl">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <motion.button
                      onClick={() => handleScrollTo(link.id)}
                      whileTap={{ scale: 0.98 }}
                      className={`relative w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none group/mob
                        ${isActive 
                          ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-500/5 dark:bg-blue-400/5 border-l-4 border-blue-500" 
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                    >

                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 via-red-500/5 via-yellow-500/5 to-green-500/5 opacity-0 group-active/mob:opacity-100 transition-opacity duration-150" />
                      <span className="relative z-10">{link.label}</span>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;