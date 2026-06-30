import Link from "next/link";

export default function BorgiaBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src="/bandas-fotos/borgia.jpeg"
            alt="Banda borgia"
            className="w-full h-[500px] object-cover"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(0,0,0,0.4),
                inset 0 0 30px rgba(255,0,0,0.2)
              `
            }}
          />
        </div>

        {/* Bio */}
         <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">Borgia</h1>
          
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
           Borgia es una banda uruguaya de género oscuro fundada en 2010
            en Montevideo. La formación actual incluye a Leonardo Pace como
            vocalista, Ruben Laner en la batería, Gustavo Dreier en el bajo, Anibal Porras en
            teclados y sintetizadores, y Germán Alcoba en las guitarras. Con una fusión de
            influencias musicales que abarcan desde Electro-Dark, Synth-Pop,
            Darkwave hasta Rock Gótico, creando un sonido único y
            cautivador.
          </p>
            <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            El primer trabajo discográfico de la banda fue “Profano”
            en el 2010, producido por la propia banda.
            En el 2019 sale a la luz “Noches de Magia” (producido por Gabriel
            Brikman).
            En octubre del año 2024 sale el disco “Espectral”, producido por
            Max Capote ,y cuyos adelantos han generado una ola de criticas
            favorables a la banda.
          </p>

            <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            La banda ha tocado en diversos escenarios de la escena local
            under, así como en festivales y eventos de colaboración. Uno de
            los puntos altos de la banda fue tocar en el MMBOX ,en octubre del
            2022 (junto a Fixion).
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://open.spotify.com/intl-es/artist/5eIYKzGEky5EJyaUHndZaq?si=hKzUcx2CS7OehqSHslHw1A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/borgiaofficial/"
              target="_blank"
              rel="noopener noreferrer"
             className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm">
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCFvp5ZOECz_eSFQa7LDBExQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
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
              src="https://open.spotify.com/embed/artist/5eIYKzGEky5EJyaUHndZaq?utm_source=generator&si=ffd8868f36f14eea"
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
              src="https://www.youtube.com/embed/hsZdNhFyD2k?si=mgCXyymELozYiAN2"
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
