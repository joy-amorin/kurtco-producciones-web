"use client"
import React from 'react';

const AboutSection = () => {
  const team = [
    { name: 'Richard Biassini', role: 'Gestor y Productor General', img: '/fundador-foto/richard.jpg' },
    { name: 'Joy Amorín', role: 'Desarrollo web', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
    { name: 'Juliám Gadea', role: 'Fotógrafo y Realizador Audiovisual', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Federico Zavadsky', role: 'Productor Artístico', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Dennis Noda', role: 'Técnico en Sonido', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Zillen Films', role: 'Productora Audiovisual', img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&q=80' },
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
                  src="hero-photos/hero-21.jpg"
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
                  border: '2px solid rgba(255, 0, 0, 0.3)',
                  boxShadow: '0 0 30px rgba(255, 0, 0, 0.15)'
                }}
              >
                {/* Foto pequeña fundador */}
                <div className="flex-shrink-0">
                  <img
                    src="/fundador-foto/richard.jpg"
                    alt="Richard Biassini"
                    className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-sm"
                    style={{
                      boxShadow: `
                        inset 0 0 40px rgba(0,0,0,0.4),
                        inset 0 0 20px rgba(255,0,0,0.2),
                        0 10px 20px rgba(0,0,0,0.6)
                      `
                    }}
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
          <h2 
            className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-12 text-center"
            
          >
            Equipo de Trabajo
          </h2>

          {/* Grid de equipo */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center gap-2 p-3 rounded-sm bg-[#111111] hover:bg-[#1a1a1a] transition-all duration-300"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  borderBottom: '3px solid transparent',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#dc2626'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
              >
                {/* Avatar pequeño */}
                <div className="flex-shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-18 h-18 rounded-full object-cover"
                    style={{
                      boxShadow: '0 0 12px rgba(255,0,0,0.2)'
                    }}
                  />
                </div>

                {/* Info */}
                <div className="text-center w-full">
                  <p className="text-[#f4f4f4] font-bold text-xs md:text-sm leading-tight">
                    {member.name}
                  </p>
                  <p className="text-red-600 text-[10px] md:text-xs font-semibold tracking-wide leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;