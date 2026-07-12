import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  // Definisi palet warna Google untuk animasi latar belakang
  const googleColors = [
    "rgba(66, 133, 244, 0.12)",   // Biru Google
    "rgba(234, 67, 53, 0.12)",    // Merah Google
    "rgba(251, 188, 5, 0.12)",    // Kuning Google
    "rgba(52, 168, 83, 0.12)",    // Hijau Google
  ];

  const googleColorsDark = [
    "rgba(66, 133, 244, 0.06)",   // Biru Google (Lebih redup untuk Dark Mode)
    "rgba(234, 67, 53, 0.06)",    // Merah Google
    "rgba(251, 188, 5, 0.06)",    // Kuning Google
    "rgba(52, 168, 83, 0.06)",    // Hijau Google
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative scroll-mt-20 flex flex-col items-center justify-center min-h-[85vh] py-16 sm:py-24 text-black dark:text-white overflow-hidden"
    >
      {/* ─── EFEK LAMPU SOROT DINAMIS (WARNA GOOGLE) ─── */}
      {/* Tampilan Light Mode */}
      <motion.div
        animate={{ backgroundColor: googleColors }}
        transition={{
          duration: 12,          // Total waktu satu siklus perubahan warna (12 detik)
          repeat: Infinity,     // Mengulang terus-menerus
          ease: "easeInOut",    // Transisi warna yang halus
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] blur-[80px] sm:blur-[130px] rounded-full pointer-events-none z-0 block dark:hidden"
      />

      {/* Tampilan Dark Mode */}
      <motion.div
        animate={{ backgroundColor: googleColorsDark }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] blur-[80px] sm:blur-[130px] rounded-full pointer-events-none z-0 hidden dark:block"
      />
      {/* ────────────────────────────────────────────── */}

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
        
        {/* Kontainer Foto Profil dengan Ring Halus */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 blur-sm opacity-40 group-hover:opacity-70 transition duration-500" />
          <img
            src="assets/Profile.svg"
            alt="Mahfudz Alfanani Syaviqi"
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-white/50 dark:border-gray-800/50 shadow-2xl object-cover"
          />
        </motion.div>

        {/* Nama & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-6 sm:mt-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        >
          Mahfudz Alfanani Syaviqi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-blue-600 dark:text-blue-400 font-medium tracking-wide text-sm sm:text-base mt-2"
        >
          Informatika • Digital System Developer • Data Processing
        </motion.p>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl px-2 sm:px-4"
        >
          Lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik yang berfokus pada 
          pengembangan sistem digital, pengolahan data, dan IT operasional. Memiliki kemampuan adaptasi tinggi 
          serta pengalaman nyata dalam membangun solusi web yang efisien dan kolaboratif.
        </motion.p>

        {/* Tombol Aksi Utama (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-row items-center gap-4 mt-8 sm:mt-10 justify-center w-full"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] text-sm sm:text-base"
          >
            Hubungi Saya
          </a>

          <a
            href="CV_Mahfudz_Alfanani_Syaviqi.pdf"
            download
            className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white active:scale-[0.98] text-sm sm:text-base"
          >
            Unduh CV
          </a>
        </motion.div>

        {/* Media Sosial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center gap-4 mt-12 sm:mt-16"
        >
          {[
            { href: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/", iconLight: "assets/icon/LinkedIn.svg", iconDark: "assets/icon/LinkedIn-dark.svg", alt: "LinkedIn" },
            { href: "https://wa.me/6282140363716", iconLight: "assets/icon/WhatsApp.svg", iconDark: "assets/icon/WhatsApp-dark.svg", alt: "WhatsApp" },
            { href: "https://github.com/MahfudzWorks", iconLight: "assets/icon/GitHub.svg", iconDark: "assets/icon/GitHub-dark.svg", alt: "GitHub" },
            { href: "https://www.instagram.com/mahfudzalfa_/", iconLight: "assets/icon/Instagram.svg", iconDark: "assets/icon/Instagram-dark.svg", alt: "Instagram" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md transition-shadow duration-300 hover:shadow-md dark:hover:bg-gray-800/80"
            >
              <img
                src={social.iconLight}
                alt={social.alt}
                className="w-5 h-5 sm:w-6 sm:h-6 block dark:hidden opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src={social.iconDark}
                alt={social.alt}
                className="w-5 h-5 sm:w-6 sm:h-6 hidden dark:block opacity-75 hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Home;