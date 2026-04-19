import {useState} from 'react'

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
                "assets/icon/Laravel.svg",
                "assets/icon/PHP.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
                "assets/icon/MySQL.svg",
            ],
        },
        {
            id: 2,
            title: "Project Landing Page PNRB",
            text: "Website resmi Pagarnusa Ranting Balongmojo yang dibuat untuk memberikan informasi mengenai kegiatan, struktur organisasi, galeri, dan berita terbaru. Dibangun menggunakan HTML, CSS, JavaScript bisa disesuaikan jika pakai framework lain.",
            image: "assets/P-PNRB.svg",
            link: "https://mahfudzworks.github.io/Project_Pagarnusa_RantingBalongmojo_Website/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 3,
            title: "Project Landing Page Gym24",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-Gym.svg",
            link: "https://mahfudzworks.github.io/Project_gym24-landing-page/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 4,
            title: "Project Kalkulator",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-Kalkulator.svg",
            link: "https://mahfudzworks.github.io/Project_Kalkulator/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 5,
            title: "Project BMI Kalkulator",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-BMIKalkulator.svg",
            link: "https://mahfudzworks.github.io/BMI_Kalkulator/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 6,
            title: "Project Collor Palete",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-CollorPalete.svg",
            link: "https://mahfudzworks.github.io/Project_Color_Palette_Generator/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 7,
            title: "Project Digital Clock",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-DigitalClock.svg",
            link: "https://mahfudzworks.github.io/Project_Digital_Clock/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            
            {
            id: 8,
            title: "Project Smart Quizz",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-SmartQuiz.svg",
            link: "https://mahfudzworks.github.io/Project_Smart_Quizz/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
            ],
        },
            {
            id: 9,
            title: "Project Weather App",
            text: "Landing page untuk Gym24, pusat kebugaran yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini dibuat untuk mempromosikan layanan Gym24 dengan tampilan modern, responsif, dan mudah digunakan.",
            image: "assets/P-WeatherApp.svg",
            link: "https://mahfudzworks.github.io/Project_Weather-APP/",
            icons: [
                "assets/icon/Html5.svg",
                "assets/icon/CSS3.svg",
                "assets/icon/JavaScript.svg",
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
                {project.icons.map((icon, index) => (
                    <img key={index} src={icon} alt="icon" className="w-8 h-8" />
                ))}
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Projects
