import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiCanva } from "react-icons/si";

const Skills = () => {
  const [view, setView] = useState("skills");
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", level: "85%", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", level: "70%", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
    { name: "React", level: "70%", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Laravel", level: "80%", icon: <FaLaravel className="text-red-500 text-5xl" /> },
    { name: "PHP", level: "85%", icon: <FaPhp className="text-indigo-500 text-5xl" /> },
    { name: "MySQL", level: "80%", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    { name: "TailwindCSS", level: "90%", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  ];

  const tools = [
    { name: "Word", level: "95%", icon: <img src="icons/Microsoft Word.svg" alt="Word" className="w-12 h-12" /> },
    { name: "Excel", level: "85%", icon: <img src="icons/Microsoft Excel.svg" alt="Excel" className="w-12 h-12" /> },
    { name: "PowerPoint", level: "90%", icon: <img src="icons/Microsoft PowerPoint.svg" alt="PowerPoint" className="w-12 h-12" /> },
    { name: "VS Code", level: "90%", icon: <img src="icons/Visual Studio Code.svg" alt="VS Code" className="w-12 h-12" /> },
    { name: "Figma", level: "85%", icon: <img src="icons/Figma.svg" alt="Figma" className="w-12 h-12" /> },
    { name: "Canva", level: "95%", icon: <SiCanva className="text-cyan-400 text-5xl" /> },
  ];

  const data = view === "skills" ? skills : tools;

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center px-6 py-14 relative scroll-mt-[90px]"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          {view === "skills" ? "Skills" : "Tools"}
        </h2>
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full mt-3" 
        />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 px-4 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-900/50 mb-4 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
        Kemampuan & Perangkat yang Dikuasai
      </div>

      <p className="text-center max-w-3xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
        {view === "skills"
          ? "Teknologi dan bahasa pemrograman yang saya kuasai untuk membangun solusi digital."
          : "Perangkat lunak dan aplikasi pendukung yang saya gunakan dalam setiap proses pengembangan."}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative group w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44
              p-[2px] rounded-3xl overflow-hidden cursor-pointer select-none
              transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-gray-950/70
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 opacity-20 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] group-active:opacity-100 group-active:animate-[spin_1.5s_linear_infinite] transition-all duration-300 rounded-3xl z-0" />

            <div
              className="
                relative z-10 flex flex-col items-center justify-center
                w-full h-full rounded-3xl bg-white dark:bg-gray-800
                border border-gray-200/80 dark:border-gray-700/80 shadow-sm
                transition-all duration-200 
                group-hover:bg-gray-50/90 dark:group-hover:bg-gray-800/90
                group-active:bg-white dark:group-active:bg-gray-900
              "
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.name}
              </h3>

              {item.level && (
                <div className="w-24 mt-3">
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500"
                      style={{ width: item.level }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-center mt-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {item.level}
                  </p>
                </div>
              )}
            </div>

            {activeIndex === index && (
              <div
                className="
                  absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl
                  bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs
                  whitespace-nowrap shadow-lg animate-fadeInZoom z-20 font-medium
                "
              >
                {`${item.name} - ${item.level}`}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <motion.div 
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group/btn relative p-[2px] rounded-xl overflow-hidden shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(66,133,244,0.25)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 animate-[spin_5s_linear_infinite] opacity-60 group-hover/btn:opacity-100 group-active/btn:animate-[spin_2s_linear_infinite] transition-opacity duration-300" />
          <button
            onClick={() => {
              setView(view === "skills" ? "tools" : "skills");
              setActiveIndex(null);
            }}
            className="
              relative z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-white
              font-semibold px-6 py-3 rounded-[10px] transition-all duration-200
              group-hover/btn:bg-white/95 dark:group-hover/btn:bg-gray-800/95
              group-active/btn:bg-white dark:group-active:bg-gray-900
            "
          >
            {view === "skills" ? "Lihat Tools ⚙️" : "Kembali ke Skills 🛠️"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;