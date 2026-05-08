import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiCanva,
} from "react-icons/si";

const Skills = () => {
  const [view, setView] = useState("skills");
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    {
      name: "HTML",
      level: "95%",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },
    {
      name: "CSS",
      level: "85%",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },
    {
      name: "JavaScript",
      level: "70%",
      icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    },
    {
      name: "React",
      level: "70%",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },
    {
      name: "Laravel",
      level: "80%",
      icon: <FaLaravel className="text-red-500 text-5xl" />,
    },
    {
      name: "PHP",
      level: "85%",
      icon: <FaPhp className="text-indigo-500 text-5xl" />,
    },
    {
      name: "MySQL",
      level: "80%",
      icon: <SiMysql className="text-blue-600 text-5xl" />,
    },
    {
      name: "TailwindCSS",
      level: "90%",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },
  ];

  const tools = [
    {
      name: "Word",
      level: "95%",
      icon: (
        <img src="icons/Microsoft Word.svg" alt="Word" className="w-12 h-12" />
      ),
    },
    {
      name: "Excel",
      level: "85%",
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
      level: "90%",
      icon: (
        <img
          src="icons/Microsoft PowerPoint.svg"
          alt="PowerPoint"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "VS Code",
      level: "90%",
      icon: (
        <img
          src="icons/Visual Studio Code.svg"
          alt="VS Code"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Figma",
      level: "85%",
      icon: (
        <img src="icons/Figma.svg" alt="Figma" className="w-12 h-12" />
      ),
    },
    {
      name: "Canva",
      level: "95%",
      icon: <SiCanva className="text-cyan-400 text-5xl" />,
    },
  ];

  const data = view === "skills" ? skills : tools;

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center px-6 py-14 relative scroll-mt-10"
    >
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
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

      <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-12 transition-colors duration-300">
        {view === "skills"
          ? "Klik card skill untuk melihat tingkat penguasaan."
          : "Tools yang saya gunakan untuk mendukung produktivitas dan pengembangan project."}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveIndex(index === activeIndex ? null : index)
            }
            className="
              relative
              group
              w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44
              p-[2px]
              rounded-3xl
              bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]
              hover:scale-105
              transition-all duration-300
              cursor-pointer
            "
          >
            <div
              className="
                flex flex-col items-center justify-center
                w-full h-full
                rounded-3xl
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-lg dark:shadow-gray-900/40
                transition-all duration-300
              "
            >
              <div className="mb-3">{item.icon}</div>

              <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">
                {item.name}
              </h3>

              {item.level && (
                <div className="w-24 mt-3">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      style={{ width: item.level }}
                    ></div>
                  </div>

                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-300">
                    {item.level}
                  </p>
                </div>
              )}
            </div>

            {activeIndex === index && (
              <div
                className="
                  absolute
                  -top-12 left-1/2 -translate-x-1/2
                  px-4 py-2
                  rounded-xl
                  bg-black dark:bg-white
                  text-white dark:text-black
                  text-xs
                  whitespace-nowrap
                  shadow-lg
                  animate-in fade-in zoom-in
                "
              >
                {view === "skills"
                  ? `${item.name} - ${item.level}`
                  : item.name}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        {view === "skills" ? (
          <div className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-xl inline-block">
            <button
              onClick={() => {
                setView("tools");
                setActiveIndex(null);
              }}
              className="
                bg-white dark:bg-gray-800
                text-gray-700 dark:text-white
                font-semibold
                px-6 py-3
                rounded-xl
                transition-all duration-300
                hover:scale-105
              "
            >
              Lihat Tools ⚙️
            </button>
          </div>
        ) : (
          <div className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-xl inline-block">
            <button
              onClick={() => {
                setView("skills");
                setActiveIndex(null);
              }}
              className="
                bg-white dark:bg-gray-800
                text-gray-700 dark:text-white
                font-semibold
                px-6 py-3
                rounded-xl
                transition-all duration-300
                hover:scale-105
              "
            >
              Kembali ke Skills 🛠️
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;