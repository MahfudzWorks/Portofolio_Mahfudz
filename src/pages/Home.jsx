import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative scroll-mt-15 flex flex-col items-center justify-center py-12 sm:py-20 text-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4 sm:px-6"
      >
        <motion.img
          src="assets/Profile.svg"
          alt="profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6 text-black dark:text-white"
        >
          Mahfudz Alfanani Syaviqi
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 mt-3 sm:m-6 leading-relaxed text-center text-sm sm:text-base px-12"
      >
        Saya adalah lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik yang memiliki minat pada
        pengembangan sistem digital, pengolahan data, teknologi industri, serta administrasi berbasis digital.
        Memiliki pengalaman dalam pengembangan website, pengelolaan administrasi organisasi, serta project
        berbasis IT dengan kemampuan adaptasi, komunikasi, dan kerja sama tim yang baik. ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center w-full sm:w-auto"
      >
        
        <a
          href="#contact"
          className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-3xl inline-block"
        >
          <div
            className="flex items-center justify-center gap-2 
            bg-black text-white 
            dark:bg-white dark:text-black
            font-semibold px-6 h-10 sm:h-12 rounded-3xl
            text-sm sm:text-base
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:shadow-xl
            active:scale-[0.98]"
          >
            <span>Contact me here 📞</span>
          </div>
        </a>

        <a
          href="CV_Mahfudz_Alfanani_Syaviqi.pdf"
          download
          className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-3xl inline-block"
        >
          <div
            className="flex items-center justify-center gap-2 
            bg-white text-black 
            dark:bg-gray-800 dark:text-white
            font-semibold px-6 h-10 sm:h-12 rounded-3xl
            text-sm sm:text-base
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:shadow-xl
            active:scale-[0.98]"
          >
            <span>Download CV ⬇️</span>
          </div>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap"
      >
        {[
          {
            href: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
            icon: "assets/icon/LinkedIn.svg",
            alt: "LinkedIn",
          },
          {
            href: "https://wa.me/6282140363716",
            icon: "assets/icon/WhatsApp.svg",
            alt: "WhatsApp",
          },
          {
            href: "https://github.com/MahfudzWorks",
            icon: "assets/icon/GitHub.svg",
            alt: "GitHub",
          },
          {
            href: "https://www.instagram.com/mahfudzalfa_/",
            icon: "assets/icon/Instagram.svg",
            alt: "Instagram",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-[2px] rounded-full bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]
            hover:shadow-lg transition duration-300"
          >
            <div className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <img
                src={social.icon}
                alt={social.alt}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Home