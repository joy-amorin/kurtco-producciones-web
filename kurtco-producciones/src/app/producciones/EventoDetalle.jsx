import React, { useState, useEffect, useRef } from 'react';

// ——— Iconos ———
const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const PlayIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// ——— Lightbox de fotos ———
const Lightbox = ({ fotos, indiceInicial, onCerrar }) => {
  const [indice, setIndice] = useState(indiceInicial);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onCerrar();
      if (e.key === 'ArrowRight') setIndice(i => (i + 1) % fotos.length);
      if (e.key === 'ArrowLeft') setIndice(i => (i - 1 + fotos.length) % fotos.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fotos.length, onCerrar]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onCerrar}
    >
      {/* Botón cerrar */}
      <button
        className="absolute top-6 right-6 text-[#f4f4f4] hover:text-red-600 transition-colors z-10"
        onClick={onCerrar}
      >
        <CloseIcon />
      </button>

      {/* Contador */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[#888] text-sm font-mono">
        {indice + 1} / {fotos.length}
      </div>

      {/* Imagen */}
      <img
        src={fotos[indice]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={e => e.stopPropagation()}
      />

      {/* Navegar */}
      {fotos.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-[#333] hover:border-red-600 text-[#f4f4f4] hover:text-red-600 transition-all bg-black/60"
            onClick={e => { e.stopPropagation(); setIndice(i => (i - 1 + fotos.length) % fotos.length); }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-[#333] hover:border-red-600 text-[#f4f4f4] hover:text-red-600 transition-all bg-black/60"
            onClick={e => { e.stopPropagation(); setIndice(i => (i + 1) % fotos.length); }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

// ——— Contador animado ———
const CountUp = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-black text-red-600 mb-2">{count}</div>
      <div className="text-[#888] text-xs font-mono uppercase tracking-widest">{label}</div>
    </div>
  );
};

// ——— Página completa del evento ———
const EventoDetalle = ({ evento, onVolver }) => {
  const [lightboxIndice, setLightboxIndice] = useState(null);
  const [videoModalAbierto, setVideoModalAbierto] = useState(false);

  // Scroll al top al abrir
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tieneFotos = evento.fotos && evento.fotos.length > 0;
  const tieneVideoPropio = !!evento.videoPropio;
  const tieneYoutube = !!evento.youtubeId;
  const tieneVideo = tieneVideoPropio || tieneYoutube;

  return (
    <div className="relative w-full min-h-screen bg-black">

      {/* ——————————————————————————————
          HERO
      —————————————————————————————— */}
      <div className="relative h-[60vh] lg:h-[75vh] overflow-hidden">

        {/* Imagen o video de fondo */}
        {tieneVideoPropio ? (
          <video
            src={evento.videoPropio}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : evento.fotoPrincipal ? (
          <img
            src={evento.fotoPrincipal}
            alt={evento.titulo}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#111]" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        {/* Botón volver */}
        <button
          onClick={onVolver}
          className="absolute top-6 left-6 md:left-12 lg:left-20 flex items-center gap-2 text-[#f4f4f4] hover:text-red-600 transition-colors z-10 group"
        >
          <ArrowLeftIcon />
          <span className="text-sm font-mono uppercase tracking-widest group-hover:underline">Volver</span>
        </button>

        {/* Título sobre el hero */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-mono uppercase tracking-[0.3em]">{evento.fecha}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#f4f4f4] leading-none tracking-tight mb-3">
            {evento.titulo}
          </h1>
          <p className="text-[#aaa] text-lg lg:text-xl font-light">{evento.subtitulo}</p>
        </div>
      </div>

      {/* ——————————————————————————————
          CUERPO
      —————————————————————————————— */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24">

        {/* ——— Info + Descripción ——— */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">

          {/* Descripción */}
          <div className="lg:col-span-2">
            <p className="text-[#ccc] text-lg lg:text-xl leading-relaxed mb-8">
              {evento.descripcion}
            </p>

            {/* Bandas */}
            {evento.bandas && evento.bandas.length > 0 && (
              <div>
                <h3 className="text-[#f4f4f4] text-xs font-mono uppercase tracking-widest mb-4">
                  Bandas en escena
                </h3>
                <div className="flex flex-wrap gap-2">
                  {evento.bandas.map((banda, i) => (
                    <span
                      key={i}
                      className="border border-[#333] px-4 py-2 text-sm text-[#f4f4f4] font-mono hover:border-red-600 hover:text-red-500 transition-colors"
                    >
                      {banda}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <div
              className="p-8 rounded-sm"
              style={{ background: '#111111', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-red-600" />
                <span className="text-red-600 text-xs font-mono uppercase tracking-widest">La noche en números</span>
              </div>
              <div className="space-y-8">
                <CountUp target={evento.cantidadBandas} label="Bandas" />
                {evento.asistentes && <CountUp target={evento.asistentes} label="Personas" />}
                <CountUp target={1} label="Noche" />
              </div>

              {/* Fecha y lugar */}
              <div className="mt-8 pt-8 border-t border-[#222] space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#666] font-mono uppercase tracking-wider">Fecha</span>
                  <span className="text-[#f4f4f4]">{evento.fechaCompleta}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#666] font-mono uppercase tracking-wider">Lugar</span>
                  <span className="text-[#f4f4f4]">{evento.lugar}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ——— VIDEO ——— */}
        {tieneVideo && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-red-600" />
              <h2 className="text-2xl font-black text-[#f4f4f4] uppercase tracking-wide">Video</h2>
            </div>

            {/* YouTube embed */}
            {tieneYoutube && (
              <div className="relative w-full rounded-sm overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${evento.youtubeId}`}
                  title={evento.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Video propio (si no hay YouTube) */}
            {tieneVideoPropio && !tieneYoutube && (
              <div className="relative group cursor-pointer" onClick={() => setVideoModalAbierto(true)}>
                <video
                  src={evento.videoPropio}
                  className="w-full rounded-sm"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ——— GALERÍA DE FOTOS ——— */}
        {tieneFotos && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-red-600" />
              <h2 className="text-2xl font-black text-[#f4f4f4] uppercase tracking-wide">Galería</h2>
              <span className="text-[#666] text-sm font-mono ml-auto">{evento.fotos.length} fotos</span>
            </div>

            {/* Grid masonry simulado con CSS columns */}
            <div
              style={{
                columnCount: window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3,
                columnGap: '12px',
              }}
            >
              {evento.fotos.map((foto, i) => (
                <div
                  key={i}
                  className="relative mb-3 overflow-hidden rounded-sm group cursor-pointer break-inside-avoid"
                  onClick={() => setLightboxIndice(i)}
                >
                  <img
                    src={foto}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">+</span>
                    </div>
                  </div>
                  {/* Línea roja inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ——— Tags ——— */}
        {evento.tags && evento.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-8 border-t border-[#1a1a1a]">
            {evento.tags.map((tag, i) => (
              <span key={i} className="text-[#444] text-xs font-mono uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* ——— Lightbox ——— */}
      {lightboxIndice !== null && (
        <Lightbox
          fotos={evento.fotos}
          indiceInicial={lightboxIndice}
          onCerrar={() => setLightboxIndice(null)}
        />
      )}

      {/* ——— Modal video propio a pantalla completa ——— */}
      {videoModalAbierto && tieneVideoPropio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setVideoModalAbierto(false)}
        >
          <button
            className="absolute top-6 right-6 text-[#f4f4f4] hover:text-red-600 transition-colors"
            onClick={() => setVideoModalAbierto(false)}
          >
            <CloseIcon />
          </button>
          <video
            src={evento.videoPropio}
            controls
            autoPlay
            className="max-h-[85vh] max-w-[90vw] rounded-sm"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EventoDetalle;
