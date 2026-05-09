import React, { useState } from "react";

const Experience = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const experiences = [
    {
      title: "Software Developer",
      company: "CV. Fintechnology Consultant Indonesian",
      date: "08/2024 - 12/2024",
      description:
        "Bertanggung jawab dalam pengembangan sistem digital, termasuk pembuatan website ecommerce menggunakan framework Laravel, mulai dari proses frontend, backend, hingga testing.",
      position: "left",

      buttons: [
        {
          text: "View Project",
          images: [
            "assets/project/project1.png",
            "assets/project/project2.png",
          ],
        },

        {
          text: "View Certificate",
          images: [],
        },

        {
          text: "View Documentation",
          images: [
            "assets/documentation/doc1.jpg",
            "assets/documentation/doc2.jpg",
          ],
        },
      ],
    },

    {
      title: "Sekretaris dan Bendahara Organisasi",
      company: "Karang Taruna Balongmojo",
      date: "08/2021 - 08/2026",
      description:
        "Bertugas mencatat pemasukan dan pengeluaran keuangan organisasi, menyusun surat undangan, proposal sponsor, serta mengelola administrasi untuk mendukung kelancaran kegiatan Kartar.",
      position: "right",

      buttons: [
        {
          text: "View Gallery",
          images: [
            "assets/gallery/kartar1.jpg",
            "assets/gallery/kartar2.jpg",
          ],
        },

        {
          text: "View Documentation",
          images: [],
        },
      ],
    },

    {
      title: "Owner",
      company: "Jasa Joki Tugas Vyyy",
      date: "01/2022 - 08/2025",
      description:
        "Mendirikan dan mengelola layanan jasa pembuatan tugas akademik dan non-akademik, meliputi penulisan makalah, pengolahan data Excel, desain presentasi PowerPoint, serta pembuatan website dan desain grafis.",
      position: "left",

      buttons: [
        {
          text: "View Project",
          images: [
            "assets/project/vyyy1.png",
            "assets/project/vyyy2.png",
          ],
        },

        {
          text: "View Gallery",
          images: [],
        },
      ],
    },

    {
      title: "Guru Ekstrakurikuler",
      company: "SMP Negeri 28 Gresik",
      date: "08/2023 - 08/2025",
      description:
        "Mengajar ekstrakurikuler pencak silat sebagai upaya pengembangan minat dan bakat siswa.",
      position: "right",

      buttons: [
        {
          text: "View Certificate",
          images: [
            {
              src: "assets/Certificate/ESmpN28Gresik/SPelatihanPelatihPSNU.jpeg",
              title: "Sertifikat Pelatihan Pelatih Pencak Silat Prestasi Pagar Nusa Gresik 2023",
              desc: "Sertifikat peserta Pelatihan Pelatih Pencak Silat Prestasi Pagar Nusa Gresik Tahun 2023.",
            }
          ],
        },

        {
          text: "View Gallery",
          images: [
            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi4.jpg",
              title: "Juara O2SN Pencak Silat 2024",
              desc: "Prestasi siswa dalam ajang Olimpiade Olahraga Siswa Nasional (O2SN) 2024.",
            },
            
            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi1.jpg",
              title: "Juara 1 Pencak Silat Grisse 2024",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi2.jpg",
              title: "Juara 2 Pencak Silat Grisse 2024",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi3.jpg",
              title: "Juara 3 Pencak Silat Grisse 2024",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024.",
            },

            
            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi5.jpeg",
              title: "Juara 2 Pencak Silat Grisse 2025",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi6.jpeg",
              title: "Juara 3 Pencak Silat Grisse 2025",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi7.jpeg",
              title: "Juara 3 Pencak Silat Grisse 2025",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi8.jpeg",
              title: "Juara 3 Pencak Silat Grisse 2025",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025.",
            },

            {
              src: "assets/Gallery/ESmpN28Gresik/prestasi9.jpeg",
              title: "Juara 3 Pencak Silat Grisse 2025",
              desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025.",
            },
          ],
        },
      ],
    },

    {
      title: "Operator – Stationery Pad",
      company: "PT Pabrik Kertas Tjiwi Kimia Tbk (Internship Kemnaker)",
      date: "11/2025 - 05/2026",
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

      buttons: [
        {
          text: "View Certificate",
          images: [],
        },

        {
          text: "View Gallery",
          images: [
            {
              src: "assets/Gallery/ETjiwiKimia/pembukaan_magang.jpeg",
              title: "Pembukaan Program Magang",
              desc: "Kegiatan pembukaan program magang sebagai awal pelaksanaan kegiatan internship di perusahaan.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/jamuan_magang.jpeg",
              title: "Jamuan Peserta Magang",
              desc: "Kegiatan penyambutan dan jamuan peserta magang oleh pihak perusahaan.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/pengenalan_k3.jpeg",
              title: "Pengenalan K3 dan 6S",
              desc: "Pengenalan budaya keselamatan kerja (K3) serta penerapan prinsip 6S di area operasional produksi.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/mentor_stationery_pad.jpeg",
              title: "Pengenalan Mentor Stationery Pad",
              desc: "Kegiatan pengenalan mentor dan pembimbing kerja pada bagian Stationery Pad.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/kepala_bagian_stationery_pad.jpeg",
              title: "Pengenalan Kepala Bagian Stationery Pad",
              desc: "Pengenalan kepala bagian Stationery Pad serta penjelasan alur kerja divisi.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/pembelajaran_lapangan1.jpeg",
              title: "Pembelajaran Lapangan Material Mesin",
              desc: "Kegiatan pembelajaran lapangan mengenai size part dan material pada mesin produksi.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/pembelajaran_lapangan2.jpeg",
              title: "Pembelajaran Lapangan Mesin Produksi",
              desc: "Kegiatan pembelajaran langsung mengenai operasional dan proses kerja mesin produksi.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/kebersamaan_ematerial.jpeg",
              title: "Kebersamaan Karyawan E-Material",
              desc: "Dokumentasi kebersamaan bersama karyawan pada bagian E-Material selama kegiatan magang.",
            },

            {
              src: "assets/Gallery/ETjiwiKimia/halalbihalal_karyawan.jpeg",
              title: "Halal Bihalal Bersama Karyawan",
              desc: "Kegiatan kebersamaan dan silaturahmi bersama karyawan dalam rangka halal bihalal perusahaan.",
            },
          ],
        },

        {
          text: "View Documentation",
          images: [
            {
              src: "assets/Documentation/ETjiwiKimia/undwind.jpg",
              title: "Proses Undwind",
              desc: "Proses pemasangan dan pengaturan base paper roll sebelum masuk ke unit printing pada mesin Legal Pad.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/paperguide.jpg",
              title: "Paper Guide",
              desc: "Penggunaan paper guide untuk menjaga kestabilan dan posisi kertas sebelum proses printing.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/printing.jpg",
              title: "Unit Printing",
              desc: "Proses pencetakan garis buku (rulling) pada kertas menggunakan unit printing mesin Legal Pad.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/perforasi.jpg",
              title: "Proses Perforasi",
              desc: "Proses pelubangan kertas menggunakan perforasi untuk mempermudah penyobekan kertas.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/crosscutter.jpg",
              title: "Cross Cutter",
              desc: "Proses pemotongan kertas menjadi ukuran plano atau strip sesuai kebutuhan produksi.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/overlapping.jpg",
              title: "Overlapping Process",
              desc: "Proses transfer hasil potongan kertas menuju collecting dengan jarak overlap yang stabil.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/collecting.jpg",
              title: "Collecting",
              desc: "Proses penghitungan dan pengaturan jumlah inner sheet sesuai format produksi buku.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/feeder.jpg",
              title: "Feeder Front & Back",
              desc: "Proses pengeluaran cover secara otomatis menuju meja transport produksi.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/stripcutting.jpg",
              title: "Strip Cutting",
              desc: "Proses pemotongan large sheet menjadi ukuran strip sesuai SPK produksi.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/stitching.jpg",
              title: "Stitching Process",
              desc: "Proses penjilidan menggunakan kawat untuk menyatukan lembaran menjadi buku Legal Pad.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/backtape.jpg",
              title: "Back Tape Process",
              desc: "Proses penutupan bagian atas buku menggunakan tape untuk memperkuat hasil stitching.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/etiket.jpeg",
              title: "Pemeriksaan Etiket Produksi",
              desc: "Pengecekan etiket produk untuk memastikan informasi produksi sesuai standar dan kebutuhan produksi.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/spk_qc.jpeg",
              title: "SPK Penolakan QC",
              desc: "Dokumentasi Surat Perintah Kerja (SPK) penolakan quality control terhadap produk yang tidak sesuai standar.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/qc_activity.jpeg",
              title: "Kegiatan Quality Control",
              desc: "Aktivitas pengecekan kualitas produk selama proses produksi untuk menjaga mutu hasil produksi.",
            },

            {
              src: "assets/Documentation/ETjiwiKimia/report_daily.jpeg",
              title: "Pembuatan Laporan Harian Magang",
              desc: "Kegiatan pembuatan laporan harian setelah pelaksanaan magang sebagai dokumentasi aktivitas dan hasil pekerjaan setiap hari.",
            },
          ],
        },
      ],
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

                  {exp.buttons && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {exp.buttons.map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (btn.images.length > 0) {
                              setSelectedImages(btn.images);
                            }
                          }}
                          className={`
                            px-4 py-2 rounded-lg text-sm font-semibold
                            transition-all duration-300
                            ${
                              btn.images.length > 0
                                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:scale-105"
                                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                            }
                          `}
                        >
                          {btn.images.length > 0
                            ? btn.text
                            : `${btn.text} (Coming Soon)`}
                        </button>
                      ))}
                    </div>
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

                  {exp.buttons && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {exp.buttons.map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (btn.images.length > 0) {
                              setSelectedImages(btn.images);
                            }
                          }}
                          className={`
                            px-4 py-2 rounded-lg text-sm font-semibold
                            transition-all duration-300
                            ${
                              btn.images.length > 0
                                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:scale-105"
                                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                            }
                          `}
                        >
                          {btn.images.length > 0
                            ? btn.text
                            : `${btn.text} (Coming Soon)`}
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>

          <br />
        </React.Fragment>
      ))}

      {selectedImages && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-md
            flex justify-center items-center
            p-4
          "
        >
          <div
            className="
              bg-white dark:bg-gray-900
              rounded-3xl
              max-w-4xl w-full
              p-6
              relative
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedImages(null)}
              className="
                absolute top-4 right-4
                w-10 h-10
                rounded-full
                bg-gray-200 dark:bg-gray-800
                hover:scale-110
                transition-all
                text-lg font-bold
                text-gray-700 dark:text-white
              "
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Experience Evidence
            </h2>

            {selectedImages.length === 1 ? (
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-gradient-to-br
                  from-gray-900
                  to-black
                  shadow-2xl
                "
              >
                <div className="overflow-hidden p-4">
                  <img
                    src={selectedImages[0].src}
                    alt={selectedImages[0].title}
                    className="
                      w-full
                      max-h-[46vh]
                      object-contain
                      transition-all duration-700
                      hover:scale-105
                    "
                  />
                </div>

                <div className="p-6 text-white">
                  <span
                    className="
                      inline-block
                      px-4 py-1
                      rounded-full
                      text-sm
                      bg-green-500/20
                      border border-green-400
                      mb-4
                    "
                  >
                    📜 Certificate
                  </span>

                  <h3 className="text-2xl font-bold">
                    {selectedImages[0].title}
                  </h3>

                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {selectedImages[0].desc}
                  </p>
                </div>
              </div>
            ) : (
  
              <div
                className="
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-5
                  max-h-[70vh]
                  overflow-y-auto
                  pr-2
                "
              >
                {selectedImages.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      bg-white dark:bg-gray-800
                      shadow-lg
                      hover:shadow-2xl
                      transition-all duration-500
                      border border-gray-200 dark:border-gray-700
                    "
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="
                          w-full
                          h-52
                          object-cover
                          transition-all duration-500 ease-in-out
                          group-hover:scale-110
                          group-hover:brightness-110
                        "
                      />
                    </div>

                    <div className="p-4 text-left">
                      <h3 className="font-semibold text-lg dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {item.desc}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                        <span>📸 Experience Documentation</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="h-32" />
    </section>
  );
};

export default Experience;