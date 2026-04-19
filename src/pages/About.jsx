import React from 'react'

const About = () => {
  return (
    <section
        id="about"
        className="flex flex-col justify-center items-center scroll-mt-26 px-4 sm:px-6 lg:px-0"
    >
        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-4 text-center">
        <span className="inline-block">👨‍💻</span> About Me{" "}
        <span className="inline-block animate-spin">🌟</span>
      </h1>
        <div className="text-center max-w-3xl mt-4 sm:mt-6">
        <p className="text-sm sm:text-base leading-relaxed">
          Selama kuliah saya aktif sebagai Sekretaris Karang Taruna serta
          mengelola usaha Jasa Joki Tugas Vyyy yang menyediakan layanan akademik
          dan pengembangan website.
          <br />
          <br />
          Saya juga berpengalaman sebagai Software Developer di CV Fintechnology
          Consultant Indonesian, terlibat dalam pengembangan sistem termasuk
          website e-commerce.
          <br />
          <br />
          Pengalaman ini memperkuat kemampuan saya dalam pengelolaan data dan
          pengembangan solusi digital di bidang teknologi.
        </p>
      </div>

    </section>
  )
}

export default About
