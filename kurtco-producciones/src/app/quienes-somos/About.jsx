import React from 'react';

const AboutSection = () => {
  // Equipo (incluye a Richard)
  const team = [
    { name: 'Richard Biassini', role: 'Fundador & CEO', img: '/fundador-foto/richard.jpg' },
    { name: 'Ana López', role: 'Productora', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
    { name: 'Juan Pérez', role: 'Técnico de sonido', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Marcos Díaz', role: 'Coordinador de marketing', img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&q=80' },
    { name: 'Laura Méndez', role: 'Gestora Cultural', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80' },
    { name: 'Santiago Rivas', role: 'Creativo Audiovisual', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Carla Torres', role: 'Diseñadora Gráfica', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  ];

  return (
    <section id="about" className="w-full bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* QUIÉNES SOMOS */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6">
              QUIÉNES SOMOS
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-12"></div>

            <p className="text-base md:text-lg leading-relaxed text-[#f4f4f4]">
              Kurtco Producciones es más que una productora: es un proyecto colectivo integrador. Integra gestores, 
              productores artísticos, técnicos de sonido, coordinadores de marketing y creadores de contenidos, 
              ofreciendo distintas formas de participar según el propósito de cada artista.
            </p>
          </div>
        </div>

        {/* QUÉ BUSCAMOS */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#f4f4f4] mb-6">
              QUÉ BUSCAMOS
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-12"></div>

            <p className="text-base md:text-lg leading-relaxed text-[#f4f4f4]">
              Cada convocatoria de Kurtco Pro busca potenciar a los artistas mediante la administración de recursos y
              la coordinación de procesos, apoyándose en una comunicación efectiva y un liderazgo colaborativo.
              Organizamos, producimos y gestionamos proyectos, llevando tus ideas al escenario real y brindando apoyo
              en la comunicación y difusión de tus eventos.
            </p>
          </div>
        </div>

        {/* PANEL FUNDADOR - FORMATO QUOTE */}
        <div className="mb-20 lg:mb-32">
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative p-6 md:p-8 rounded-sm flex flex-col sm:flex-row gap-6 items-start"
              style={{
                background: 'rgba(17, 17, 17, 0.9)',
                border: '2px solid rgba(255, 0, 0, 0.3)',
                boxShadow: '0 0 30px rgba(255, 0, 0, 0.15)'
              }}
            >
              {/* Foto pequeña fundador*/}
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
                <h3 className="text-xl md:text-2xl mb-4 font-black text-[#f4f4f4]">FUNDADOR</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4">
                  El proyecto nace dela inquietud de <span className="text-red-600 font-bold">Richard Biassini</span>, 
                  profesional formado en Organización y Producción de Eventos, Gestor Cultural, locutor y productor 
                  de los programas radiales <em>El Rock También es Mentira</em> y <em>Subrockradio</em>. También escritor, ha producido 
                  múltiples eventos de rock, gestionado bandas de la escena local. En 2025 recibió el 
                  premio <span className="text-red-600 font-bold">Quijotes y Molinos</span>, 
                  medalla a la Comunicación Solidaria de la Fundación Winners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPO DE TRABAJO */}
        <div>
          {/* Título */}
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl md:text-2xl mb-4 font-black text-[#f4f4f4]">
              EQUIPO DE TRABAJO
            </h3>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Grid de equipo */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-[#111111] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
              >
                {/* Borde rojo al hover */}
                <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none z-10"></div>

                {/* Foto cuadrada */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      boxShadow: `
                        inset 0 0 60px rgba(0,0,0,0.4),
                        inset 0 0 30px rgba(255,0,0,0.2)
                      `
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-3 text-center">
                  <p className="text-[#f4f4f4] font-bold text-xs md:text-sm mb-1 leading-tight">
                    {member.name}
                  </p>
                  <p className="text-red-600 text-[10px] md:text-xs font-semibold uppercase tracking-wide">
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