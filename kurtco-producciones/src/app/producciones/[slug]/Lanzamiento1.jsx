"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";


const useScrollReveal = (ref) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return visible;
};

// ——————————————————————————————————————————
// LIGHTBOX
// ——————————————————————————————————————————
const Lightbox = ({ fotos, indice, onCerrar, onAnterior, onSiguiente }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "ArrowRight") onSiguiente();
      if (e.key === "ArrowLeft") onAnterior();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onCerrar, onSiguiente, onAnterior]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.97)" }}
      onClick={onCerrar}
    >
      {/* Cerrar */}
      <button
        className="absolute top-6 right-6 text-[#f4f4f4] hover:text-red-600 transition-colors"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        onClick={onCerrar}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Contador */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[#444] text-xs font-mono uppercase tracking-widest">
        {indice + 1} / {fotos.length}
      </div>

      {/* Imagen */}
      <img
        src={fotos[indice]}
        alt=""
        style={{ maxHeight: "85vh", maxWidth: "88vw", objectFit: "contain" }}
        onClick={e => e.stopPropagation()}
      />

      {/* Nav anterior */}
      {fotos.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200"
            style={{ width: 48, height: 48, border: "1px solid #222", background: "rgba(0,0,0,0.7)", color: "#f4f4f4", cursor: "pointer", fontSize: 22 }}
            onClick={e => { e.stopPropagation(); onAnterior(); }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#dc2626"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}
          >‹</button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200"
            style={{ width: 48, height: 48, border: "1px solid #222", background: "rgba(0,0,0,0.7)", color: "#f4f4f4", cursor: "pointer", fontSize: 22 }}
            onClick={e => { e.stopPropagation(); onSiguiente(); }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#dc2626"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}
          >›</button>
        </>
      )}
    </div>
  );
};

// ——————————————————————————————————————————
// PÁGINA DETALLE
// ——————————————————————————————————————————
export default function ProduccionDetalle({ produccion }) {
  const [lightboxIndice, setLightboxIndice] = useState(null);
  const headerRef = useRef(null);
  const headerVisible = useScrollReveal(headerRef);
  const contentRef = useRef(null);
  const contentVisible = useScrollReveal(contentRef);
  const galeriaRef = useRef(null);
  const galeriaVisible = useScrollReveal(galeriaRef);

  const tieneYoutube = !!produccion.youtubeId;
  const tieneVideoPropio = !!produccion.videoUrl;
  const fotos = produccion.fotos || [];

  const abrirLightbox = (idx) => setLightboxIndice(idx);
  const cerrarLightbox = () => setLightboxIndice(null);
  const siguiente = () => setLightboxIndice(i => (i + 1) % fotos.length);
  const anterior = () => setLightboxIndice(i => (i - 1 + fotos.length) % fotos.length);

  return (
    <div className="relative w-full min-h-screen bg-black text-[#f4f4f4]">

      {/* Ruido de fondo */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px" }} />

      <div className="relative z-10">

        {/* ——— HEADER ——— */}
        <div
          ref={headerRef}
          className="px-6 md:px-12 lg:px-20 pt-16 lg:pt-24 pb-12 lg:pb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Volver */}
            <Link
              href="/producciones"
              className="inline-flex items-center gap-2 mb-10 transition-colors duration-200 group"
              style={{ color: "#555", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#dc2626"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span className="text-xs font-mono uppercase tracking-[0.25em]">Volver</span>
            </Link>

            {/* Categoría */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-px bg-red-600" />
              <span className="text-red-600 text-xs font-mono uppercase tracking-[0.3em]">
                {produccion.categoria || "Show en vivo"}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#f4f4f4] leading-none tracking-tight mb-4">
              {produccion.nombre}
            </h1>

            {/* Subtítulo */}
            {produccion.subtitulo && (
              <p className="text-gray-400 text-lg md:text-xl font-light italic mb-8">
                {produccion.subtitulo}
              </p>
            )}

            {/* Meta chips */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                produccion.fecha,
                produccion.lugar,
                produccion.cantidadBandas ? `${produccion.cantidadBandas} bandas` : null,
              ].filter(Boolean).map((chip, i, arr) => (
                <React.Fragment key={i}>
                  <span className="text-gray-500 text-sm md:text-base">{chip}</span>
                  {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-[#333]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ——— VIDEO + GALERÍA MASONRY ——— */}
        <div
          ref={contentRef}
          className="px-6 md:px-12 lg:px-20 pb-16"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-start">

              {/* — VIDEO — */}
              <div className="flex flex-col gap-4">

                {/* Embed YouTube o video propio */}
                {tieneYoutube && (
                  <div style={{ position: "relative", paddingBottom: "56.25%", overflow: "hidden", background: "#111" }}>
                    <iframe
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                      src={`https://www.youtube.com/embed/${produccion.youtubeId}`}
                      title={produccion.nombre}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {tieneVideoPropio && !tieneYoutube && (
                  <div style={{ position: "relative", background: "#111" }}>
                    <video
                      src={produccion.videoUrl}
                      controls
                      style={{ width: "100%", display: "block", maxHeight: 480, objectFit: "cover" }}
                    />
                  </div>
                )}

                {/* Sin video — placeholder */}
                {!tieneYoutube && !tieneVideoPropio && (
                  <div className="flex items-center justify-center"
                    style={{ aspectRatio: "16/9", background: "repeating-linear-gradient(135deg, #0a0a0a 0, #0a0a0a 12px, #111 12px, #111 24px)" }}>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ border: "1.5px solid #dc2626" }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#dc2626" }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="text-[#333] text-xs font-mono uppercase tracking-widest">Video próximamente</span>
                    </div>
                  </div>
                )}

                {/* Descripción debajo del video */}
                <div className="pt-2">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {produccion.descripcion}
                  </p>
                </div>

                {/* Bandas */}
                {produccion.bandas && produccion.bandas.length > 0 && (
                  <div className="pt-4" style={{ borderTop: "1px solid #1a1a1a" }}>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#444] mb-3">
                      Bandas en escena
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {produccion.bandas.map((banda, i) => (
                        <span
                          key={i}
                          className="text-sm text-[#f4f4f4] font-mono transition-colors duration-200"
                          style={{ border: "1px solid #222", padding: "6px 14px" }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = "#dc2626"; e.currentTarget.style.color = "#ef4444"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.color = "#f4f4f4"; }}
                        >
                          {banda}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* — GALERÍA MASONRY — */}
              {fotos.length > 0 && (
                <div
                  style={{
                    columns: fotos.length >= 4 ? "2 140px" : "1",
                    columnGap: "8px",
                  }}
                >
                  {fotos.map((foto, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden cursor-pointer"
                      style={{
                        marginBottom: "8px",
                        breakInside: "avoid",
                        opacity: contentVisible ? 1 : 0,
                        transform: contentVisible ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.6s ease ${0.1 + i * 0.06}s, transform 0.6s ease ${0.1 + i * 0.06}s`,
                      }}
                      onClick={() => abrirLightbox(i)}
                    >
                      <img
                        src={foto}
                        alt={`Foto ${i + 1}`}
                        style={{
                          width: "100%",
                          display: "block",
                          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease",
                          filter: "grayscale(15%) brightness(0.8)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = "scale(1.04)";
                          e.currentTarget.style.filter = "grayscale(0%) brightness(1)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "grayscale(15%) brightness(0.8)";
                        }}
                      />

                      {/* Overlay hover */}
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(0,0,0,0.4)" }}
                      >
                        <div className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "#fff", fontSize: 18 }}>
                          +
                        </div>
                      </div>

                      {/* Línea roja */}
                      <div
                        className="absolute bottom-0 left-0 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-400"
                        style={{ width: "0%" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ——— DIVISOR ——— */}
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6" style={{ borderTop: "1px solid #111", paddingTop: 48, paddingBottom: 48 }}>
              <div className="flex-1 h-px bg-[#111]" />
              <span className="text-[#222] text-[10px] font-mono uppercase tracking-[0.3em]">
                {produccion.fecha} · {produccion.lugar}
              </span>
              <div className="flex-1 h-px bg-[#111]" />
            </div>
          </div>
        </div>

      </div>

      {/* LIGHTBOX */}
      {lightboxIndice !== null && (
        <Lightbox
          fotos={fotos}
          indice={lightboxIndice}
          onCerrar={cerrarLightbox}
          onSiguiente={siguiente}
          onAnterior={anterior}
        />
      )}
    </div>
  );
}