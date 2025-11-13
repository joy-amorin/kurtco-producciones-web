import Link from "next/link";

export default function Buickbanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src="/bandas-fotos/buick-8.jpeg"
            alt="Banda buick-8"
            className="w-full h-full object-cover"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(0,0,0,0.4),
                inset 0 0 30px rgba(255,0,0,0.2)
              `
            }}
          />
        </div>

        {/* Bio */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-black text-red-600 mb-6">Buick 8</h1>
          
          <p className="text-sm md:text-base mb-5 -mt-4">
            Formada en 2017 en Montevideo, Buick 8 lleva editados varios sencillos, dos sesiones y dos EP’s. 
            El grupo continúa recorriendo Montevideo y el interior del país con su potente propuesta en vivo.
          </p>
          <p className="text-sm md:text-base mb-5">
           Su trabajo discográfico y audiovisual incluye grabaciones en Lulú Records (Montevideo, 2017),
            Estudios ION (Buenos Aires, 2020), los EP’s Ecos de otro mañana (2021), Despertar del caos (2021),
             Cultura descartable (2022) y la sesión en vivo DINO - MANDRAKE por Buick 8 (2024), con versiones 
             de Gaston Ciarlo “Dino” y Alberto Wolf. Con producción de Sebastián Peralta en los dos últimos EP’s, 
             las grabaciones incluyen videoclips que acompañan casi todas las canciones.
          </p>

          <p className="text-sm md:text-base mb-5">
           Integrada por Sebastián Elizalde (voz y guitarras acústicas), Matías Grunullú y Joaquín Clavijo 
           (guitarras y coros), Inder Pais (bajo) y Pablo Grimón (batería), Buick 8 combina una base firme 
           con guitarras expresivas y letras que retratan escenas cotidianas con fuerza y sensibilidad.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://open.spotify.com/intl-es/artist/3McABe3KQUY3aAX41fF3pX?si=SfWKpB8IQJiyIwniZTl1tw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/buick8banda/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCKG5gUOzPAw35swEqsHwyAQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              YouTube
            </a>
          </div>

          {/* Volver */}
          <Link
            href="/#bandas"
            className="text-red-600 underline hover:text-red-400 transition-colors"
          >
            ← Volver al listado de bandas
          </Link>
        </div>
      </div>
       {/* Enlaces embebidos */}
        <div className="flex flex-col md:flex-row w-full mt-10 gap-6">
          {/* Spotify */}
          <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3  flex justify-center">
            <iframe
              className="w-full rounded-lg"
              src="https://open.spotify.com/embed/artist/3McABe3KQUY3aAX41fF3pX?utm_source=generator"
              style={{ height: "360px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          {/* YouTube */}
          <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3 shadow-md  flex justify-center">
            <iframe
              className="w-full rounded-lg"
              style={{ height: "360px" }}
              src="https://www.youtube.com/embed/M-m6V402oL8?si=qFG0c4JipN3DjVjq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </section>
  );
}
