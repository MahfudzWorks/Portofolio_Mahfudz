import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "6282140363716";

    const text = `Halo, ini pesan dari portfolio!\n\nEmail: ${email}\nPesan: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 scroll-mt-16"
    >
      <h1 className="text-3xl font-bold text-black mt-6 text-center">
        <span className="inline-block animate-bounce">📩</span> Contact Me{" "}
        <span className="inline-block animate-ping">🤝</span>
      </h1>

      <div className="text-center max-w-3xl mt-4">
        <p className="text-gray-600 px-2 sm:px-4">
          Terima kasih sudah mengunjungi portfolio saya. 
          Jika Anda ingin bekerja sama atau sekadar menyapa, silakan kirim pesan di bawah ini 😊
        </p>

        <form
          onSubmit={handleWhatsApp}
          className="justify-center items-center mt-8 flex flex-col gap-4 w-full max-w-xl mx-auto"
        >
          <div className="w-full p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg outline-none bg-white shadow-lg text-sm sm:text-base"
              required
            />
          </div>

          <div className="w-full p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg outline-none bg-white shadow-lg text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <div className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-lg">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-green-600 
               font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-lg 
               transition-all duration-300 ease-in-out
               hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 
               hover:shadow-md active:scale-[0.98] text-sm sm:text-base"
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
      </div>

      <div className="h-24 sm:h-32" />
    </section>
  )
}

export default Contact
