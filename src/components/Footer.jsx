import React from 'react'

const Footer = () => {
  const sosialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
      icon: "assets/icon/LinkedIn.svg",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/6282140363716",
      icon: "assets/icon/WhatsApp.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/MahfudzWorks",
      icon: "assets/icon/GitHub.svg",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mahfudzalfa_/",
      icon: "assets/icon/Instagram.svg",
    },
  ];

  return (
    <footer className="mt-20 w-full bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] pt-[2px]">
      <div
        className="
          bg-white dark:bg-gray-900
          border-t border-gray-200 dark:border-gray-700
          shadow-lg dark:shadow-black/30
          transition-all duration-500
        "
      >
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center text-center">

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Mahfudz Alfanani Syaviqi
          </h1>

          <p
            className="
              mt-3
              text-sm sm:text-base
              text-gray-600 dark:text-gray-300
              leading-relaxed
              max-w-2xl
              transition-colors duration-300
            "
          >
            Sarjana Teknik Informatika Universitas Muhammadiyah Gresik tahun
            2025. Fokus pada pengembangan website, sistem digital, dan solusi
            berbasis teknologi modern.
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mt-7 flex-wrap">
            {sosialMedia.map((sosial, index) => (
              <a
                key={index}
                href={sosial.link}
                target="_blank"
                rel="noopener noreferrer"
                title={sosial.name}
                className="
                  p-[2px]
                  rounded-full
                  bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]
                  hover:scale-110
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                <div
                  className="
                    bg-white dark:bg-gray-800
                    rounded-full
                    w-11 h-11 sm:w-12 sm:h-12
                    flex items-center justify-center
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-300
                  "
                >
                  <img
                    src={sosial.icon}
                    alt={sosial.name}
                    className="
                      w-5 h-5 sm:w-6 sm:h-6
                      transition-transform duration-300
                      hover:scale-110
                    "
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="w-full mt-8 pt-5 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                Mahfudz Alfanani Syaviqi
              </span>
              . All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer