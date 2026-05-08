import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "CV. Fintechnology Consultant Indonesian",
      date: "08/2024 - 12/2024",
      description:
        "Bertanggung jawab dalam pengembangan sistem digital, termasuk pembuatan website ecommerce menggunakan framework Laravel, mulai dari proses frontend, backend, hingga testing.",
      position: "left",
    },

    {
      title: "Sekretaris dan Bendahara Organisasi",
      company: "Karang Taruna Balongmojo",
      date: "08/2021 - 08/2026",
      description:
        "Bertugas mencatat pemasukan dan pengeluaran keuangan organisasi, menyusun surat undangan, proposal sponsor, serta mengelola administrasi untuk mendukung kelancaran kegiatan Kartar.",
      position: "right",
    },

    {
      title: "Owner",
      company: "Jasa Joki Tugas Vyyy",
      date: "01/2022 - 08/2025",
      description:
        "Mendirikan dan mengelola layanan jasa pembuatan tugas akademik dan non-akademik, meliputi penulisan makalah, pengolahan data Excel, desain presentasi PowerPoint, serta pembuatan website dan desain grafis. Fokus pada kualitas, ketepatan waktu, dan kepuasan klien.",
      position: "left",
    },

    {
      title: "Guru Ekstrakurikuler",
      company: "SMP Negeri 28 Gresik",
      date: "08/2023 - 08/2025",
      description:
        "Mengajar ekstrakurikuler pencak silat sebagai upaya pengembangan minat dan bakat siswa di bidang olahraga dan seni bela diri tradisional, serta berhasil membimbing siswa meraih prestasi.",
      position: "right",
    },

    {
      title: "Operator – Stationery Pad",
      company: "PT Pabrik Kertas Tjiwi Kimia Tbk (Internship Kemnaker)",
      date: "11/2025 - Sekarang",
      list: [
        "Memahami alur proses mesin produk Legal Pad dan GNB",
        "Menerapkan sistem manajemen mutu ISO 9001 dan K3",
        "Mengikuti SOP, Work Instruction, dan alur produksi",
        "Melakukan quality control produk sesuai standar",
        "Mendukung administrasi produksi dan pengelolaan material",
        "Terlibat dalam operasional E-Ticket dan Carton Box",
        "Beradaptasi lintas divisi (Finishing, Etiket, E-Material)",
        "Menerapkan prinsip 6S di area kerja",
      ],
      position: "left",
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center scroll-mt-20 text-black dark:text-white transition-colors duration-300"
    >
      <h1 className="text-3xl font-bold text-black dark:text-white mt-4 transition-colors duration-300">
        <span className="inline-block animate-pulse">💼</span> Experience{" "}
        <span className="inline-block animate-bounce">📈</span>
      </h1>

      <br />

      {experiences.map((exp, index) => (
        <React.Fragment key={index}>
          <div className="relative flex flex-col md:flex-row md:justify-center text-center md:text-left mt-4 md:gap-8 px-8 mx-auto">

            {exp.position === "right" && (
              <div className="hidden w-120 md:flex md:justify-end">
                <h3 className="py-5 ">{exp.date}</h3>
              </div>
            )}

            {exp.position === "left" && (
              <div className="md:w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                <div className="md:text-left text-center p-6 rounded-lg bg-white dark:bg-gray-900 backdrop-blur-md shadow-lg">
                  <h2 className="font-semibold">{exp.title}</h2>

                  <h3 className="font-semibold">
                    {exp.company}
                  </h3>

                  <h3 className="md:hidden font-semibold">
                    {exp.date}
                  </h3>

                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  )}

                  {exp.list && (
                    <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside text-left">
                      {exp.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            <div className="hidden rounded-full w-16 h-16 md:flex items-center justify-center shrink-0 bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] p-[2px]">
              <div className="bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center">
                <img
                  src="assets/icon/folder.svg"
                  alt="folder"
                  className="w-8"
                />
              </div>
            </div>

            {exp.position === "left" && (
              <div className="hidden md:flex w-120 md:text-left text-center">
                <h3 className="py-5">{exp.date}</h3>
              </div>
            )}

            {exp.position === "right" && (
              <div className="md:w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
                <div className="md:text-left text-center p-6 rounded-lg bg-white dark:bg-gray-900 backdrop-blur-md shadow-lg">
                  <h2 className="font-semibold">{exp.title}</h2>

                  <h3 className="font-semibold">
                    {exp.company}
                  </h3>

                  <h3 className="md:hidden font-semibold">
                    {exp.date}
                  </h3>

                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  )}

                  {exp.list && (
                    <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside text-left">
                      {exp.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          <br />
        </React.Fragment>
      ))}

      <div className="h-32" />
    </section>
  );
};

export default Experience;