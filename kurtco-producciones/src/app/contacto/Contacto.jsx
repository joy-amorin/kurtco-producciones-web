export default function ContactSection() {
  return (
    <section id="contacto" className="relative w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-3 px-6">

        <h2  className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6"
           >
          Contacto
        </h2>

        <p className="text-base md:text-lg text-[#f4f4f4]">
            📱 095 414 520 &nbsp; | &nbsp; 📧 info@kurtco.com &nbsp; | &nbsp;
            📷{" "}
            <a
              href="https://www.instagram.com/kurtco.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @kurtco
            </a>
        </p>

        <a
        href="https://wa.me/59895414520"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block px-5 py-2 rounded-xl bg-red-600 text-[#f4f4f4] font-semibold hover:bg-[#ff003c] transition"
      >
        ESCRIBINOS POR WHATSAPP
      </a>
      </div>
    </section>
  );
}
