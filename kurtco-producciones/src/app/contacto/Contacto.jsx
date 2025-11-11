import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="w-full bg-black text-[#f4f4f4] py-20">
      <div className="container mx-auto px-8 lg:px-0 flex flex-col items-center text-center mt-6">
        
        <h2 className="text-5xl font-black mb-4 tracking-tight">CONTACTO</h2>
        <div className="w-24 h-1 bg-red-600 mb-10"></div>
        
        <p className="text-2xl md:text-3xl font-semibold text-[#f4f4f4] mb-12 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-red-600 after:mx-auto after:mt-3">
          Hablemos de tu proyecto
        </p>

        <div className="space-y-6 text-lg md:text-xl">
          <p>📞 095 414 520</p>
          <p>📧 info@productora.com</p>
          <p>📷 {" "}
            <a
            href='https://www.instagram.com/kurtco.pro/'
            target='blank'
            rel='noopener noreferrer'
            className='hover:underline'
            >
            @kurtco.pro
            </a>
          </p>
        </div>

        <a
          href="https://wa.me/95414520"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-block bg-red-600 text-[#f4f4f4] font-bold text-lg px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer"
        >
          ESCRIBINOS POR WHATSAPP
        </a>

      </div>
    </section>
  );
};

export default ContactSection;
