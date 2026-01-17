import Link from "next/link";

export default function RetroalcanceBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg mt-16">
          <img
            src="/bandas-fotos/johnny-moon.jpg"
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
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">Johnny Moon</h1>
          
            <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Johnny Moon es una banda nueva e independiente formada en 2024 en Montevideo, Uruguay. 
            Su sonido toma influencias que van desde el rock clásico hasta el grunge más visceral. 
            Acaban de lanzar su primer disco, Renacer, producido en Bo Estudio con la producción de 
            Federico Ucha, además de la participación de Mario Breuer en la mezcla y masterización de una parte del disco.
          </p>
             <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
              Mientras comienzan la preproducción de su segundo disco de la mano de Federico Ucha, también realizan
              diversas presentaciones en vivo en la escena local, contando con el management de Richard Biassini.
          </p>

        
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Integrantes:</p> 
            <ul className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
              <li>Johnny: voz</li>
              <li>Nazaret García: guitarra</li>
              <li>Marccio Silva: guitarra y coros</li>
              <li>Martin Rodríguez: batería</li>
              <li>Toto Aguirre: bajo</li>
            </ul>


          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10 mt-8" >
            <a
              href="https://open.spotify.com/intl-es/artist/1G58PzrX93tkFu9lV1FkGV?si=laizI3q5QUOgHbk7lmIJSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/_johnnymoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCGtZcc47i-pYpuMc3d9HCEg"
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
              src="https://open.spotify.com/embed/artist/1G58PzrX93tkFu9lV1FkGV?utm_source=generator"
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
              src="https://www.youtube.com/embed/kASyBOPmFAQ?si=-xVckVpFQ7QvQCkE"
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
