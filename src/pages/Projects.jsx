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

        {projects.map((project) => (
            <div
                key={project.id}
                className="relative flex flex-col md:flex-row justify-between max-w-6xl px-8 mt-8 mx-auto"
            >
                    <div className="md:flex p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]">
                    <div className="md:w-100 flex flex-col bg-white p-6 shadow-lg flex-1 items-center md:items-start text-center md:text-left">
                        <h2 className="font-semibold">{project.title}</h2>
                        <br />
                        <p className="text-gray-600">
                        {showMore[project.id]
                            ? project.text
                            : project.text.substring(0, 150) + "..."}
                        </p>
                        <button
                        onClick={() => toggleShowMore(project.id)}
                        className="text-center md:text-left text-gray-600 font-semibold mt-2 hover:underline"
                        >
                        {showMore[project.id]
                            ? "Tampilkan lebih sedikit"
                            : "Tampilkan lebih banyak"}
                        </button>
                        <br />
                        <div className="flex flex-wrap justify-center gap-4">
                        {project.icons.map((icon, index) => (
                            <img
                            key={index}
                            src={icon}
                            alt="icon"
                            className="w-12 h-12"
                            />
                        ))}
                        </div>
                    </div>

                    <div className="md:w-100 bg-white flex justify-center items-center">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto p-4 md:p-0 md:shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                    </div>
            </div>
        ))}
    </section>
  )
}

export default Projects
