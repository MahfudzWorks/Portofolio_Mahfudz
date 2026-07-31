import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  const googleColors = [
    "rgba(66, 133, 244, 0.12)",
    "rgba(234, 67, 53, 0.12)",
    "rgba(251, 188, 5, 0.12)",
    "rgba(52, 168, 83, 0.12)",
  ];

  const googleColorsDark = [
    "rgba(66, 133, 244, 0.06)",
    "rgba(234, 67, 53, 0.06)",
    "rgba(251, 188, 5, 0.06)",
    "rgba(52, 168, 83, 0.06)",
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative scroll-mt-[90px] flex flex-col items-center justify-center min-h-[85vh] pt-[90px] pb-16 sm:py-24 text-black dark:text-white overflow-hidden"
    >
      <motion.div
        animate={{ backgroundColor: googleColors }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] blur-[80px] sm:blur-[130px] rounded-full pointer-events-none z-0 block dark:hidden"
      />

      <motion.div
        animate={{ backgroundColor: googleColorsDark }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] blur-[80px] sm:blur-[130px] rounded-full pointer-events-none z-0 hidden dark:block"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-green-500 blur-sm opacity-40 group-hover:opacity-75 transition duration-500" />
          <img
            src="assets/Profile.svg"
            alt="Mahfudz Alfanani Syaviqi"
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-white/50 dark:border-gray-800/50 shadow-2xl object-cover"
          />
        </motion.div>

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
          Web Developer • Digital System Developer • Data & IT Operations
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl px-2 sm:px-4"
        >
          Lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik dengan IPK 3,68. Memiliki pengalaman nyata dalam mengembangkan sistem web menggunakan Laravel & React, manajemen data operasional industri, serta pengelolaan administrasi. Adaptif, komunikatif, dan siap menghadirkan solusi digital yang efisien.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10 justify-center w-full"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center p-[2px] rounded-xl overflow-hidden shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(66,133,244,0.3)]"
          >
            <div className="absolute inset-0 bg-[conic-gradient(#EA4335,#FBBC04,#34A853,#4285F4,#EA4335)] animate-[spin_4s_linear_infinite] opacity-60 group-hover/btn:opacity-100 group-active/btn:animate-[spin_1.5s_linear_infinite] transition-opacity duration-300" />
            
            <div className="relative w-full text-center flex items-center justify-center gap-2 bg-white dark:bg-gray-900 group-hover/btn:bg-white/95 dark:group-hover/btn:bg-gray-900/95 text-gray-800 dark:text-white font-semibold px-8 py-3.5 rounded-[10px] transition-colors duration-300 text-sm sm:text-base select-none">
              <span>Mari Berkolaborasi</span>
              <motion.span 
                animate={{ y: [0, -3, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                🚀
              </motion.span>
            </div>
          </motion.a>

          <motion.a
            href="CV dan Portofolio_Mahfudz Alfanani Syaviqi.pdf"
            download
            whileHover={{ 
              scale: 1.03, 
              y: -2,
              borderColor: "rgba(66, 133, 244, 0.4)" 
            }}
            whileTap={{ 
              scale: 0.96,
              backgroundColor: "rgba(66, 133, 244, 0.08)"
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md text-gray-700 dark:text-gray-300 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base select-none shadow-sm"
          >
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>Unduh CV</span>
          </motion.a>
        </motion.div>

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
              whileHover={{ 
                scale: 1.1, 
                y: -4, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.92 }}
              className="p-3 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md transition-all duration-300 dark:hover:bg-gray-800/80 hover:border-blue-400 dark:hover:border-blue-500"
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