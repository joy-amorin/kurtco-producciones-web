"use client";
import React from "react";
import Image from "next/image";
import { HeroGallery } from "@/data/HeroGalery";

const HeroSection = () => {
 // Posiciones y estilos para cada foto
  const imagePositions = [
  { bottom: '35%', left: '8%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 5 },
  { top: '52%', right: '8%', width: '15vw', height: '20vh', rotate: '7deg', zIndex: 17 },
  { top: '15%', left: '28%', width: '15vw', height: '20vh', rotate: '5deg', zIndex: 15 },
  { bottom: '2%', left: '2%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 22 },
  { top: '60%', left: '42%', width: '16vw', height: '21vh', rotate: '6deg', zIndex: 21 },
  { bottom: '40%', right: '38%', width: '13vw', height: '17vh', rotate: '-2deg', zIndex: 27 },
  { top: '38%', left: '18%', width: '12vw', height: '16vh', rotate: '4deg', zIndex: 3 },
  { top: '8%', right: '10%', width: '18vw', height: '24vh', rotate: '-6deg', zIndex: 12 },
  { bottom: '15%', left: '32%', width: '13vw', height: '18vh', rotate: '-5deg', zIndex: 9 },
  { top: '45%', left: '22%', width: '16vw', height: '21vh', rotate: '2deg', zIndex: 16 },
  { top: '80%', left: '52%', width: '15vw', height: '17vh', rotate: '-4deg', zIndex: 29 },
  { bottom: '5%', right: '8%', width: '18vw', height: '24vh', rotate: '-4deg', zIndex: 11 },
  { bottom: '8%', left: '12%', width: '16vw', height: '22vh', rotate: '3deg', zIndex: 14 },
  { bottom: '40%', right: '2%', width: '13vw', height: '25vh', rotate: '-7deg', zIndex: 2 },
  { top: '25%', left: '5%', width: '14vw', height: '19vh', rotate: '-7deg', zIndex: 7 },
  { top: '80%', left: '38%', width: '12vw', height: '16vh', rotate: '-4deg', zIndex: 28 },
  { bottom: '28%', right: '25%', width: '15vw', height: '20vh', rotate: '6deg', zIndex: 13 },
  { top: '60%', left: '80%', width: '13vw', height: '17vh', rotate: '3deg', zIndex: 4 },
  { top: '72%', right: '15%', width: '15vw', height: '20vh', rotate: '3deg', zIndex: 26 },
  { bottom: '65%', left: '39%', width: '12vw', height: '16vh', rotate: '-4deg', zIndex: 1 },
  { top: '60%', right: '32%', width: '13vw', height: '17vh', rotate: '-4deg', zIndex: 6 },
  { top: '75%', left: '21%', width: '15vw', height: '20vh', rotate: '-3deg', zIndex: 20 },
  { top: '35%', right: '18%', width: '20vw', height: '25vh', rotate: '4deg', zIndex: 8 },
  { bottom: '2%', left: '2%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 25 },
  { top: '12%', left: '56%', width: '14vw', height: '19vh', rotate: '4deg', zIndex:  1},
  { top: '10%', left: '12%', width: '18vw', height: '24vh', rotate: '-3deg', zIndex: 10 },
  { bottom: '40%', right: '38%', width: '13vw', height: '17vh', rotate: '-2deg', zIndex: 24 },
  { top: '72%', right: '15%', width: '15vw', height: '20vh', rotate: '3deg', zIndex: 23 }
];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Contenedor central con imágenes */}
      <div className="relative w-[90%] h-[85%]">
        {HeroGallery.map((image, idx) => {
          const position = imagePositions[idx % imagePositions.length];

          return (
            <div
              key={idx}
              className="absolute"
              style={{
                top: position.top || "auto",
                bottom: position.bottom || "auto",
                left: position.left || "auto",
                right: position.right || "auto",
                transform: `rotate(${position.rotate})`,
                zIndex: position.zIndex,
              }}
            >
              <div
                className="
                  relative rounded-sm shadow-lg overflow-hidden
                  w-[38vw] h-[22vh]       /* base móvil */
                  sm:w-[28vw] sm:h-[22vh] /* tablets */
                  md:w-[17vw] md:h-[20vh] /* desktop mediano */
                  lg:w-[15vw] lg:h-[22vh] /* desktop grande */
                "
                style={{
                  boxShadow: `
                    inset 0 0 50px rgba(0,0,0,0.4),
                    inset 0 0 20px rgba(255,0,0,0.2),
                    0 8px 20px rgba(0,0,0,0.5)
                  `,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt || "Gallery image"}
                  fill
                  className="object-cover"
                  priority={idx < 4}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Logo central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
        {/* Fondo oscuro tras logo */}
        <div
          className="
            absolute 
            w-[65vw] sm:w-[50vw] md:w-[31vw]
            h-[22vh] sm:h-[24vh] md:h-[30vh]
            bg-black/70 rounded-xl
          "
        ></div>

        {/* Logo */}
        <div
          className="relative"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,0,0,0.7))",
          }}
        >
          <Image
            src="/Logo_KurtCo_Blanco.svg"
            alt="Logo KurtCo"
            width={500}
            height={300}
            className="w-[45vw] sm:w-[30vw] md:w-[20vw] h-auto logo-neon"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
