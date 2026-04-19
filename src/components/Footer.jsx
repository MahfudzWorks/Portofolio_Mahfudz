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
    <footer className="p-[3px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] text-gray-600">
      <div className="bg-white rounded-t-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Mahfudz Alfanani Syaviqi
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
            Sarjana Teknik Informatika Universitas Muhammadiyah Gresik tahun
            2025. Fokus pada pengembangan website, sistem digital, dan solusi
            berbasis teknologi modern.
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mt-5 flex-wrap">
            {sosialMedia.map((sosial, index) => (
              <a
                key={index}
                href={sosial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[2px] rounded-full bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] hover:shadow-lg transition duration-300"
                title={sosial.name}
              >
                <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <img
                    src={sosial.icon}
                    alt={sosial.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-3 text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">
              Mahfudz Alfanani Syaviqi
            </span>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
