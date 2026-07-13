import React from 'react'

const Footer = () => {
  const sosialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
      iconLight: "assets/icon/LinkedIn.svg",
      iconDark: "assets/icon/LinkedIn-dark.svg",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/6282140363716",
      iconLight: "assets/icon/WhatsApp.svg",
      iconDark: "assets/icon/WhatsApp-dark.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/MahfudzWorks",
      iconLight: "assets/icon/GitHub.svg",
      iconDark: "assets/icon/GitHub-dark.svg",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mahfudzalfa_/",
      iconLight: "assets/icon/Instagram.svg",
      iconDark: "assets/icon/Instagram-dark.svg",
    },
  ];

  return (
    <footer className="mt-28 w-full relative overflow-hidden">
      
      <div className="h-[4px] w-full bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)] bg-[length:200%_100%] animate-[gradientFlow_6s_linear_infinite]" />

      <div
        className="
          bg-white dark:bg-gray-950
          border-t border-gray-100 dark:border-gray-900
          shadow-xl transition-all duration-500
        "
      >
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 text-left items-start">
            
            <div className="flex flex-col gap-3">
              <h1 
                className="
                  text-2xl font-black tracking-tight
                  bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)]
                  bg-[length:200%_100%]
                  animate-[gradientFlow_8s_linear_infinite]
                  bg-clip-text text-transparent
                  cursor-default select-none
                "
              >
                Mahfudz Alfanani Syaviqi
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm transition-colors duration-300">
                Sarjana Teknik Informatika Universitas Muhammadiyah Gresik (2025). Berdedikasi dalam menciptakan solusi teknologi web yang andal, efisien, dan berdampak positif.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                <a 
                  href="#home" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>Home</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#about" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>About</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#projects" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>Projects</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#skills" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>Skills</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#experience" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>Experience</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#license" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit"
                >
                  <span>License</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
                <a 
                  href="#contact" 
                  className="relative group/nav px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 w-fit col-span-2"
                >
                  <span>Contact</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-red-500/10 via-yellow-500/10 to-green-500/10 opacity-0 group-hover/nav:opacity-100 blur-[2px] transition-opacity duration-200" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4">
                {sosialMedia.map((sosial, index) => (
                  <a
                    key={index}
                    href={sosial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sosial.name}
                    className="group relative p-[2px] rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-full z-0" />

                    <div className="relative z-10 bg-gray-50 dark:bg-gray-900 rounded-full w-11 h-11 flex items-center justify-center border border-gray-200/60 dark:border-gray-800 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                      <img src={sosial.iconLight} alt={sosial.name} className="w-5 h-5 block dark:hidden transition-transform duration-300 group-hover:scale-110" />
                      <img src={sosial.iconDark} alt={sosial.name} className="w-5 h-5 hidden dark:block transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="w-full mt-6 pt-6 border-t border-gray-100 dark:border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Mahfudz Alfanani Syaviqi
              </span>
              . All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[11px] font-medium text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:underline transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:underline transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  )
}

export default Footer