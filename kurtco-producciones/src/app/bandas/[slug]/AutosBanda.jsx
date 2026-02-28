import Link from "next/link";

export default function AutosBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg mt-16">
          <img
            src="/bandas-fotos/autos.jpg"
            alt="Banda autos"
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
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">Autos</h1>
          
             <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            AUTOS es una banda uruguaya de rock experimental que nace en Montevideo como proyecto y se consolida en 2017 
            con la salida de su primer disco <i>Asesino</i>, tras un largo proceso creativo.
          </p>
          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
           La banda se destaca como una de las pocas bandas de rock nuevo firme y visible en la escena uruguaya, adaptándose 
           a los cambios vertiginosos en contenidos y formas de difusión musical. Han sido elegidos en múltiples ocasiones
          por jurados como una propuesta destacada del país.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
           En 2025, AUTOS lanzó su segundo disco de estudio, El Sonido De Los Mundos, un trabajo de 37 minutos con 11 tracks 
           que combinan rock clásico y post-punk, con letras que abordan la locura, el paso del tiempo, la influencia del 
           rock en una época liviana y sin identidad, y la autosuperación. La tapa, inspirada en Pulp Fiction, refleja cómo nuestros cultos pop han sido tocados y desconocidos sin que nadie se ruborice… mientras la vida, o los mundos, continúan.
          </p>

        
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Integrantes:</p> 
            <ul className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
              <li>Gabi Fassini: Voz</li>
              <li>"Akash" Landaburu y "Chico Mendez": Guitarras</li>
              <li>Alvaro Mosqueira: Bajo</li>
              <li>Andres Mendez: Batería</li>
            </ul>


          {/* Links */}
         <div className="flex flex-wrap gap-4 mb-10 mt-8">
            <a
              href="https://open.spotify.com/intl-es/artist/067C3aloL4uuqxDzrDkOeV?si=CshEtxJQTyqJnGqjc-X7IQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/autos.rock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@autos.rock1234"
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
                        src="https://open.spotify.com/embed/album/0qQaxFoSUZK7YPa21D1Msx?utm_source=generator"
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
                        src="https://www.youtube.com/embed/qGvySQr8fw0?si=dpTbR-ubQe0Lmi6B" 
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
