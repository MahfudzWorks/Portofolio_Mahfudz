import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const googleTextColors = [
  "from-[#4285F4] via-[#EA4335] to-[#FBBC04]",
  "from-[#EA4335] via-[#FBBC04] to-[#34A853]",
  "from-[#FBBC04] via-[#34A853] to-[#4285F4]",
  "from-[#34A853] via-[#4285F4] to-[#EA4335]",
];

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedMessages, setSubmittedMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(submittedMessages));
  }, [submittedMessages]);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "6282140363716";
    const randomColor = googleTextColors[Math.floor(Math.random() * googleTextColors.length)];

    const newMessage = {
      id: Date.now(),
      email,
      message,
      color: randomColor,
    };

    setSubmittedMessages((prev) => [...prev, newMessage].slice(-5));

    const text = `Halo, ini pesan dari portfolio!\n\nEmail: ${email}\nPesan: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setEmail("");
    setMessage("");
  };

  const removeMessage = (id) => {
    setSubmittedMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-16 scroll-mt-[90px] text-black dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Contact Me
        </h2>
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
          className="h-[3px] w-16 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] rounded-full mt-3" 
        />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 px-4 py-1 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-900/50 mb-4 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
        Hubungi Saya
      </div>

      <p className="text-center max-w-3xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
        Jangan ragu untuk menghubungi saya jika ada kebutuhan kerja sama, pertanyaan, atau sekadar menyapa. Pesan akan langsung terkirim ke WhatsApp.
      </p>

      <div className="text-center max-w-3xl w-full mt-4 px-4 sm:px-0">
        <div className="group relative mt-10 w-full max-w-xl mx-auto rounded-3xl p-[2px] overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-gray-950/40">
          <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)] opacity-30 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:animate-[spin_6s_linear_infinite] group-focus-within:animate-[spin_6s_linear_infinite] transition-all duration-500 rounded-3xl z-0" />

          <form
            onSubmit={handleWhatsApp}
            className="relative flex flex-col gap-5 w-full bg-white dark:bg-gray-900 rounded-[22px] p-6 sm:p-8 z-10 transition-colors duration-300 text-left"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase pl-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-black dark:text-white outline-none focus:border-[#4285F4] dark:focus:border-[#4285F4] focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase pl-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-black dark:text-white outline-none focus:border-[#34A853] dark:focus:border-[#34A853] focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 resize-none text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group/btn relative mt-2 w-full p-[1.5px] rounded-xl overflow-hidden inline-block active:scale-[0.98] transition-transform duration-200"
            >
              <div className="absolute inset-0 bg-[conic-gradient(#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)]" />
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
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {submittedMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
              layout
              className="pointer-events-auto relative p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-1 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${msg.color}`} />
              
              <div className="flex justify-between items-start mt-1">
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 truncate max-w-[85%]">
                  {msg.email}
                </span>
                <button 
                  onClick={() => removeMessage(msg.id)}
                  className="text-gray-400 hover:text-gray-650 dark:hover:text-white text-xs p-0.5 transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-words">
                ✨ {msg.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
    </section>
  );
};

export default Contact;