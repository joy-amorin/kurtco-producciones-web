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
          <h1 className="text-5xl font-black text-red-600 mb-3">Buick 8</h1>
          <p className="text-xl text-gray-300 mb-6">Hard Rock</p>
          <div className="w-20 h-1 bg-red-600 mb-8 -mt-3"></div>
          
          <p className="text-base leading-relaxed mb-5 -mt-4">
            Formada en 2017 en Montevideo, Buick 8 lleva editados varios sencillos, dos sesiones y dos EP’s. 
            El grupo continúa recorriendo Montevideo y el interior del país con su potente propuesta en vivo.
          </p>
          <p className="text-base leading-relaxed mb-5">
           Su trabajo discográfico y audiovisual incluye grabaciones en Lulú Records (Montevideo, 2017),
            Estudios ION (Buenos Aires, 2020), los EP’s Ecos de otro mañana (2021), Despertar del caos (2021),
             Cultura descartable (2022) y la sesión en vivo DINO - MANDRAKE por Buick 8 (2024), con versiones 
             de Gaston Ciarlo “Dino” y Alberto Wolf. Con producción de Sebastián Peralta en los dos últimos EP’s, 
             las grabaciones incluyen videoclips que acompañan casi todas las canciones.
          </p>

          <p className="text- leading-relaxed mb-5">
           Integrada por Sebastián Elizalde (voz y guitarras acústicas), Matías Grunullú y Joaquín Clavijo 
           (guitarras y coros), Inder Pais (bajo) y Pablo Grimón (batería), Buick 8 combina una base firme 
           con guitarras expresivas y letras que retratan escenas cotidianas con fuerza y sensibilidad.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://open.spotify.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>
            <a
              href="https://instagram.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/..."
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
    </section>
  );
}
