"use client"
import React from 'react';
import { HeroGallery } from '@/data/HeroGalery';

const HeroSection = () => {
  // Posiciones y estilos para cada foto
  const imagePositions = [
    { top: '5%', left: '8%', width: '18vw', height: '24vh', rotate: '-3deg', zIndex: 10 },
    { top: '15%', left: '28%', width: '15vw', height: '20vh', rotate: '5deg', zIndex: 15 },
    { top: '8%', right: '10%', width: '18vw', height: '24vh', rotate: '-6deg', zIndex: 12 },
    { top: '35%', right: '18%', width: '20vw', height: '25vh', rotate: '4deg', zIndex: 8 },
    { bottom: '8%', left: '12%', width: '16vw', height: '22vh', rotate: '3deg', zIndex: 14 },
    { bottom: '15%', left: '32%', width: '13vw', height: '18vh', rotate: '-5deg', zIndex: 9 },
    { bottom: '5%', right: '8%', width: '18vw', height: '24vh', rotate: '-4deg', zIndex: 11 },
    { bottom: '28%', right: '25%', width: '15vw', height: '20vh', rotate: '6deg', zIndex: 13 },
    { top: '25%', left: '5%', width: '14vw', height: '19vh', rotate: '-7deg', zIndex: 7 },
    { top: '45%', left: '22%', width: '16vw', height: '21vh', rotate: '2deg', zIndex: 16 },
    { top: '18%', right: '32%', width: '13vw', height: '17vh', rotate: '-4deg', zIndex: 6 },
    { top: '52%', right: '8%', width: '15vw', height: '20vh', rotate: '7deg', zIndex: 17 },
    { bottom: '35%', left: '8%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 5 },
    { bottom: '18%', right: '35%', width: '12vw', height: '16vh', rotate: '-6deg', zIndex: 18 },
    { top: '60%', left: '38%', width: '13vw', height: '17vh', rotate: '3deg', zIndex: 4 },
    { top: '3%', left: '45%', width: '14vw', height: '19vh', rotate: '-5deg', zIndex: 19 },
    { top: '38%', left: '18%', width: '12vw', height: '16vh', rotate: '4deg', zIndex: 3 },
    { top: '68%', left: '15%', width: '15vw', height: '20vh', rotate: '-3deg', zIndex: 20 },
    { top: '30%', left: '42%', width: '16vw', height: '21vh', rotate: '6deg', zIndex: 21 },
    { top: '42%', right: '2%', width: '13vw', height: '17vh', rotate: '-7deg', zIndex: 2 },
    { bottom: '2%', left: '2%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 22 },
    { bottom: '48%', left: '38%', width: '12vw', height: '16vh', rotate: '-4deg', zIndex: 1 },
    { top: '72%', right: '15%', width: '15vw', height: '20vh', rotate: '3deg', zIndex: 23 },
    { bottom: '40%', right: '38%', width: '13vw', height: '17vh', rotate: '-2deg', zIndex: 24 },
    { bottom: '2%', left: '2%', width: '14vw', height: '18vh', rotate: '5deg', zIndex: 25 },
    { bottom: '48%', left: '38%', width: '12vw', height: '16vh', rotate: '-4deg', zIndex: 28 },
    { top: '72%', right: '15%', width: '15vw', height: '20vh', rotate: '3deg', zIndex: 26 },
    { bottom: '40%', right: '38%', width: '13vw', height: '17vh', rotate: '-2deg', zIndex: 227 },
    
    
  ];

    return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Contenedor central con márgenes */}
        <div className="relative w-[90%] h-[85%]">
        {HeroGallery.map((image, idx) => {
            const position = imagePositions[idx % imagePositions.length];
            
            return (
            <div
                key={idx}
                className="absolute"
                style={{
                top: position.top || 'auto',
                bottom: position.bottom || 'auto',
                left: position.left || 'auto',
                right: position.right || 'auto',
                width: position.width,
                height: position.height,
                transform: `rotate(${position.rotate})`,
                zIndex: position.zIndex
                }}
            >
                <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-sm"
                style={{
                    boxShadow: `
                    inset 0 0 60px rgba(0,0,0,0.4),
                    inset 0 0 30px rgba(255,0,0,0.2),
                    0 10px 30px rgba(0,0,0,0.6)
                    `
                }}
                />
            </div>
            );
        })}
        </div>
    </div>
    );
};

export default HeroSection;