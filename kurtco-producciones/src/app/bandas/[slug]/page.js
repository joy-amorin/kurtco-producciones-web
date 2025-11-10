import { bandas } from "@/data/BandasData";
import Link from "next/link";

export default async function BandDetail({ params }) {
  const { slug } = params;

  // Buscar banda por slug generado desde el nombre
  const banda = bandas.find(
    (b) => b.nombre.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!banda) {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-xl mb-6">Banda no encontrada.</p>
        <Link
          href="/bandas"
          className="text-red-600 underline hover:text-red-400 transition-colors"
        >
          ← Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src={banda.foto}
            alt={banda.nombre}
            className="w-full h-full object-cover"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(0,0,0,0.4),
                inset 0 0 30px rgba(255,0,0,0.2)
              `
            }}
          />
        </div>

        {/* Información */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-black text-red-600 mb-3">
            {banda.nombre}
          </h1>
          <p className="text-xl text-gray-300 mb-6">{banda.genero}</p>
          <div className="w-20 h-1 bg-red-600 mb-8"></div>
          <p className="text-lg leading-relaxed mb-10">{banda.bio}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            {banda.links.spotify && (
              <a
                href={banda.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
              >
                Spotify
              </a>
            )}
            {banda.links.instagram && (
              <a
                href={banda.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
              >
                Instagram
              </a>
            )}
            {banda.links.youtube && (
              <a
                href={banda.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
              >
                YouTube
              </a>
            )}
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
