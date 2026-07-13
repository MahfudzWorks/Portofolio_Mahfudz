import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center scroll-mt-24 px-6 sm:px-12 lg:px-20 py-20 text-black dark:text-white relative overflow-hidden"
    >

      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0], 
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-gradient-to-r from-[#EA4335]/10 via-[#FBBC04]/5 to-transparent blur-[100px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 30, 0], 
          y: [0, 40, -10, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-gradient-to-r from-[#34A853]/5 via-[#4285F4]/10 to-transparent blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Tentang Saya
        </h2>
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-[#EA4335] via-[#FBBC04] via-[#34A853] to-[#4285F4] rounded-full mt-3" 
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
          <div className="relative group p-[3px] rounded-[30px] overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-gray-950/40">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[conic-gradient(#EA4335,#FBBC04,#34A853,#4285F4,#EA4335)] rounded-[30px] z-0"
            />
            <div className="relative z-10 rounded-[27px] p-1 bg-white dark:bg-gray-950">
              <img
                src="assets/about-foto.jpeg"
                alt="Mahfudz Alfanani Syaviqi"
                className="w-full max-w-[320px] h-[400px] sm:h-[460px] rounded-[24px] object-cover object-center bg-gray-50 dark:bg-gray-900 shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative group p-[2px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-gray-950/40">
            <motion.div 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
              className="absolute inset-0 bg-gradient-to-r from-[#EA4335] via-[#FBBC04] via-[#34A853] to-[#4285F4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl z-0"
            />
            <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4335] via-[#FBBC04] to-[#4285F4] font-extrabold">Mahfudz Alfanani Syaviqi</span> 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mb-4">
                Saya merupakan lulusan **S1 Teknik Informatika dari Universitas Muhammadiyah Gresik (IPK 3,68)** yang memiliki gairah besar dalam merancang sistem digital yang efisien, responsif, dan berbasis data. Saya adaptif dalam memahami alur proses industri teknologi maupun operasional teknis.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Memiliki pengalaman kerja komprehensif mulai dari *Software Developer Internship* di **CV FI Technology Consultant Indonesian** membangun platform e-commerce berbasis Laravel, hingga program intership Kemnaker di **PT Pabrik Kertas Tjiwi Kimia Tbk** mengelola data produksi dan penjaminan mutu. Selain itu, saya aktif mengelola operasional bisnis digital mandiri melalui **Jasa Joki Tugas Vyyy**.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "3.68", desc: "IPK S1 Informatika" },
              { title: "3+ Tahun", desc: "Pengalaman Kerja & Bisnis" },
              { title: "10+ Sukses", desc: "Aplikasi & Proyek Web" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group relative p-[2px] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-950/30"
              >
                <div className="absolute inset-0 bg-[conic-gradient(#EA4335,#FBBC04,#34A853,#4285F4,#EA4335)] opacity-20 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl z-0" />
                <div className="relative z-10 p-5 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/60 text-center shadow-sm">
                  <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#EA4335]" : i === 1 ? "bg-[#FBBC04]" : "bg-[#34A853]"} animate-pulse`} />
                  <span className="block text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {stat.title}
                  </span>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="group relative p-[2px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-gray-950/40">
            <div className="absolute inset-0 bg-[conic-gradient(#EA4335,#FBBC04,#34A853,#4285F4,#EA4335)] opacity-10 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl z-0" />
            <div className="relative z-10 p-6 rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                </span>
                Core Tech Stack, Tools & Soft Skills
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>Tech & Tools:</strong> Laravel, React, JavaScript, PHP, Tailwind CSS, MySQL, Microsoft Excel (Pivot & Data Analysis), Figma, Canva. <br className="my-2"/>
                <strong>Professional Skills:</strong> Adaptability & Fast Learning, Complex Problem Solving, Quality Control, Manajemen Administrasi Organisasi, Teamwork.
              </p>
            </div>
          </div>

          <div className="mt-2">
            <a
              href="#contact"
              className="group/btn relative inline-flex items-center gap-2 p-[2px] rounded-xl overflow-hidden shadow-md active:scale-95 transition-all duration-350"
            >
              <div className="absolute inset-0 bg-[conic-gradient(#EA4335,#FBBC04,#34A853,#4285F4,#EA4335)] animate-[spin_5s_linear_infinite]" />
              <div className="relative flex items-center justify-center gap-2 bg-white dark:bg-gray-900 group-hover/btn:bg-gray-50 dark:group-hover/btn:bg-gray-800 text-gray-800 dark:text-white font-semibold px-8 py-3.5 rounded-[10px] transition-colors duration-300">
                Mari Berkolaborasi 🚀
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;