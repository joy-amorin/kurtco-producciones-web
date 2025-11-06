import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-black py-16">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* Lado izquierdo - Foto principal del show/equipo */}
        <div className="relative w-full lg:w-[60%] flex justify-center lg:justify-start">
          <img
            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80"
            alt="Equipo de trabajo en show"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Lado derecho - Texto con foto circular del CEO */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center text-[#f4f4f4]">
          {/* Título */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
              QUIÉNES<br />SOMOS
            </h2>
            <div className="w-24 h-1 bg-red-600"></div>
          </div>

          {/* Descripción general */}
          <div className="mb-8 text-lg md:text-xl leading-relaxed">
            <p className="mb-4">
              Somos una productora dedicada a crear experiencias inolvidables en el universo del rock. 
              Trabajamos con bandas emergentes y consagradas, ofreciendo producción integral de eventos, 
              booking, prensa y difusión.
            </p>
            <p className="mb-4">
              Nuestra pasión es llevar la música en vivo a su máxima expresión, cuidando cada detalle 
              técnico y artístico para que cada show sea una experiencia única. 
            </p>
          </div>

          {/* Bloque del CEO */}
          <div className="flex items-start gap-4">
            {/* Foto circular */}
            <img
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1021"
              alt="CEO"
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg"
            />

            {/* Texto del CEO */}
            <div className="flex flex-col">
              <p className="text-red-600 font-bold text-lg md:text-xl">RICHARD BIASSINI</p>
              <p className="text-[#f4f4f4] text-sm md:text-base mb-2">CEO | PRODUCTOR</p>
              <p className="text-[#f4f4f4] text-base md:text-lg leading-relaxed">
                Con más de 15 años en la industria musical, Richard ha sido pieza fundamental 
                en el desarrollo de la escena rock independiente en Uruguay. Su enfoque combina 
                pasión por la música con profesionalismo técnico, creando un puente entre bandas 
                y audiencias que trasciende lo convencional.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
