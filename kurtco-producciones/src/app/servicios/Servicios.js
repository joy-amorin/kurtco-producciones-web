import React from 'react';
import { servicios } from '@/data/serviciosData';

const ServicesSection = () => {
 
  return (
    <section id='servicios' className="relative w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20">
      
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
        <h2 className="text-5xl md:text-4xl lg:text-5xl font-black text-[#f4f4f4] tracking-tight leading-none mb-4">
          SERVICIOS
        </h2>
        <div className="w-32 h-1 bg-red-600 mx-auto"></div>
      </div>

      {/* Grid de servicios - Automático y escalable */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 -mt-10">
          {servicios.map((servicio, idx) => {
            const IconComponent = servicio.icono;
            
            return (
              <div
                key={idx}
                className="group relative bg-[#111111] p-6 lg:p-5 rounded-sm transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                {/* Borde al hacer hover */}
                <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none"></div>
                
                {/* Resplandor rojo al hacer hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                {/* Ícono */}
                <div className="mb-6">
                  <IconComponent 
                    className="w-10 h-10 md:w-12 md:h-12 text-red-600 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>

                {/* Título */}
                <h3 className="text-xl md:text-2xl font-black text-[#f4f4f4] mb-4 leading-tight">
                  {servicio.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-base md:text-lg text-[#f4f4f4] leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto mt-20 lg:mt-32 text-center">
        <a
            href="https://wa.me/59895414520"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block text-center px-8 py-4 bg-transparent border-2 border-red-600 text-red-600 font-bold text-base lg:text-lg uppercase tracking-wider overflow-hidden transition-colors duration-300 hover:text-white">
            <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Hablemos de tu proyecto</span>
            <span className="absolute inset-0 border-2 border-red-600 group-hover:animate-ping opacity-0 group-hover:opacity-75"></span>
        </a>
      </div>

    </section>
  );
};

export default ServicesSection;