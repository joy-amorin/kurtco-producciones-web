import React from 'react';
import { servicios } from '@/data/serviciosData';

const ServicesSection = () => {
 
  return (
    <section id='servicios' className="relative w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20">
      
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
        <h2 
                  className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6"
                  style={{
                    textShadow: '0 4px 8px rgba(220, 38, 38, 0.3)'
                  }}
                >
                  Servicios
                </h2>
      </div>

      {/* Grid de servicios */}
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
                <h3 className="text-lg md:text-xl mb-4 font-black text-[#f4f4f4]">
                  {servicio.titulo}
                </h3>

                {/* Descripción */}
                 <p className="text-sm md:text-base text-[#f4f4f4] leading-relaxed mb-4">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;