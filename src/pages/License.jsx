import {useState} from 'react'

const License = () => {
  const licenses = [
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

  const displayedLicenses = showAll ? licenses : licenses.slice(0, 3);
  return (
    <section
      id="license"
      className="relative flex flex-col justify-center items-center py-10"
    >
      <AnimatedBackground />
      <h1 className="text-3xl font-bold text-black mb-6">
        <span className="inline-block animate-pulse">📜</span> License{" "}
        <span className="inline-block animate-ping">✅</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
        {displayedLicenses.map((license, index) => (
          <div
            key={index}
            className="p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]"
          >
            <div className="bg-white rounded-lg p-5 shadow-lg flex flex-col items-center h-full">
              <img
                src={license.img}
                alt={license.title}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {license.title}
              </h2>
              <p className="text-gray-600 text-sm text-center">{license.org}</p>
              <p className="text-sm text-gray-500">{license.date}</p>
              <a
                href={license.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg inline-block"
              >
                <div
                  className="flex items-center gap-2 
               bg-white text-gray-600 
               font-semibold px-6 py-2 rounded-lg 
               transition-all duration-300 ease-in-out
               hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
               hover:shadow-md active:scale-[0.98]"
                >
                  <span>View Certificate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
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

      {licenses.length > 3 && (
        <div className="mt-6 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg inline-block">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center 
                 bg-white text-gray-600 font-semibold 
                 px-6 py-2 rounded-lg 
                 transition-all duration-300 ease-in-out
                 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
                 hover:shadow-md active:scale-[0.98]"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      <div className="h-32" />
    </section>
  )
}

export default License
