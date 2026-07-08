import { useState, useEffect } from "react";

const colors = [
  "from-pink-500 to-red-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-purple-500 to-indigo-500",
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
    localStorage.setItem(
      "messages",
      JSON.stringify(submittedMessages)
    );
  }, [submittedMessages]);

  useEffect(() => {
    if (submittedMessages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        (prev + 1) % submittedMessages.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [submittedMessages]);

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "6282140363716";

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    const newMessage = {
      email,
      message,
      color: randomColor,
    };

    setSubmittedMessages((prev) =>
      [...prev, newMessage].slice(-8)
    );

    const text = `Halo, ini pesan dari portfolio!\n\nEmail: ${email}\nPesan: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="
        relative flex flex-col justify-center items-center
        px-4 sm:px-6 lg:px-12
        scroll-mt-16
        text-black dark:text-white
        transition-colors duration-300
        overflow-hidden
      "
    >
      <h1 className="text-3xl font-bold mt-6 text-center">
        <span className="inline-block animate-bounce">📩</span>
        {" "}Contact Me{" "}
        <span className="inline-block animate-pulse">🤝</span>
      </h1>

      <div className="text-center max-w-3xl w-full mt-4 px-4 sm:px-0">
        <p className="text-gray-600 dark:text-gray-300 px-2 sm:px-4">
          Terima kasih sudah mengunjungi portfolio saya.
          Jika Anda ingin bekerja sama atau sekadar menyapa,
          silakan kirim pesan di bawah ini 😊
        </p>

        <form
          onSubmit={handleWhatsApp}
          className="
            justify-center items-center
            mt-8 flex flex-col gap-4
            w-full max-w-xl mx-auto
          "
        >
          <div className="w-full p-[2px] rounded-xl bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl outline-none
                bg-white dark:bg-gray-900
                text-black dark:text-white
              "
              required
            />
          </div>

          <div className="w-full p-[2px] rounded-xl bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]">
            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl outline-none
                bg-white dark:bg-gray-900
                text-black dark:text-white
                resize-none
              "
              required
            ></textarea>
          </div>

          <div className="w-full sm:w-auto p-[2px] rounded-xl bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]">
            <button
              type="submit"
              className="
                flex items-center justify-center gap-2 sm:gap-3
                bg-white dark:bg-gray-900
                text-green-600 dark:text-green-400
                font-semibold
                px-5 py-2 sm:px-6 sm:py-3
                rounded-xl
                transition-all duration-300 ease-in-out
                hover:shadow-xl
                active:scale-[0.98]
                text-sm sm:text-base
                w-full
              "
            >
              Send via WhatsApp

              <img
                src="assets/icon/WhatsappLogo.svg"
                alt="WA"
                className="w-6 sm:w-8"
              />
            </button>
          </div>
        </form>

        {submittedMessages.length > 0 && (
          <div className="mt-12 h-[120px] flex items-center justify-center overflow-hidden px-4">

            <div
              key={activeIndex}
              className={`
                animate-messagePop
                text-center
                text-lg sm:text-2xl
                font-bold
                bg-gradient-to-r ${submittedMessages[activeIndex].color}
                bg-clip-text text-transparent
              `}
            >
              ✨ {submittedMessages[activeIndex].message}
            </div>

          </div>
        )}
      </div>

      <style>{`
        @keyframes messagePop {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(20px);
          }

          15% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }

          30% {
            transform: scale(1);
          }

          85% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
        }

        .animate-messagePop {
          animation: messagePop 2.5s ease-in-out;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>

      <div className="h-4 sm:h-6" />
    </section>
  );
};

export default Contact;