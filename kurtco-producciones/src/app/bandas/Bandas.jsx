"use client";
import React from "react";
import Link from "next/link";
import { bandas } from "@/data/BandasData";

const BandsSection = () => {
  return (
    <section
      id="bandas"
      className="relative w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20"
    >
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
        <h2 
              className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6"
              style={{
                textShadow: '0 4px 8px rgba(220, 38, 38, 0.3)'
              }}
            >
            Bandas
        </h2>
      </div>

      {/* Grid de bandas */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 -mt-10">
          {bandas.map((banda, idx) => {
            const slug = banda.nombre.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={idx}
                href={`/bandas/${slug}`}
                className="group relative aspect-[3/2] overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                {/* Foto */}
                <img
                  src={banda.foto}
                  alt={banda.nombre}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{
                    boxShadow: `
                      inset 0 0 60px rgba(0,0,0,0.4),
                      inset 0 0 30px rgba(255,0,0,0.2)
                    `,
                  }}
                />

                {/* Overlay con nombre */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Overlay rojo al hover */}
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Nombre de la banda */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl md:text-2xl font-black text-[#f4f4f4] leading-tight">
                    {banda.nombre}
                  </h3>
                </div>

                {/* Borde rojo al hover */}
                <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BandsSection;
