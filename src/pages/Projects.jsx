import {useState} from 'react'

import {
  FaReact,
} from "react-icons/fa";

import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiTailwindcss 
} from "react-icons/si";

const Projects = () => {

    const [showMore, setShowMore] = useState({});

    const toggleShowMore = (id) => {
        setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const projects = [
        {
            id: 1,
            title: "Project Sistem E-Commerce BestCell",
            text: "SIREPEN-BestCell adalah sistem informasi yang dirancang untuk mendukung proses penjualan handphone di Toko BestCell. Sistem ini dilengkapi dengan fitur rekomendasi produk berbasis User-Based Collaborative Filtering (UBCF) untuk membantu pelanggan menemukan produk sesuai preferensi mereka. Pada sisi admin, sistem ini menyediakan fitur manajemen keuangan yang menampilkan laporan transaksi, pencatatan penjualan, serta ringkasan pendapatan, sehingga memudahkan pengelolaan dan pengambilan keputusan.",
            image: "assets/P-BestCell.svg",
            link: "",
            icons: [
                { type: "component", value: <SiLaravel className="text-red-500 text-2xl" /> },
                { type: "component", value: <SiPhp className="text-indigo-400 text-2xl" /> },
                { type: "img", value: "assets/icon/CSS3.svg" },
                { type: "component", value: <SiJavascript className="text-yellow-400 text-2xl" /> },
                { type: "component", value: <SiMysql className="text-blue-700 text-2xl" /> },
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
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
            ],
        },
        {
            id: 5,
            title: "Project BMI Kalkulator",
            text: "Aplikasi untuk menghitung BMI dengan tampilan sederhana dan interaktif.",
            image: "assets/P-BMIKalkulator.svg",
            link: "https://mahfudzworks.github.io/BMI_Kalkulator/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
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
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
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
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
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
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
            ],
        },
        {
            id: 9,
            title: "Project Weather App",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-WeatherApp.svg",
            link: "https://mahfudzworks.github.io/Project_Weather-APP/",
            icons: [
                { type: "img", value: "assets/icon/Html5.svg" },
                { type: "img", value: "assets/icon/JavaScript.svg" },
                { type: "component", value: <FaReact className="text-cyan-400 text-2xl" /> },
                { type: "component", value: <SiTailwindcss className="text-sky-400 text-2xl" /> },
            ],
        },
    ];

    return (
    <section
        id="Projects"
        className="relative flex flex-col justify-center items-center scroll-mt-20"
        >
        <h1 className="text-3xl font-bold text-black mt-14">
            <span className="inline-block animate-bounce">💻</span> Projects{" "}
            <span className="inline-block animate-pulse">🚧</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl px-8 mt-8">
            {projects.map((project) => (
            <div
                key={project.id}
                className="flex flex-col bg-white shadow-lg p-4"
            >
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full mb-4 h-auto p-4 md:p-0 
                    hover:opacity-80 hover:scale-105 
                    transition duration-300 cursor-pointer"
                />
                </a>

                <h2 className="font-semibold">{project.title}</h2>

                <p className="text-gray-600 mt-2">
                {showMore[project.id]
                    ? project.text
                    : project.text.substring(0, 100) + "..."}
                </p>

                <button
                onClick={() => toggleShowMore(project.id)}
                className="text-gray-600 font-semibold mt-2 hover:underline"
                >
                {showMore[project.id]
                    ? "Tampilkan lebih sedikit"
                    : "Tampilkan lebih banyak"}
                </button>

                <div className="flex flex-wrap gap-2 mt-3">
                {project.icons.map((icon, index) => {
                    if (icon.type === "img") {
                        return (
                        <img
                            key={index}
                            src={icon.value}
                            alt="icon"
                            className="w-7 h-7 hover:scale-110 transition"
                        />
                        );
                    }

                    return (
                        <span key={index} className="hover:scale-110 transition">
                        {icon.value}
                        </span>
                    );
                    })}
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Projects
