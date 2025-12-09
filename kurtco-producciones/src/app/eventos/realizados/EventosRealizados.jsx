import React, { useState } from "react";


const flyersRealizados = [
  "/eventos-realizados/autos.jpeg",
  "/eventos-realizados/bachicas-resto-pub.jpeg",
  "/eventos-realizados/el-leon-de-reus.jpeg",
  "/eventos-realizados/guayabos.jpeg",
  "/eventos-realizados/inmigrantes.jpeg",
  "/eventos-realizados/mandragora.jpeg",
  "/eventos-realizados/retroalcance.jpeg",
  
  
];

export default function EventosRealizados() {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  return (
    <section className="w-full min-h-screen bg-black py-20 px-6">
      {/* Título */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-black text-gray-100 mt-8">Eventos Realizados</h1>
      </div>

      {/* Grid de flyers */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {flyersRealizados.map((flyer, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedFlyer(flyer)}
              className="group relative w-full aspect-[4/5] overflow-hidden rounded-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}
            >
              <img
                src={flyer}
                alt={`Flyer evento ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                style={{
                  boxShadow: `
                    inset 0 0 40px rgba(0,0,0,0.3),
                    inset 0 0 20px rgba(255,0,0,0.15)
                  `,
                }}
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      
    </section>
  );
}