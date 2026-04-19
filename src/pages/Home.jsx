import React from 'react'

const Home = () => {
  return (
    <section
          id="home"
          className="relative scroll-mt-15 flex flex-col items-center justify-center py-12 sm:py-20"
          >
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4 sm:px-6">
          <img
            src="assets/Profile.svg"
            alt="profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-black mt-4 sm:mt-6">
            Mahfudz Alfanani Syaviqi
          </h1>
        </div>

        <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-center text-sm sm:text-base px-12">
          Saya adalah lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik yang memiliki minat besar
          dalam pengembangan sistem digital dan pengolahan data. Mampu berkomunikasi dengan baik, bekerja dalam
          tim, serta beradaptasi dengan cepat di lingkungan baru. Selama menempuh pendidikan di bidang teknik
          informatika, memiliki ketertarikan pada proses industri teknologi serta memperoleh pengetahuan melalui
          pengalaman magang, organisasi, studi kasus, dan pembelajaran terkait seperti pengembangan website berbasis
          laravel, pengelolaan administrasi organisasi, serta menjalankan usaha jasa di bidang akademik dan digital.
          Memiliki ketertarikan dalam pengembangan solusi berbasis teknologi dan terus berupaya meningkatkan
          kemampuan di bidang IT. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center w-full sm:w-auto">
          <a
            href="#contact"
            className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-3xl inline-block"
          >
            <div
              className="flex items-center justify-center gap-2 
             bg-black text-white 
             font-semibold px-6 h-10 sm:h-12 rounded-3xl
             text-sm sm:text-base
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400
             hover:shadow-md active:scale-[0.98]"
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
             font-semibold px-6 h-10 sm:h-12 rounded-3xl
             text-sm sm:text-base
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-purple-200 hover:via-pink-200 hover:to-yellow-100
             hover:shadow-md active:scale-[0.98]"
            >
              <span>Download CV ⬇️</span>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
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
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]
                 hover:shadow-lg transition duration-300"
            >
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
            </a>
          ))}
        </div>
    </section>
  )
}

export default Home
