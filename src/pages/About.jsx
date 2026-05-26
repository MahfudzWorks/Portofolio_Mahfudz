import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-26 px-4 sm:px-6 lg:px-16 py-16"
    >
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-center text-black dark:text-white">
        <span className="inline-block">👨‍💻</span> About Me{" "}
        <span className="inline-block animate-spin">🌟</span>
      </h1>

      <div className="mt-10 p-[2px] rounded-3xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)] max-w-6xl w-full">
        
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 transition-colors duration-300">
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            
            <div className="p-[3px] rounded-[45px] bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
              <img
                src="assets/about-foto.jpeg"
                alt="About"
                className="w-64 sm:w-72 md:w-80 h-[500px] rounded-[40px] object-cover bg-white dark:bg-gray-900"
              />
            </div>

            <div className="max-w-2xl text-center lg:text-left">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3">
                Halo 👋 Saya{" "}
                <span className="text-slate-800 dark:text-white">
                  Mahfudz Alfanani Syaviqi
                </span>
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Seorang{" "}
                <span className="text-slate-800 dark:text-white">
                  Web Developer 💻
                </span>{" "}
                dari{" "}
                <span className="text-slate-800 dark:text-white">
                  Indonesia
                </span>{" "}
                🌏
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                Saya merupakan lulusan S1 Teknik Informatika Universitas Muhammadiyah
                Gresik yang memiliki minat dalam pengembangan website, sistem
                informasi, serta pengolahan data digital.
                <br />
                <br />
                Memiliki pengalaman sebagai Software Developer Internship di CV
                Fintechnology Consultant Indonesian dengan fokus pengembangan sistem
                berbasis Laravel dan website e-commerce. Selain itu, saya juga
                menjalankan jasa digital dan administrasi melalui Jasa Joki Tugas
                Vyyy yang bergerak di bidang pengolahan data, desain, pembuatan
                website, dan kebutuhan akademik.
                <br />
                <br />
                Saya terbiasa menggunakan teknologi seperti HTML, CSS, JavaScript,
                React, Laravel, PHP, MySQL, dan Tailwind CSS untuk membangun website
                modern dan responsif. Saya juga memiliki kemampuan dalam
                administrasi, teamwork, komunikasi, serta problem solving melalui
                pengalaman organisasi dan project yang telah saya kerjakan.
              </p>

              <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500 rounded-full my-6"></div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="p-[2px] rounded-2xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center h-full">
                    <span className="block text-2xl font-bold text-blue-500">
                      1+
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Tahun Pengalaman
                    </p>
                  </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center h-full">
                    <span className="block text-2xl font-bold text-blue-500">
                      8+
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Bahasa & Framework
                    </p>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-[2px] rounded-2xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center h-full">
                    <span className="block text-2xl font-bold text-blue-500">
                      10+
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Project Selesai
                    </p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <div className="mt-8 inline-block p-[2px] rounded-xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                <button
                  className="
                    flex items-center gap-2
                    bg-white dark:bg-gray-800
                    text-gray-700 dark:text-white
                    font-semibold
                    px-7 py-3 rounded-xl
                    transition-all duration-300
                    hover:bg-gradient-to-r
                    hover:from-green-50
                    hover:to-blue-50
                    dark:hover:from-gray-700
                    dark:hover:to-gray-900
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                >
                  Hubungi Saya 🚀
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;