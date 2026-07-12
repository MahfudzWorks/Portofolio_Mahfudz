import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Keyframes untuk transisi warna teks & dekorasi agar serasi dengan Google
  const googleTextGlow = [
    "text-blue-500",
    "text-red-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500"
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center scroll-mt-24 px-6 sm:px-12 lg:px-20 py-20 text-black dark:text-white relative overflow-hidden"
    >
      {/* ─── EFEK LATAR BELAKANG AMBIENT GOOGLE (AKTIF BERGERAK) ─── */}
      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0], 
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/10 via-red-500/5 to-transparent blur-[100px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 30, 0], 
          y: [0, 40, -10, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-gradient-to-r from-yellow-500/5 via-green-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" 
      />

      {/* Judul Halaman */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Tentang Saya
        </h2>
        {/* Garis Pembatas dengan Animasi Gradasi Berjalan */}
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full mt-3" 
        />
      </div>

      {/* Kontainer Utama Bento Style */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri: Foto Profil dengan Google Active Border Ring */}
        <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
          <div className="relative group p-[3px] rounded-[30px] overflow-hidden">
            {/* Bingkai Google yang Berputar Aktif di Belakang Foto */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-[30px]"
            />
            <div className="relative rounded-[27px] p-1 bg-white dark:bg-gray-950">
              <img
                src="assets/about-foto.jpeg"
                alt="Mahfudz Alfanani"
                className="w-full max-w-[320px] h-[400px] sm:h-[460px] rounded-[24px] object-cover object-center bg-gray-50 dark:bg-gray-900 shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Detail Informasi */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* KARTU INTRO UTAMA (Efek Garis Tepi Google yang Mengalir Halus) */}
          <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gray-200/80 dark:bg-gray-800/80 group">
            {/* Animasi Garis Cahaya Google Saat Hover Kartu */}
            <motion.div 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
            />
            
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-amber-500 font-extrabold">Mahfudz Alfanani Syaviqi</span> 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mb-4">
                Saya merupakan lulusan **S1 Teknik Informatika dari Universitas Muhammadiyah Gresik** yang memiliki gairah besar dalam merancang sistem digital yang efisien, responsif, dan berbasis data.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Melalui pengalaman kerja praktik sebagai *Software Developer Internship* di **CV Fintechnology Consultant Indonesian**, saya mengasah keahlian membangun platform e-commerce dan sistem operasional menggunakan ekosistem Laravel. Di samping itu, saya aktif mengelola operasional layanan digital akademik melalui **Jasa Joki Tugas Vyyy** di bidang pengolahan data kompleks, desain, dan integrasi web.
              </p>
            </div>
          </div>

          {/* GRID STATISTIK PENDUKUNG (Dengan Aksen Titik Google Aktif) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "1+ Tahun", desc: "Pengalaman Kerja", border: "hover:border-blue-500/50" },
              { title: "8+ Inti", desc: "Bahasa & Framework", border: "hover:border-red-500/50" },
              { title: "10+ Sukses", desc: "Project Selesai", border: "hover:border-green-500/50" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`relative p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm text-center shadow-sm transition-all duration-300 ${stat.border} group`}
              >
                {/* Efek Indikator Warna Google di Setiap Pojok Kartu Statistik */}
                <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-blue-500" : i === 1 ? "bg-red-500" : "bg-green-500"} animate-pulse`} />
                
                <span className="block text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {stat.title}
                </span>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* KARTU CORE STACK SNEAK-PEEK */}
          <div className="p-6 rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
              <span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span></span>
              Core Tech Stack & Soft Skills
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              HTML, CSS, JavaScript, React, Laravel, PHP, MySQL, Tailwind CSS • Administrasi Digital, Kerja Sama Tim, Komunikasi Organisasi, Masalah Solutif (*Problem Solving*).
            </p>
          </div>

          {/* TOMBOL AKSI UTAMA (Dengan Gradasi Google Bergerak) */}
          <div className="mt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-red-500 via-yellow-500 to-green-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 text-sm sm:text-base"
            >
              Mari Berkolaborasi 🚀
            </motion.a>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;