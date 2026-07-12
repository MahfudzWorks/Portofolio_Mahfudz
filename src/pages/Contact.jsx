import { useState, useEffect } from "react";

// Mengubah array warna awal menjadi 4 warna utama Google yang dinamis untuk efek teks bergantian
const googleTextColors = [
  "from-blue-500 via-red-500 to-yellow-500",
  "from-red-500 via-yellow-500 to-green-500",
  "from-yellow-500 via-green-500 to-blue-500",
  "from-green-500 via-blue-500 to-red-500",
];

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedMessages, setSubmittedMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(submittedMessages));
  }, [submittedMessages]);

  useEffect(() => {
    if (submittedMessages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % submittedMessages.length);
    }, 3000); // Diperpanjang sedikit ke 3 detik agar pengguna sempat membaca teks yang panjang

    return () => clearInterval(interval);
  }, [submittedMessages]);

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "6282140363716";

    // Memilih variasi gradasi warna Google secara acak untuk teks di bagian bawah
    const randomColor = googleTextColors[Math.floor(Math.random() * googleTextColors.length)];

    const newMessage = {
      email,
      message,
      color: randomColor,
    };

    setSubmittedMessages((prev) => [...prev, newMessage].slice(-8));

    const text = `Halo, ini pesan dari portfolio!\n\nEmail: ${email}\nPesan:${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-16 scroll-mt-16 text-black dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center flex items-center gap-3">
        <span className="inline-block animate-bounce">📩</span>
        Contact Me
        <span className="inline-block animate-pulse text-2xl">🤝</span>
      </h1>

      <div className="text-center max-w-3xl w-full mt-4 px-4 sm:px-0">
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Terima kasih sudah mengunjungi portfolio saya. Jika Anda ingin bekerja sama atau sekadar menyapa, silakan kirim pesan di bawah ini 😊
        </p>

        {/* Card Form Wrapper dengan Efek Modern */}
        <div className="group relative mt-10 w-full max-w-xl mx-auto rounded-3xl p-[2px] overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-gray-950/40">
          
          {/* Efek Bergerak 4 Warna Utama Google di Belakang Card (Aktif Penuh Saat Hover/Focus Form) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] after:absolute after:inset-0 after:bg-gradient-to-l after:from-[#34A853] after:via-[#4285F4] opacity-30 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:animate-[spin_6s_linear_infinite] group-focus-within:animate-[spin_6s_linear_infinite] transition-all duration-500 rounded-3xl z-0" />

          {/* Konten Utama Form (Tetap mempertahankan background asli bawaan web Anda) */}
          <form
            onSubmit={handleWhatsApp}
            className="relative flex flex-col gap-5 w-full bg-white dark:bg-gray-900 rounded-[22px] p-6 sm:p-8 z-10 transition-colors duration-300 text-left"
          >
            {/* Input Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase pl-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-800/30 text-black dark:text-white outline-none focus:border-[#4285F4] dark:focus:border-[#4285F4] focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 text-sm"
                required
              />
            </div>

            {/* Input Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase pl-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-800/30 text-black dark:text-white outline-none focus:border-[#34A853] dark:focus:border-[#34A853] focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 resize-none text-sm"
                required
              ></textarea>
            </div>

            {/* Tombol Kirim WhatsApp */}
            <button
              type="submit"
              className="group/btn relative mt-2 w-full p-[1.5px] rounded-xl overflow-hidden inline-block active:scale-[0.98] transition-transform duration-200"
            >
              {/* Border statis tombol warna Google */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] after:absolute after:inset-0 after:bg-gradient-to-l after:from-[#34A853] after:via-[#4285F4]" />
              
              <div className="relative flex items-center justify-center gap-3 bg-white dark:bg-gray-900 group-hover/btn:bg-gray-50 dark:group-hover/btn:bg-gray-850 text-gray-700 dark:text-gray-200 font-bold px-6 py-3.5 rounded-[10px] transition-all duration-300 shadow-sm">
                <span>Send via WhatsApp</span>
                <img
                  src="assets/icon/WhatsappLogo.svg"
                  alt="WA"
                  className="w-5 h-5 object-contain transform group-hover/btn:scale-110 transition-transform"
                />
              </div>
            </button>
          </form>
        </div>

        {/* Log Teks Pesan Masuk Bergantian */}
        {submittedMessages.length > 0 && (
          <div className="mt-14 h-[100px] flex items-center justify-center overflow-hidden px-4 relative">
            {/* Dekorasi Kutipan Halus */}
            <span className="absolute text-6xl text-gray-200/40 dark:text-gray-800/20 font-serif -top-2 left-1/4 select-none">“</span>
            
            <div
              key={activeIndex}
              className={`
                animate-messagePop
                text-center
                text-base sm:text-xl
                font-extrabold
                bg-gradient-to-r ${submittedMessages[activeIndex].color}
                bg-clip-text text-transparent
                max-w-xl mx-auto tracking-wide
              `}
            >
              ✨ {submittedMessages[activeIndex].message}
            </div>
            
            <span className="absolute text-6xl text-gray-200/40 dark:text-gray-800/20 font-serif bottom-0 right-1/4 select-none">”</span>
          </div>
        )}
      </div>

      {/* Style Animasi yang Diperhalus */}
      <style>{`
        @keyframes messagePop {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(15px);
            filter: blur(4px);
          }
          10% {
            opacity: 1;
            transform: scale(1.02) translateY(0);
            filter: blur(0);
          }
          15%, 85% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
          90% {
            opacity: 0;
            transform: scale(0.98) translateY(-10px);
            filter: blur(2px);
          }
          100% {
            opacity: 0;
            transform: scale(0.95) translateY(-15px);
          }
        }

        .animate-messagePop {
          animation: messagePop 3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>

      <div className="h-4 sm:h-6" />
    </section>
  );
};

export default Contact;