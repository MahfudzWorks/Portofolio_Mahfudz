import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { SiCanva, SiFigma} from "react-icons/si";

const Skills = () => {
    const [view, setView] = useState("skills"); // "skills" | "tools"

    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        {
        name: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
        },
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500 text-5xl" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
        {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
        },
    ];

    const tools = [
        {
        name: "Word",
        icon: (
            <img src="icons/Microsoft Word.svg" alt="Word" className="w-12 h-12" />
        ),
        },
        {
        name: "Excel",
        icon: (
            <img
            src="icons/Microsoft Excel.svg"
            alt="Excel"
            className="w-12 h-12"
            />
        ),
        },
        {
        name: "PowerPoint",
        icon: (
            <img
            src="icons/Microsoft PowerPoint.svg"
            alt="PowerPoint"
            className="w-12 h-12"
            />
        ),
        },
        {
        name: "To Do",
        icon: (
            <img
            src="icons/Microsoft To Do App.svg"
            alt="To Do"
            className="w-12 h-12"
            />
        ),
        },
        {
        name: "VS Code",
        icon: (
            <img
            src="icons/Visual Studio Code.svg"
            alt="Visual Studio Code"
            className="w-12 h-12"
            />
        ),
        },
        {
        name: "Figma",
        icon: <img src="icons/Figma.svg" alt="Figma" className="w-12 h-12" />,
        },
        { name: "Canva", icon: <SiCanva className="text-cyan-400 text-5xl" /> },
        {
        name: "Illustrator",
        icon: (
            <img
            src="icons/Adobe Illustrator.svg"
            alt="Illustrator"
            className="w-12 h-12"
            />
        ),
        },
        {
        name: "Photoshop",
        icon: (
            <img
              src="icons/Adobe Photoshop.svg"
              alt="Photoshop"
              className="w-12 h-12"
            />
        ),
        },
        {
        name: "ChatGPT",
        icon: <img src="icons/ChatGPT.svg" alt="ChatGPT" className="w-12 h-12" />,
        },
        {
        name: "GitHub Copilot",
        icon: <img src="icons/GitHub.svg" alt="Copilot" className="w-12 h-12" />,
        },
        {
        name: "Gemini Ai",
        icon: (
            <img src="icons/Gemini Ai.svg" alt="Gemini" className="w-12 h-12" />
        ),
        },
    ];

    const data = view === "skills" ? skills : tools;

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center px-6 py-12 relative scroll-mt-10"
    >


      <h1 className="text-3xl font-bold text-black mb-6">
        {view === "skills" ? (
          <>
            <span className="inline-block animate-spin">🛠️</span> Skills{" "}
            <span className="inline-block animate-bounce">⚡</span>
          </>
        ) : (
          <>
            <span className="inline-block animate-bounce">⚙️</span> Tools{" "}
            <span className="inline-block animate-spin">🧰</span>
          </>
        )}
      </h1>

      <p className="text-center max-w-2xl text-gray-600 mb-12">
        {view === "skills"
          ? "Berikut adalah beberapa skill utama yang saya kuasai dalam pengembangan web."
          : "Berikut adalah beberapa tools yang saya gunakan untuk menunjang produktivitas."}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-[2px] rounded-2xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]"
          >
            <div className="flex flex-col items-center justify-center w-full h-full bg-white backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        {view === "skills" ? (
          <div className="mt-6 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg inline-block">
            <button
              onClick={() => setView("tools")}
              className="flex items-center justify-center 
                 bg-white text-gray-600 font-semibold 
                 px-6 py-2 rounded-lg 
                 transition-all duration-300 ease-in-out
                 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
                 hover:shadow-md active:scale-[0.98]"
            >
              Lihat Tools ⚙️
            </button>
          </div>
        ) : (
          <div className="mt-6 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg inline-block">
            <button
              onClick={() => setView("skills")}
              className="flex items-center justify-center 
                 bg-white text-gray-600 font-semibold 
                 px-6 py-2 rounded-lg 
                 transition-all duration-300 ease-in-out
                 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
                 hover:shadow-md active:scale-[0.98]"
            >
              Kembali ke Skills 🛠️
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
