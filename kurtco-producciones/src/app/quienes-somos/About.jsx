"use client"
import React from 'react';
import { Briefcase, Code, Camera, Music, Headphones, Film } from 'lucide-react';


const AboutSection = () => {
  const team = [
    { name: 'Richard Biassini', role: 'Gestor y Productor General', icon: Briefcase },
    { name: 'Joy Amorín', role: 'Desarrollo web', icon: Code },
    { name: 'Julián Gadea', role: 'Fotógrafo y Realizador Audiovisual', icon: Camera },
    { name: 'Federico Zavadsky', role: 'Productor Artístico', icon: Music },
    { name: 'Dennis Noda', role: 'Técnico en Sonido', icon: Headphones },
    { name: 'Zillen Films', role: 'Productora Audiovisual', icon: Film },
  ];

  return (
    <section id="about" className="w-full bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* QUIÉNES SOMOS */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
            <h2 
              className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6"
            >
              Quiénes Somos
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#f4f4f4]">
              KurtCo Producciones es más que una productora: es un proyecto colectivo
              integrador. Es el acercamiento a una comunidad de artistas emergentes con el
              fin de hacerlos llegar a audiencias más amplias, un reto habitual para quienes
              gestionan sus proyectos de forma independiente. Integra gestores, productores
              artísticos, técnicos de sonido, coordinadores de marketing y creadores de
              contenidos. Ofreciendo distintas formas de participar, según el propósito que
              tenga cada artista para el desarrollo de su idea.
            </p>
          </div>
        </div>

        {/* QUÉ BUSCAMOS */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-left">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Imagen a la izquierda */}
              <div className="w-full lg:w-1/2">
                <img
                  src="hero-photos/hero-12.jpg"
                  alt="Qué buscamos"
                  className="w-full h-auto object-cover rounded-sm"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 0, 0, 0.15)'
                  }}
                />
              </div>

              {/* Texto a la derecha */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <h2 
                  className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6"
                  
                >
                  Qué Buscamos
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-[#f4f4f4] mb-3">
                  Cada convocatoria de KurtCo Pro busca
                  potenciar a los artistas mediante la
                  administración de recursos y la
                  coordinación de procesos, apoyándose en
                  una comunicación efectiva y una gestión
                  centrada en el liderazgo.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#f4f4f4]">
                  Proponemos organizar, producir y gestionar
                  tus ideas, llevándolas al escenario real,
                  desarrollando contenido y brindando apoyo
                  en la comunicación y difusión de tus
                  eventos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FUNDADOR */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
            <h2 
              className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-12"
            >
              Fundador
            </h2>
            
            <div className="max-w-7xl mx-auto">
              <div 
                className="relative p-6 md:p-8 rounded-sm flex flex-col sm:flex-row gap-6 items-start"
                style={{
                  background: 'rgba(17, 17, 17, 0.9)',
                  
                 
                }}
              >
                {/* Foto pequeña fundador */}
                <div className="flex-shrink-0">
                  <img
                    src="/fundador-foto/richard.jpg"
                    alt="Richard Biassini"
                    className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-sm"
                    
                  />
                </div>

                {/* Texto */}
                <div className="flex-1 text-[#f4f4f4]">
                  <h3 className="text-lg md:text-xl mb-4 font-black text-[#f4f4f4]">
                    Richard Biassini
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-4">
                    Profesional formado en Organización y Producción de Eventos, Gestor Cultural, locutor y productor 
                    de los programas radiales <em>El Rock También es Mentira</em> y <em>Subrockradio</em>. También escritor, ha producido 
                    múltiples eventos de rock, gestionado bandas de la escena local. En 2025 recibió el 
                    premio <span className="text-red-600 font-bold">Quijotes y Molinos</span>, 
                    medalla a la Comunicación Solidaria de la Fundación Winners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPO DE TRABAJO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-12 text-center">
            Equipo de Trabajo
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-4 hover:bg-[#111111] rounded-sm transition-all duration-300"
                >
                  {/* Ícono */}
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8 text-red-600" strokeWidth={1.5} />
                  </div>
                  
                  {/* Texto */}
                  <h3 className="text-[#f4f4f4] font-bold text-base md:text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 text-xs md:text-sm">
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;