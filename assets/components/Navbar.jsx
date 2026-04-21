import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Efek sembunyi/muncul saat scroll
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek aktifkan link sesuai posisi scroll
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
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Fungsi scroll halus ke section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-600 font-semibold text-sm"
      : "text-black hover:font-semibold text-sm";

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
      className={`md:w-160 rounded-4xl p-1 shadow-lg fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-center bg-white text-black gap-4 rounded-3xl">
        <ul className="hidden md:flex list-none space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className={`${linkClass(link.id)} focus:outline-none`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-white rounded-xl p-4 shadow">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className={`${linkClass(link.id)} focus:outline-none`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
