import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const experiences = [
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
          text: "View Certificate PT Pabrik Kertas Tjiwi Kimia Tbk",
          images: [
            {
              src: "assets/Certificate/ETjiwiKimia/SMagangTjiwiKimia.jpg",
              title: "Sertifikat Magang PT Pabrik Kertas Tjiwi Kimia Tbk",
              desc: "Sertifikat program magang di PT Pabrik Kertas Tjiwi Kimia Tbk pada divisi Stationery-PAD sebagai bentuk pengalaman kerja dan pengembangan kemampuan di bidang produksi, administrasi, serta quality control.",
            }
          ],
        },
        {
          text: "View Certificate Kemnaker (MagangHub)",
          images: [
            {
              src: "assets/Certificate/ETjiwiKimia/SMagangKemnakerRI.jpg",
              title: "Sertifikat Kemnaker (MagangHub)",
              desc: "Program Pemagangan Lulusan Perguruan Tinggi yang diselenggarakan oleh Kementerian Ketenagakerjaan Republik Indonesia melalui MagangHub di PT Pabrik Kertas Tjiwi Kimia Tbk selama 6 bulan pada posisi Operator Stationary Pad. Memahami proses operasional produksi, penerapan SOP kerja, serta pengalaman kerja di lingkungan industri manufaktur.",
            }
          ],
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
              src: "assets/Documentation/ETjiwiKimia/mesin-perhitungan-etiket.jpeg",
              title: "Mesin Perhitungan Etiket",
              desc: "Penggunaan mesin perhitungan etiket untuk membantu proses penghitungan jumlah etiket produksi agar lebih cepat, akurat, dan efisien.",
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
    {
      title: "Software Developer",
      company: "CV. FI Technology Consultant Indonesian",
      date: "08/2024 - 12/2024",
      list: [
        "Mengembangkan sistem berbasis website menggunakan framework Laravel (frontend dan backend)",
        "Memahami alur pengembangan perangkat lunak mulai dari perancangan, implementasi, hingga pengujian sistem",
        "Berkontribusi dalam pembuatan website e-commerce sesuai kebutuhan pengguna",
        "Melakukan debugging dan pengujian untuk memastikan sistem berjalan dengan optimal",
        "Berkolaborasi dalam tim untuk menyelesaikan pengembangan sistem sesuai target",
        "Meningkatkan pemahaman dalam pengembangan web, pengelolaan database, dan logika pemrograman",
      ],
      position: "right",
      buttons: [
        { text: "View Project", images: [] },
        {
          text: "View Certificate",
          images: [
            {
              src: "assets/Certificate/EFITech/SMagangFiTechnology.png",
              title: "Sertifikat Magang FI Technology",
              desc: "Sertifikat program magang di FI Technology sebagai bentuk pengalaman kerja dan pengembangan kemampuan di bidang teknologi, pengembangan web, serta implementasi sistem berbasis digital.",
            }
          ],
        },
      ],
    },
    {
      title: "Owner",
      company: "Jasa Joki Tugas Vyyy",
      date: "01/2022 - 08/2025",
      list: [
        "Mengelola berbagai tugas administrasi seperti makalah, KTI, presentasi, entri, dan pengolahan data secara rapi dan terstruktur",
        "Membuat serta mengedit dokumen kreatif seperti undangan, buku anak-anak, dan materi visual menggunakan Canva",
        "Menangani komunikasi dengan klien mulai dari penerimaan tugas, revisi, hingga penyelesaian tepat waktu",
        "Mendukung pembuatan dan pengembangan website menggunakan berbagai teknologi sesuai kebutuhan",
        "Melakukan pengecekan dan perbaikan dokumen (proofreading) untuk memastikan kualitas hasil kerja",
      ],
      position: "left",
      buttons: [
        { text: "View Project", images: [] },
        { text: "View Gallery", images: [] },
      ],
    },
    {
      title: "Sekretaris dan Bendahara Organisasi",
      company: "Karang Taruna Balongmojo",
      date: "08/2021 - 08/2026",
      list: [
        "Berperan sebagai pengelola administrasi dan penggerak kegiatan organisasi",
        "Menyusun surat undangan, proposal kegiatan, serta laporan administrasi",
        "Mengelola dan mencatat pemasukan serta pengeluaran keuangan organisasi",
        "Berkoordinasi dengan anggota dalam menjalankan kegiatan sosial masyarakat",
        "Menunjukkan kemampuan manajemen organisasi, komunikasi, dan tanggung jawab dalam menjalankan program kerja",
      ],
      position: "right",
      buttons: [
        {
          text: "View Gallery",
          images: [
            { src: "assets/Gallery/EKartarDSNBM/kartar1.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Foto bersama salah satu anggota Karang Taruna yang akan menampilkan pentas seni jaranan dalam acara peringatan HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar2.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Foto bersama seluruh anggota Karang Taruna setelah sukses melaksanakan acara peringatan HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar3.jpeg", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Foto kebersamaan anggota Karang Taruna generasi baru dan generasi lama dalam acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar4.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan ibu-ibu PKK dalam rangka memeriahkan acara peringatan HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar5.jpeg", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan adik-adik laki-laki Dusun Balongmojo yang membawakan tarian modern pada acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar6.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan adik-adik perempuan Dusun Balongmojo yang membawakan tarian modern dalam acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar7.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan pembacaan puisi oleh adik-adik dalam rangka memeriahkan acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar8.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan tarian oleh remaja perempuan dalam acara peringatan HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar9.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan tari hiburan bertema lucu oleh remaja laki-laki untuk memeriahkan acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar10.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan kesenian pencak silat jurus tunggal oleh remaja laki-laki dalam acara HUT RI 2025." },
            { src: "assets/Gallery/EKartarDSNBM/kartar11.webp", title: "Acara Karang Taruna dalam Rangka HUT RI 2025", desc: "Penampilan tari hiburan 'kewer-kewer' oleh remaja laki-laki dalam rangka memeriahkan acara HUT RI 2025." },
          ],
        }
      ],
    },
    {
      title: "Sekretaris & Guru Ekstrakurikuler",
      company: "Pagar Nusa (PAC Benjeng & Ranting Balongmojo)",
      date: "05/2023 - Sekarang",
      description: "Berperan sebagai sekretaris organisasi sekaligus guru ekstrakurikuler pencak silat dalam mendukung administrasi, pelaksanaan kegiatan, serta pengembangan minat dan bakat anggota.",
      position: "left",
      list: [
        "Mengelola administrasi organisasi seperti surat-menyurat, proposal, dan dokumentasi kegiatan",
        "Menyusun laporan kegiatan dan mendukung perencanaan program kerja organisasi",
        "Berkoordinasi dengan pengurus dan anggota dalam pelaksanaan kegiatan",
        "Mengajar ekstrakurikuler pencak silat untuk pengembangan kemampuan dan disiplin anggota",
        "Dipercaya menjadi Ketua kegiatan Ujian Kenaikan Tingkat (UKT)",
        "Mengembangkan kemampuan kepemimpinan, komunikasi, dan manajemen organisasi",
      ],
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
            { src: "assets/Gallery/ESmpN28Gresik/prestasi4.jpg", title: "Juara O2SN Pencak Silat 2024", desc: "Prestasi siswa dalam ajang Olimpiade Olahraga Siswa Nasional (O2SN) 2024." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi1.jpg", title: "Juara 1 Pencak Silat Grisse 2024", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi2.jpg", title: "Juara 2 Pencak Silat Grisse 2024", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi3.jpg", title: "Juara 3 Pencak Silat Grisse 2024", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2024." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi5.jpeg", title: "Juara 2 Pencak Silat Grisse 2025", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi6.jpeg", title: "Juara 3 Pencak Silat Grisse 2025", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi7.jpeg", title: "Juara 3 Pencak Silat Grisse 2025", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi8.jpeg", title: "Juara 3 Pencak Silat Grisse 2025", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025." },
            { src: "assets/Gallery/ESmpN28Gresik/prestasi9.jpeg", title: "Juara 3 Pencak Silat Grisse 2025", desc: "Prestasi siswa dalam ajang lomba pencak silat Grisse 2025." },
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center scroll-mt-[90px] text-black dark:text-white transition-colors duration-300"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Experience
        </h2>
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full mt-3" 
        />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 px-4 py-1 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-900/50 mb-4 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping"></span>
        Riwayat Kerja & Kegiatan
      </div>

      <p className="text-center max-w-3xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
        Berikut adalah rangkuman pengalaman kerja, magang, serta kegiatan organisasi yang telah saya jalani. Mencakup keterampilan teknis, manajemen, dan tanggung jawab yang diemban.
      </p>

      {experiences.map((exp, index) => (
        <React.Fragment key={index}>
          <div className="relative flex flex-col md:flex-row md:justify-center text-center md:text-left mt-4 md:gap-8 px-8 mx-auto">
            {exp.position === "right" && (
              <div className="hidden w-120 md:flex md:justify-end">
                <h3 className="py-5 text-gray-600 dark:text-gray-300">{exp.date}</h3>
              </div>
            )}

            {exp.position === "left" && (
              <div className="group relative md:w-120 p-[2px] rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-950/50">
                <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-20 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-lg z-0" />
                <div className="relative z-10 md:text-left text-center p-6 rounded-lg bg-white dark:bg-gray-900 backdrop-blur-md h-full">
                  <h2 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h2>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mt-1">{exp.company}</h3>
                  <h3 className="md:hidden text-sm text-gray-500 dark:text-gray-400 mt-2">{exp.date}</h3>
                  {exp.description && <p className="text-gray-600 dark:text-gray-300 mt-3">{exp.description}</p>}
                  {exp.list && (
                    <ul className="text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside text-left space-y-1">
                      {exp.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {exp.buttons && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {exp.buttons.map((btn, i) => (
                        <div key={i} className="group/btn relative p-[1.5px] rounded-lg overflow-hidden">
                          {btn.images.length > 0 && (
                            <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-70 group-hover/btn:opacity-100 group-hover/btn:animate-[spin_6s_linear_infinite] transition-opacity duration-300" />
                          )}
                          <button
                            onClick={() => btn.images.length > 0 && setSelectedImages(btn.images)}
                            className={`
                              relative z-10 px-4 py-2 rounded-lg text-sm font-semibold w-full
                              transition-all duration-300
                              ${
                                btn.images.length > 0
                                  ? "bg-white dark:bg-gray-800 text-gray-700 dark:text-white group-hover/btn:bg-gray-100 dark:group-hover/btn:bg-gray-700 hover:scale-[1.02]"
                                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                              }
                            `}
                          >
                            {btn.images.length > 0 ? btn.text : `${btn.text} (Coming Soon)`}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="hidden rounded-full w-16 h-16 md:flex items-center justify-center shrink-0 relative p-[2px] overflow-hidden group">
              <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-70 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-full" />
              <div className="relative z-10 bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center">
                <img src="assets/icon/folder.svg" alt="folder" className="w-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {exp.position === "left" && (
              <div className="hidden md:flex w-120 md:text-left text-center">
                <h3 className="py-5 text-gray-600 dark:text-gray-300">{exp.date}</h3>
              </div>
            )}

            {exp.position === "right" && (
              <div className="group relative md:w-120 p-[2px] rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-950/50">
                <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-20 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-lg z-0" />
                <div className="relative z-10 md:text-left text-center p-6 rounded-lg bg-white dark:bg-gray-900 backdrop-blur-md h-full">
                  <h2 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h2>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mt-1">{exp.company}</h3>
                  <h3 className="md:hidden text-sm text-gray-500 dark:text-gray-400 mt-2">{exp.date}</h3>
                  {exp.description && <p className="text-gray-600 dark:text-gray-300 mt-3">{exp.description}</p>}
                  {exp.list && (
                    <ul className="text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside text-left space-y-1">
                      {exp.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {exp.buttons && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {exp.buttons.map((btn, i) => (
                        <div key={i} className="group/btn relative p-[1.5px] rounded-lg overflow-hidden">
                          {btn.images.length > 0 && (
                            <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-70 group-hover/btn:opacity-100 group-hover/btn:animate-[spin_6s_linear_infinite] transition-opacity duration-300" />
                          )}
                          <button
                            onClick={() => btn.images.length > 0 && setSelectedImages(btn.images)}
                            className={`
                              relative z-10 px-4 py-2 rounded-lg text-sm font-semibold w-full
                              transition-all duration-300
                              ${
                                btn.images.length > 0
                                  ? "bg-white dark:bg-gray-800 text-gray-700 dark:text-white group-hover/btn:bg-gray-100 dark:group-hover/btn:bg-gray-700 hover:scale-[1.02]"
                                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                              }
                            `}
                          >
                            {btn.images.length > 0 ? btn.text : `${btn.text} (Coming Soon)`}
                          </button>
                        </div>
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center p-4 animate-fadeIn">
          <div className="relative p-[2px] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl animate-zoomIn">
            <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] animate-[spin_8s_linear_infinite] rounded-3xl" />
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-[22px] p-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedImages(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all duration-300 text-lg font-bold text-gray-700 dark:text-white flex items-center justify-center"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">📚 Experience</h2>
              {selectedImages.length === 1 ? (
                <div className="relative p-[2px] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-60" />
                  <div className="relative z-10 bg-white dark:bg-gray-800 rounded-[22px] overflow-hidden">
                    <div className="p-4">
                      <img src={selectedImages[0].src} alt={selectedImages[0].title} className="w-full max-h-[46vh] object-contain transition-all duration-700 hover:scale-105" />
                    </div>
                    <div className="p-6 text-gray-800 dark:text-white">
                      <span className="inline-block px-4 py-1 rounded-full text-sm bg-green-500/20 border border-green-400 mb-4">📜 Certificate</span>
                      <h3 className="text-2xl font-bold">{selectedImages[0].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">{selectedImages[0].desc}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[70vh] overflow-y-auto pr-2">
                  {selectedImages.map((item, index) => (
                    <div key={index} className="group relative p-[2px] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                      <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] opacity-20 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 rounded-2xl z-0" />
                      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-[14px] overflow-hidden">
                        <div className="overflow-hidden">
                          <img src={item.src} alt={item.title} className="w-full h-52 object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110" />
                        </div>
                        <div className="p-4 text-left">
                          <h3 className="font-semibold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                          <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">📸 Experience Documentation</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="h-32" />
    </section>
  );
};

export default Experience;