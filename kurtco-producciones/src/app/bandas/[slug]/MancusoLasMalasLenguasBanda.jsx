"use client";
import Link from "next/link";
import { useState } from "react";


export default function MancusoLasMalasLenguasBanda() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-2/5 rounded-md overflow-hidden shadow-lg mt-16">
          <img
            src="/bandas-fotos/mancuso-y-las-malas-lenguas.jpg"
            alt="Banda mancuso y las malas lenguas"
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
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">
            Mancuso y Las Malas Lenguas
          </h1>

          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Mancuso es un cantante y compositor uruguayo con una impronta jazzística y una extensa actividad, ha formado
            parte de proyectos musicales como Mantra, Poker, Príapo, Automática y Máquina Solar.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Las Malas Lenguas también forma parte de la nueva versión de “Los Muertos” de Florencio
            Sánchez, reinterpretada por Tabaré Rivero y dirigida por Celeste Villagrán, nominada
            a los premios Florencio 2025 como mejor obra musical
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10 mt-8">
            <a
              href="https://open.spotify.com/intl-es/artist/5C1a1yEeuAiNTZwy1wxqcs?si=gGOmwCDqTwOB80i5MsGN2w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Spotify
            </a>

            <a
              href="https://www.instagram.com/lasmalaslenguasuy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@mancusoylasmalaslenguas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              YouTube
            </a>
          </div>

          {/* Discografía */}
          <div className="mt-12">
            <h2 className="text-2xl font-black text-red-600 mb-6">
              Discografía
            </h2>

            <div className="space-y-3 text-[#f4f4f4]">
              
              <div>
                <button
                  onClick={() => toggleSection("banda")}
                  className="w-full text-left font-bold text-lg mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300"
                >
                  {openSection === "banda" ? "−" : "+"} Mancuso & Las Malas Lenguas
                </button>

                {openSection === "banda" && (
                  <div className="pl-4">
                    <p>Placeres ocultos (2026)</p>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("mancuso")}
                  className="w-full text-left font-bold text-lg mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300"
                >
                  {openSection === "mancuso" ? "−" : "+"} Discografía Mancuso
                </button>

                {openSection === "mancuso" && (
                  <div className="space-y-2 pl-4">
                    <p>
                      <span className="font-semibold">Máquina Solar</span> — Fuego (2025) I (2026)
                    </p>

                    <p>
                      <span className="font-semibold">Automática</span> — Oscuro Elíxir (MMG 2017)
                    </p>
                    <p className="text-sm opacity-80">
                      Producido por Jorge Nasser
                    </p>

                    <p>
                      <span className="font-semibold">Automática</span> — Satélites (MMG 2014)
                    </p>

                    <p>
                      <span className="font-semibold">Automática</span> — Donde estás (MMG 2013)
                    </p>
                    <p className="text-sm opacity-80">
                      Nominado Premios Graffiti Mejor álbum de rock y blues
                    </p>

                    <p>
                      <span className="font-semibold">Tensión</span> — Control (2011)
                    </p>
                    <p className="text-sm opacity-80">
                      Nominado Premios Graffiti Mejor álbum de hard rock/Metal
                    </p>

                    <p>
                      <span className="font-semibold">Memphis Jazz Band</span> — Clásicos (2007)
                    </p>

                    <p>
                      <span className="font-semibold">Mantra</span> — Mantra (PBR 1997)
                    </p>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("singles")}
                  className="w-full text-left font-bold text-lg mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300"
                >
                  {openSection === "singles" ? "−" : "+"} Singles Mancuso
                </button>

                {openSection === "singles" && (
                  <div className="space-y-2 pl-4">
                    <p>La fogata (Ft. Tabaré Rivero) (2024)</p>
                    <p>La noche entera (2021)</p>
                    <p>El vacío (2021)</p>
                    <p>Mística / Koi Fish Music (2020)</p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Volver */}
          <Link
            href="/#bandas"
            className="text-red-600 underline hover:text-red-400 transition-colors mt-10"
          >
            ← Volver al listado de bandas
          </Link>
        </div>
      </div>

      {/* Enlaces embebidos */}
      <div className="flex flex-col md:flex-row w-full mt-10 gap-6">
        {/* Spotify */}
        <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3 flex justify-center">
          <iframe
            className="w-full rounded-lg"
            src="https://open.spotify.com/embed/artist/5C1a1yEeuAiNTZwy1wxqcs?utm_source=generator"
            style={{ height: "360px" }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* YouTube */}
        <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3 shadow-md flex justify-center">
          <iframe
            className="w-full rounded-lg"
            style={{ height: "360px" }}
            src="https://www.youtube.com/embed/32dffW4F3M4?si=u89AGZYDf-9JAtvS"
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