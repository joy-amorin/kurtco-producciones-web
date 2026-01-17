import Link from "next/link";

export default function LazapaBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src="/bandas-fotos/la-zapa.jpeg"
            alt="Banda de rock lazapa"
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
         <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">La zapa </h1>

           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            La Zapa es una banda de rock and roll barrial nacida en el barrio Jacinto Vera, Montevideo. 
            El proyecto comienza en 2011, cuando un grupo de amigos transforma largas zapadas nocturnas en canciones 
            propias, con una raíz firme en el rock clásico y under.
          </p>
          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            En 2014 se suma Matías Rodríguez en voz, completando la formación y dando impulso a las primeras letras.
            Desde entonces, la banda desarrolla una identidad marcada por el ensayo constante, el disfrute del escenario
            y una búsqueda honesta de sonido, siempre ligada al espíritu del barrio.
          </p>
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            En 2024, La Zapa cierra el año con una presentación en el Centro Cultural Terminal Goes por el 
            aniversario de Subrockradio. Durante 2025 recorre escenarios de Montevideo y el interior, registrando 
            material en vivo que da origen a su primer EP, “Bien de vivos”, producido por Federico Zavadsky, y al videoclip
             “El juego del gato y el ratón”, realizado por Zillen Films. Actualmente, la banda continúa presentando su material y preparando nuevas fechas dentro del rock and roll under barrial.
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10 mt-8">
            <a
              href="https://open.spotify.com/intl-es/artist/79n4ONJRa0p5p5trRN3rfS?si=BuIWalxhQbuhIYaXNsASLw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://instagram.com/lazapaesrock"
              target="_blank"
              rel="noopener noreferrer"
               className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@lazapauruguay2871"
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
              src="https://open.spotify.com/embed/artist/79n4ONJRa0p5p5trRN3rfS?utm_source=generator" 
              style={{ height: "360px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          </div>
      
    </section>
  );
}
