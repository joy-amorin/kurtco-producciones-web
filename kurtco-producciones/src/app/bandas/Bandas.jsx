"use client"
import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { bandas } from '@/data/BandasData';

const BandsSection = () => {
  const [selectedBand, setSelectedBand] = useState(null);


  const openModal = (banda) => {
    setSelectedBand(banda);
    document.body.style.overflow = 'hidden'; // Previene scroll del body
  };

  const closeModal = () => {
    setSelectedBand(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id='bandas' className="relative w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20">
      
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
        <h2 className="text-5xl md:text-5xl lg:text-5xl font-black text-[#f4f4f4] tracking-tight leading-none mb-4 -mt-8 ">
          BANDAS
        </h2>
        <div className="w-32 h-1 bg-red-600 mx-auto"></div>
      </div>

      {/* Grid de bandas */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 -mt-10">
          {bandas.map((banda, idx) => (
            <div
              key={idx}
              onClick={() => openModal(banda)}
              className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
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
                  `
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBand && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
          onClick={closeModal}
        >
          {/* Panel del modal */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl"
            style={{
              background: 'rgba(17, 17, 17, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 0 80px rgba(255, 0, 0, 0.5)',
              border: '1px solid rgba(255, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Foto grande */}
              <div className="w-full lg:w-[45%] lg:h-auto">
                <img
                  src={selectedBand.foto}
                  alt={selectedBand.nombre}
                  className="w-full h-64 lg:h-full object-cover"
                  style={{
                    boxShadow: `
                      inset 0 0 80px rgba(0,0,0,0.4),
                      inset 0 0 40px rgba(255,0,0,0.2)
                    `
                  }}
                />
              </div>

              {/* Info */}
              <div className="w-full lg:w-[55%] p-8 lg:p-12">
                {/* Nombre */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-red-600 mb-2 leading-none">
                  {selectedBand.nombre}
                </h3>

                {/* Género */}
                <p className="text-xl md:text-2xl text-[#f4f4f4] font-light mb-8 tracking-wide">
                  {selectedBand.genero}
                </p>

                {/* Línea separadora */}
                <div className="w-24 h-1 bg-red-600 mb-8"></div>

                {/* Biografía */}
                <p className="text-lg md:text-xl text-[#f4f4f4] leading-relaxed mb-10">
                  {selectedBand.bio}
                </p>

                {/* Links a redes */}
                <div className="flex flex-wrap gap-4">
                  {selectedBand.links.spotify && (
                    <a
                      href={selectedBand.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-3 bg-transparent border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Spotify</span>
                    </a>
                  )}
                  {selectedBand.links.instagram && (
                    <a
                      href={selectedBand.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-3 bg-transparent border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {selectedBand.links.youtube && (
                    <a
                      href={selectedBand.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-3 bg-transparent border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>YouTube</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default BandsSection;