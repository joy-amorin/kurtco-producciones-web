"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const producciones = [
  {
    slug: "inauguracion-productora",
    nombre: "Inauguración de la Productora",
    subtitulo: "El comienzo de algo grande",
    fecha: "Marzo 2025",
    lugar: "Buenos Aires",
    cantidadBandas: 3,
    foto: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Inauguración de la productora",
    categoria: "Show en vivo",
    principal: true,
  },
  {
    slug: "segunda-produccion",
    nombre: "Segunda Producción",
    subtitulo: "La escena sigue creciendo",
    fecha: "Junio 2025",
    lugar: "Buenos Aires",
    cantidadBandas: 4,
    foto: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    alt: "Segunda producción",
    categoria: "Show en vivo",
    principal: true,
  },
  {
    slug: "evento-01",
    nombre: "Ciclo de Rock Porteño",
    fecha: "Agosto 2025",
    lugar: "Buenos Aires",
    cantidadBandas: 5,
    foto: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Ciclo de Rock Porteño",
    categoria: "Show en vivo",
    principal: false,
  },
  {
    slug: "evento-02",
    nombre: "Showcase Acústico",
    fecha: "Septiembre 2025",
    lugar: "Buenos Aires",
    cantidadBandas: 3,
    foto: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    alt: "Showcase Acústico",
    categoria: "Acústico",
    principal: false,
  },
  {
    slug: "evento-03",
    nombre: "Noche de Bandas Nuevas",
    fecha: "Octubre 2025",
    lugar: "Buenos Aires",
    cantidadBandas: 6,
    foto: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Noche de Bandas Nuevas",
    categoria: "Show en vivo",
    principal: false,
  },
];

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
  const { videoUrl, youtubeId, fotoFallback } = heroConfig;
  const tieneVideo = videoUrl || youtubeId;

  return (
    <div className="relative w-full h-screen min-h-[560px] overflow-hidden bg-black">
      {videoUrl && (
        <video src={videoUrl} autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70" />
      )}
      {youtubeId && !videoUrl && (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none opacity-60"
          style={{ width: "177.78vh", height: "100vh", minWidth: "100%" }}
          allow="autoplay; encrypted-media"
        />
      )}
      {!tieneVideo && fotoFallback && (
        <img src={fotoFallback} alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50" />
      )}
      {!tieneVideo && !fotoFallback && (
        <div className="absolute inset-0"
          style={{ background: "repeating-linear-gradient(135deg, #080808 0, #080808 20px, #0d0d0d 20px, #0d0d0d 40px)" }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px" }} />

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-mono uppercase tracking-[0.3em]">Producciones</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#f4f4f4] leading-none tracking-tight mb-6">
            Cada show<br />
            <span className="text-red-600">deja marca.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md leading-relaxed font-light mb-10">
            El registro de lo que construimos junto a artistas, bandas y público en cada producción.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="w-4 h-px bg-[#333]" />
              <div className="w-6 h-px bg-red-600" />
              <div className="w-4 h-px bg-[#333]" />
            </div>
            <span className="text-[#444] text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
          </div>
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
      href={`/producciones/${evento.slug}`}
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
          alt={evento.alt}
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
// FILA CINEMATOGRÁFICA
// ——————————————————————————————————————————
const ProduccionRow = ({ evento, idx }) => {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  const [hovered, setHovered] = useState(false);
  const numero = String(idx + 1).padStart(2, "0");

  return (
    <Link
      ref={ref}
      href={`/producciones/${evento.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.08}s`,
      }}
    >
      <div
        className="w-full h-px transition-colors duration-500"
        style={{ background: hovered ? "rgba(220,38,38,0.25)" : "#1a1a1a" }}
      />

      <div className="grid items-center gap-6 md:gap-10 py-8 md:py-10"
        style={{ gridTemplateColumns: "auto auto 1fr auto" }}>

        {/* Número */}
        <div className="hidden md:block w-14 shrink-0">
          <span className="font-black leading-none select-none transition-colors duration-300"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 3vw, 3rem)",
              letterSpacing: "0.05em",
              color: hovered ? "#dc2626" : "#1e1e1e",
            }}>
            {numero}
          </span>
        </div>

        {/* Foto */}
        <div className="relative overflow-hidden shrink-0"
          style={{
            width: "clamp(110px, 16vw, 200px)",
            aspectRatio: "16/10",
            boxShadow: hovered ? "0 8px 32px rgba(220,38,38,0.2)" : "0 4px 20px rgba(0,0,0,0.5)",
            transition: "box-shadow 0.4s",
          }}>
          <img
            src={evento.foto}
            alt={evento.alt}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.08)" : "scale(1)",
              filter: hovered ? "grayscale(0%)" : "grayscale(20%)",
              transition: "transform 0.7s ease, filter 0.5s ease",
            }}
          />
          <div className="absolute inset-0 transition-all duration-300"
            style={{ background: hovered ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.35)" }} />
          <div className="absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-500"
            style={{ width: hovered ? "100%" : "0%" }} />
        </div>

        {/* Título y datos */}
        <div className="flex flex-col justify-center min-w-0">
          <span className="md:hidden font-black text-2xl leading-none mb-3 select-none text-[#1e1e1e]"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}>
            {numero}
          </span>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px bg-red-600 transition-all duration-500"
              style={{ width: hovered ? 24 : 0 }} />
            <span className="text-red-600 text-[10px] font-mono uppercase tracking-[0.3em]">
              {evento.categoria || "Show en vivo"}
            </span>
          </div>
          <h3 className="font-black text-[#f4f4f4] leading-tight mb-3"
            style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}>
            {evento.nombre}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-500">
            <span>{evento.fecha}</span>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <span>{evento.lugar}</span>
          </div>
        </div>

        {/* Flecha */}
        <div className="shrink-0 hidden sm:flex items-center justify-center transition-all duration-300"
          style={{
            width: 44, height: 44,
            border: `1px solid ${hovered ? "#dc2626" : "#1e1e1e"}`,
            background: hovered ? "#dc2626" : "transparent",
          }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            style={{ color: hovered ? "#fff" : "#2a2a2a", transform: hovered ? "translateX(2px)" : "translateX(0)", transition: "transform 0.3s, color 0.3s" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

// ——————————————————————————————————————————
// SECCIÓN PRINCIPAL
// ——————————————————————————————————————————
export default function ProduccionesSection() {
  const headerPrincipalRef = useRef(null);
  const headerPrincipalVisible = useScrollReveal(headerPrincipalRef);
  const headerCatalogoRef = useRef(null);
  const headerCatalogoVisible = useScrollReveal(headerCatalogoRef);

  const principales = producciones.filter(p => p.principal);
  const catalogo = producciones.filter(p => !p.principal);

  return (
    <section id="producciones" className="relative w-full bg-black">

      {/* HERO */}
      <Hero />

      {/* PRODUCCIONES PRINCIPALES */}
      <div className="relative w-full py-20 lg:py-32 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            ref={headerPrincipalRef}
            className="mb-16 lg:mb-20"
            style={{
              opacity: headerPrincipalVisible ? 1 : 0,
              transform: headerPrincipalVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-red-600" />
              <span className="text-red-600 text-xs font-mono uppercase tracking-[0.3em]">Destacadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-[#f4f4f4]">
              Producciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {principales.map((evento, idx) => (
              <ProduccionCard key={evento.slug} evento={evento} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* CATÁLOGO CINEMATOGRÁFICO */}
      {catalogo.length > 0 && (
        <div className="relative w-full py-20 lg:py-32 px-6 md:px-12 lg:px-20"
          style={{ borderTop: "1px solid #111" }}>

          <div className="max-w-7xl mx-auto relative z-10">
            <div
              ref={headerCatalogoRef}
              className="mb-16 lg:mb-20"
              style={{
                opacity: headerCatalogoVisible ? 1 : 0,
                transform: headerCatalogoVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-red-600" />
                <span className="text-red-600 text-xs font-mono uppercase tracking-[0.3em]">Catálogo</span>
              </div>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-[#f4f4f4]">
                  Todos los eventos
                </h2>
                <span className="font-black leading-none select-none"
                  style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#111" }}>
                  {String(catalogo.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div>
              {catalogo.map((evento, idx) => (
                <ProduccionRow key={evento.slug} evento={evento} idx={idx} />
              ))}
              <div className="w-full h-px bg-[#1a1a1a]" />
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex-1 h-px bg-[#111]" />
              <span className="text-[#222] text-[10px] font-mono uppercase tracking-[0.3em]">Más eventos en camino</span>
              <div className="flex-1 h-px bg-[#111]" />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}