import Link from "next/link";

export default function RetroalcanceBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg mt-16">
          <img
            src="/bandas-fotos/retroalcance.jpg"
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
         <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">Retroalcance</h1>
          
             <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Retroalcance es el proyecto de Sebastián Melgarejo, nacido a fines de 2023 como una forma de canalizar 
            su búsqueda musical personal. Desde muy joven, Sebastián formó parte de distintas bandas y colectivos 
            creativos, explorando con pasión la composición, los arreglos y el trabajo con instrumentos.
          </p>
          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
           La banda combina pop rock con letras íntimas, pasajes de imaginación narrativa y sensibilidad social. Las canciones 
           nacen de la guitarra acústica y se desarrollan a través del tiempo y la emoción hasta encontrar su forma definitiva.
          </p>

        
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Integrantes:</p> 
            <ul className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
              <li>Sebastían Melgarejo: voz guitarra y teclado</li>
              <li>Diego Walter: batería</li>
              <li>Sergio Alqueres: guitarra</li>
              <li>Leonardo Villalba: bajo</li>
            </ul>


          {/* Links */}
         <div className="flex flex-wrap gap-4 mb-10 mt-8">
            <a
              href="https://open.spotify.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/..."
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
                        src="https://open.spotify.com/embed/artist/3vcrhz4vYBBAOKPvtONFyj?utm_source=generator" 
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
                        src="https://www.youtube.com/embed/E__d_joqI3Y?si=k4WT2bf-4CeN1UzZ" 
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
