import { useState } from 'react'
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
import { SiLaravel, SiPhp, SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si"

const Projects = () => {
    const [showMore, setShowMore] = useState({})

    const toggleShowMore = (id) => {
        setShowMore((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const projects = [
        {
            id: 1,
            title: "Project Sistem E-Commerce BestCell",
            text: "SIREPEN-BestCell adalah sistem informasi yang dirancang untuk mendukung proses penjualan handphone di Toko BestCell. Sistem ini dilengkapi dengan fitur rekomendasi produk berbasis User-Based Collaborative Filtering (UBCF) untuk membantu pelanggan menemukan produk sesuai preferensi mereka. Pada sisi admin, sistem ini menyediakan fitur manajemen keuangan yang menampilkan laporan transaksi, pencatatan penjualan, serta ringkasan pendapatan, sehingga memudahkan pengelolaan dan pengambilan keputusan.",
            image: "assets/P-BestCell.svg",
            link: "https://mahfudzworks.github.io/Project_E-Commerce_BestCell_LandingPage/",
            icons: [
                { type: "component", value: <SiLaravel className="text-red-500 text-xl" /> },
                { type: "component", value: <SiPhp className="text-indigo-400 text-xl" /> },
                { type: "img", value: "assets/icon/CSS3.svg" },
                { type: "component", value: <SiJavascript className="text-yellow-400 text-xl" /> },
                { type: "component", value: <SiMysql className="text-blue-700 text-xl" /> },
            ],
        },
        {
            id: 2,
            title: "Project Landing Page PNRB",
            text: "Website resmi Pagarnusa Ranting Balongmojo yang dibuat untuk memberikan informasi mengenai kegiatan, struktur organisasi, galeri, dan berita terbaru. Dibangun menggunakan HTML, CSS, JavaScript bisa disesuaikan jika pakai framework lain.",
            image: "assets/P-PNRB.svg",
            link: "https://mahfudzworks.github.io/Project_Pagarnusa_RantingBalongmojo_Website/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/CSS3.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
            ],
        },
        {
            id: 3,
            title: "Project Landing Page Gym24",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-Gym.svg",
            link: "https://mahfudzworks.github.io/Project_gym24-landing-page/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/CSS3.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
            ],
        },
        {
            id: 4,
            title: "Project Kalkulator",
            text: "Website kalkulator sederhana dengan tampilan modern dan responsif.",
            image: "assets/P-Kalkulator.svg",
            link: "https://mahfudzworks.github.io/Project_Kalkulator/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
        {
            id: 5,
            title: "Project BMI Kalkulator",
            text: "Aplikasi untuk menghitung BMI dengan tampilan sederhana dan interaktif.",
            image: "assets/P-BMIKalkulator.svg",
            link: "https://mahfudzworks.github.io/Project_BMI_Kalkulator/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
        {
            id: 6,
            title: "Project Color Palette",
            text: "Generator warna untuk membantu memilih kombinasi warna yang menarik.",
            image: "assets/P-CollorPalete.svg",
            link: "https://mahfudzworks.github.io/Project_Color_Palette_Generator/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
        {
            id: 7,
            title: "Project Digital Clock",
            text: "Jam digital real-time dengan tampilan modern dan responsif.",
            image: "assets/P-DigitalClock.svg",
            link: "https://mahfudzworks.github.io/Project_Digital_Clock/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
        {
            id: 8,
            title: "Project Smart Quiz",
            text: "Aplikasi kuis interaktif untuk menguji pengetahuan pengguna.",
            image: "assets/P-SmartQuiz.svg",
            link: "https://mahfudzworks.github.io/Project_Smart_Quizz/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
        {
            id: 9,
            title: "Project Weather App",
            text: "Aplikasi pemantau cuaca real-time yang menampilkan informasi suhu, kelembapan, dan prakiraan cuaca berdasarkan lokasi yang dicari oleh pengguna secara instan.",
            image: "assets/P-WeatherApp.svg",
            link: "https://mahfudzworks.github.io/Project_Weather-APP/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-xl" /> },
            ],
        },
    ]

    return (
    <section
      id="projects"
      className="relative z-10 flex flex-col justify-center items-center scroll-mt-[90px] px-6 py-16"
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Projects
        </h2>
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full mt-3" 
        />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400 px-4 py-1 rounded-full text-xs font-medium border border-yellow-200 dark:border-yellow-900/50 mb-4 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping"></span>
        Private & Selected Projects
      </div>

      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl text-center mb-12">
        Berikut adalah sebagian project yang dapat ditampilkan secara publik. 
        Sebagian lainnya merupakan <b className="text-gray-800 dark:text-gray-200 font-semibold">private project</b>. 
        Full portfolio PDF tersedia melalui kontak langsung.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project) => {
          const isLongText = project.text.length > 100;
          
          return (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl p-[2px] overflow-hidden transition-all duration-500 lg:hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 opacity-30 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-2xl z-0 pointer-events-none" />

              <div className="relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-[14px] p-5 z-10 transition-colors duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 aspect-video mb-4 relative z-20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </a>

                <h2 className="font-bold text-lg text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2.5 leading-relaxed text-sm flex-grow">
                  {showMore[project.id] || !isLongText
                    ? project.text
                    : project.text.substring(0, 100) + "..."}
                </p>

                {isLongText && (
                  <button
                    onClick={() => toggleShowMore(project.id)}
                    className="text-blue-600 dark:text-blue-400 font-medium mt-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs w-fit flex items-center gap-1 group/btn relative z-20"
                  >
                    <span>{showMore[project.id] ? "Tampilkan lebih sedikit" : "Tampilkan lebih banyak"}</span>
                    <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
                  </button>
                )}

                <div className="h-[1px] bg-gray-100 dark:bg-gray-800/80 my-4" />

                <div className="flex flex-wrap gap-2">
                  {project.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm border border-gray-100 dark:border-gray-800"
                    >
                      {icon.type === "img" ? (
                        <img
                          src={icon.value}
                          alt="tech-icon"
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center">
                          {icon.value}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Projects