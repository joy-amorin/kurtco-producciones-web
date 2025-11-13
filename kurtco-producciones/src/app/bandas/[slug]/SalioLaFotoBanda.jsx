import Link from "next/link";

export default function SalioLAFoto() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src="/bandas-fotos/salio-la-foto.jpeg"
            alt="Banda de rock salio la foto"
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
          <h1 className="text-5xl font-black text-red-600 mb-3"> Salio la foto </h1>
          <p className="text-xl text-gray-300 mb-6">Hard Rock</p>
          <div className="w-20 h-1 bg-red-600 mb-8 -mt-3"></div>
          
          <p className="text-base leading-relaxed mb-5 -mt-4">
            bio
          </p>
          <p className="text-base leading-relaxed mb-5">
           bio
          </p>
            bio
          <p className="text- leading-relaxed mb-5">
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
