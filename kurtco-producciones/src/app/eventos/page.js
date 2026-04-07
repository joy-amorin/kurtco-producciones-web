"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { eventos } from "@/data/produccionesData";
import Image from "next/image";

// Config del hero
const heroConfig = {
  videoUrl: null,
  youtubeId: null,
  fotoFallback: "https://images.unsplash.com/photo-1501386761578-eaa54b4e6a4b?w=1600&q=80",
};

// ——————————————————————————————————————————
// HOOK: scroll reveal
// ——————————————————————————————————————————
const useScrollReveal = (ref) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return visible;
};

// ——————————————————————————————————————————
// HERO
// ——————————————————————————————————————————
const Hero = () => {
  const { fotoFallback } = heroConfig;

  return (
    <div className="relative w-full bg-black py-8 md:py-12 overflow-hidden">
      {fotoFallback && (
        <img
          src={fotoFallback}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}
      {!fotoFallback && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(135deg, #080808 0, #080808 20px, #0d0d0d 20px, #0d0d0d 40px)",
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Gradiente inferior para fusionar con la sección siguiente */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative flex flex-col justify-start px-6 md:px-12 lg:px-20 pt-12 pb-0">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#f4f4f4] leading-tight tracking-tight mb-2">
            Cada show <span className="text-red-600">deja marca.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-8">
            El registro de lo que construimos junto a artistas, bandas y público en cada producción.
          </p>
        </div>
      </div>
    </div>
  );
};

// ——————————————————————————————————————————
// CARD PRODUCCIÓN PRINCIPAL
// ——————————————————————————————————————————
const ProduccionCard = ({ evento, idx }) => {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      ref={ref}
      href={`/eventos/${evento.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.15}s`,
      }}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          boxShadow: hovered ? "0 12px 48px rgba(0,0,0,0.7)" : "0 4px 20px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        <img
          src={evento.foto}
          alt={evento.nombre}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-500"
          style={{ width: hovered ? "100%" : "0%" }}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-2xl md:text-3xl font-black text-[#f4f4f4] leading-tight group-hover:text-red-500 transition-colors duration-300">
          {evento.nombre}
        </h3>
        <div className="mt-3 text-sm md:text-base text-gray-400 space-y-1">
          <p>{evento.fecha}</p>
          <p>{evento.lugar}</p>
        </div>
      </div>
    </Link>
  );
};

// ——————————————————————————————————————————
// SECCIÓN PRINCIPAL
// ——————————————————————————————————————————
export default function ProduccionesPage() {
  const principales = eventos;

  return (
    <section id="producciones" className="relative w-full bg-black">

      <Hero />

      <div className="relative w-full py-6 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principales.map((evento, idx) => (
              <ProduccionCard key={evento.slug} evento={evento} idx={idx} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}