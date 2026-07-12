import { useState } from 'react'

const License = () => {
  const licenses = [
    {
      title: "Building Website with Lovable AI",
      org: "MySkill Short Class",
      date: "May 21th, 2026",
      img: "assets/Certificate/Sertifikat Building Website with Lovable AI.jpg",
      link: "https://drive.google.com/file/d/1CSErC4LXNdOXw1RgTjYIlEpKB6PS8GME/view?usp=sharing",
    },
    {
      title: "Data Science Introduction",
      org: "MySkill Short Class",
      date: "May 12th, 2026",
      img: "assets/Certificate/DataScienceIntroduction.jpg",
      link: "https://drive.google.com/file/d/1fzCxYQnG6LpHqjkEz3dQj_f4YqK3pW3y/view?usp=drive_link",
    },
    {
      title: "Essential Skills Social Influence",
      org: "MySkill Short Class",
      date: "May 26th, 2026",
      img: "assets/Certificate/Essential Skills Social Influence.jpg",
      link: "https://drive.google.com/file/d/15asQ-LlnptzeITEPKPxqtXlYyQExMyVq/view?usp=sharing",
    },
    {
      title: "Essential Skills Adaptability",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Adaptability.jpg",
      link: "https://drive.google.com/file/d/18cjwTF7hui55I6XdDjVXlbrrPF9SlNPl/view?usp=sharing",
    },
    {
      title: "Essential Skills Digital Disruption & Transformation",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Digital Disruption & Transformation.jpg",
      link: "https://drive.google.com/file/d/18cjwTF7hui55I6XdDjVXlbrrPF9SlNPl/view?usp=sharing",
    },
    {
      title: "Essential Skills Digital Literacy",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Digital Literacy.jpg",
      link: "https://drive.google.com/file/d/1-HtlqWeQRfH20LRnaHZZnBB0l5L3OZwF/view?usp=sharing",
    },
    {
      title: "Essential Skills Emotional Intelligence",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Emotional Intelligence.jpg",
      link: "https://drive.google.com/file/d/1D1iEhC7ATIgjpfRtU30H9GVw51SKz_Z0/view?usp=sharing",
    },
    {
      title: "Essential Skills Integrity at Work",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Integrity at Work.jpg",
      link: "https://drive.google.com/file/d/1BvHbNCSjlgua45ZvzO7qQcWGnhEJZ_U9/view?usp=sharing",
    },
    {
      title: "Essential Skills Self Efficacy",
      org: "Gerakan Nasional Indonesia Kompeten(GNIK) & Kementerian Ketenagakerjaan RI",
      date: "2026",
      img: "assets/Certificate/Essential Skills Self Efficacy.jpg",
      link: "https://drive.google.com/file/d/145g2G963nhbz8koL0nVO8QMtuIegP3u7/view?usp=sharing",
    },
    {
      title: "Author",
      org: "Jurnal Nasional Komputasi dan Teknologi Informasi (JNKTI)",
      date: "2024",
      img: "assets/Certificate/Certificate Author pada Jurnal Nasional Komputasi dan Teknologi Informasi (JNKTI).svg",
      link: "https://drive.google.com/file/d/1Te2gc_u4aBW-xyynf7aBGkxnAHZ9Rfir/view?usp=drive_link",
    },
    {
      title: "Website Development Fundamental",
      org: "MySkill",
      date: "2025",
      img: "assets/Certificate/Certificate WEBSITE DEVELOPMENT FUNDAMENTAL MySkill.svg",
      link: "https://drive.google.com/file/d/14NUHLdldppQQx3iUihApg-pj0eD6xdq7/view?usp=drive_link",
    },
    {
      title: "Backend in Website Development",
      org: "MySkill",
      date: "2025",
      img: "assets/Certificate/Certificate SC Backend in Website Development MySkill.svg",
      link: "https://drive.google.com/file/d/1YbuvqkWSIGnu3bwR3IGP-3N5hPDaJTYB/view?usp=drive_link",
    },
    {
      title: "Intro to Software Engineering",
      org: "RevoU",
      date: "2025",
      img: "assets/Certificate/Certificate Intro to Software Engineering RevoU.svg",
      link: "https://drive.google.com/file/d/17s3OAcdL2ZgR2iwOH9xW4gDC1HzyZGEm/view?usp=drive_link",
    },
    {
      title: "Dibimbing Front-End Developer",
      org: "Dibimbing Indonesia",
      date: "2024",
      img: "assets/Certificate/Certificate DSF 34 - Front End Developer - Dibimbing.id.svg",
      link: "https://drive.google.com/file/d/1QPnK7tynYypLqiIDGdjgfDkjPkmLvPI9/view?usp=drive_link",
    },
    {
      title: "Designing a Future that Lasts",
      org: "Google Devloper Groups",
      date: "2025",
      img: "assets/Certificate/Certificate Sonder 2025  Designing a Future that Lasts.svg",
      link: "https://drive.google.com/file/d/1E8VmszEliSIyJZQpkB8md-RbpU87PfQ8/view?usp=drive_link",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedLicenses = showAll ? licenses : licenses.slice(0, 9);

  return (
    <section
      id="license"
      className="relative flex flex-col justify-center items-center py-16 px-4"
    >
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-black dark:text-white mb-12 transition-colors duration-300 flex items-center gap-3">
        <span className="inline-block animate-pulse">📜</span> 
        License & Certifications
        <span className="inline-block animate-bounce text-2xl">✅</span>
      </h1>

      {/* Grid Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto px-4">
        {displayedLicenses.map((license, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-950/50"
          >
            {/* 1. Efek Border Bergerak Berwarna Google saat di-Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 after:absolute after:inset-0 after:bg-gradient-to-l after:from-green-500 after:via-blue-500 opacity-20 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-2xl z-0" />

            {/* 2. Konten Utama Card (Tetap menjaga background asli luar) */}
            <div className="relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-[14px] p-5 z-10 transition-colors duration-300">
              
              {/* Image Certificate Wrapper */}
              <div className="w-full h-44 bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-gray-100 dark:border-gray-800">
                <img
                  src={license.img}
                  alt={license.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Info */}
              <div className="flex-grow flex flex-col justify-between text-center mb-4">
                <div>
                  <h2 className="text-md font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {license.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 font-medium">
                    {license.org}
                  </p>
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2 tracking-wider uppercase font-semibold">
                  {license.date}
                </p>
              </div>

              {/* Button View Certificate */}
              <a
                href={license.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto group/btn relative p-[1.5px] rounded-xl overflow-hidden inline-block"
              >
                {/* Border halus tombol dengan warna Google */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                
                <div className="relative flex items-center justify-center gap-2 bg-white dark:bg-gray-800 group-hover/btn:bg-gray-50 dark:group-hover/btn:bg-gray-750 text-gray-600 dark:text-gray-200 font-semibold text-xs py-2.5 px-4 rounded-[10px] transition-all duration-300 shadow-sm active:scale-[0.98]">
                  <span>View Certificate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* Button Show All / Show Less */}
      {licenses.length > 9 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="group/show relative mt-12 p-[2px] rounded-xl overflow-hidden shadow-md active:scale-95 transition-all duration-350"
        >
          {/* Border Google Bergerak untuk Tombol Utama */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 after:absolute after:inset-0 after:bg-gradient-to-l after:from-green-500 after:via-blue-500 animate-[spin_5s_linear_infinite]" />
          
          <div className="relative flex items-center justify-center bg-white dark:bg-gray-900 group-hover/show:bg-gray-50 dark:group-hover/show:bg-gray-800 text-gray-800 dark:text-white font-bold text-sm px-8 py-3 rounded-[10px] transition-colors">
            {showAll ? "Show Less" : "Show All"}
          </div>
        </button>
      )}
    </section>
  )
}

export default License