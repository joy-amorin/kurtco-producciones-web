"use client";
import React, { useState, useEffect } from "react";
import { eventos } from "@/data/EventosData";

const meses = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const EventosSection = () => {
  const [mesSeleccionado, setMesSeleccionado] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

 // Inicializar en elmes actual
useEffect(() => {
  setMesSeleccionado(new Date().getMonth());
}, []);


  const eventosMes = eventos.filter(
    (e) => new Date(e.fecha).getMonth() === mesSeleccionado
  );

  return (
    <section className="w-full min-h-screen bg-black py-20 px-6">

      {/* Título */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-gray-100 mt-8 mb-25">
          Próximos eventos
        </h1>
      </div>

      {/* Layout: galería a la izquierda, calendario a la derecha */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12">

        {/* Calendario */}
        <div className="lg:w-1/3 bg-[#111] p-6 rounded-md shadow-lg -mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f4f4f4] mb-4 text-center">
            {meses[mesSeleccionado]}
          </h3>

          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: 31 }).map((_, i) => {
              const dia = i + 1;
              const tieneEvento = eventosMes.some(
                (e) => new Date(e.fecha).getUTCDate() === dia
              );
              return (
                <div
                  key={i}
                  className={`py-1.5 sm:py-2 rounded-md text-xs sm:text-sm text-white ${
                    tieneEvento
                      ? "bg-red-600 font-bold shadow-md"
                      : "bg-[#222]"
                  }`}
                >
                  {dia}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="text-red-600 font-bold"
              onClick={() =>
                setMesSeleccionado((prev) => (prev === 0 ? 11 : prev - 1))
              }
            >
              ←
            </button>
            <button
              className="text-red-600 font-bold"
              onClick={() =>
                setMesSeleccionado((prev) => (prev === 11 ? 0 : prev + 1))
              }
            >
              →
            </button>
          </div>
        </div>

        {/* Galería */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 -mt-12">
          {eventosMes.length === 0 ? (
            <p className="text-white text-center col-span-full mt-6">
              No hay eventos programados en este mes
            </p>
          ) : (
            eventosMes.map((evento, idx) => (
              <div key={idx} className="flex flex-col cursor-pointer items-center">

                {/* Contenedor de imagen */}
                <div
                  onClick={() => setSelectedEvent(evento)}
                  className="group relative w-full max-w-[160px] sm:max-w-[180px] aspect-[4/5] overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}
                >
                  <img
                    src={evento.foto}
                    alt={evento.nombre}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    style={{
                      boxShadow: `
                        inset 0 0 40px rgba(0,0,0,0.3),
                        inset 0 0 20px rgba(255,0,0,0.15)
                      `,
                    }}
                  />
                  {/* Overlay con "Ver flyer" */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver Flyer
                    </span>
                  </div>
                </div>

                {/* Nombre del evento */}
                <div
                  onClick={() => setSelectedEvent(evento)}
                  className="mt-2 p-2 bg-[#111] rounded-sm shadow-md text-center w-full max-w-[160px] sm:max-w-[180px] cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                >
                  <h3 className="text-[11px] sm:text-xs font-bold text-[#f4f4f4] leading-tight">
                    {evento.nombre}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#111] rounded-lg w-full max-w-4xl max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-3 right-3 z-20 text-red-600 hover:text-red-500 font-bold text-2xl bg-black/70 rounded-full w-9 h-9 flex items-center justify-center transition-all"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>

            {/* Layout: Flyer a la izquierda, info a la derecha en desktop */}
            <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-6">
              {/* Flyer grande */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={selectedEvent.foto}
                  alt={selectedEvent.nombre}
                  className="w-full max-w-[300px] sm:max-w-[360px] h-auto object-contain rounded-md shadow-2xl"
                />
              </div>

              {/* Información del evento */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  {selectedEvent.nombre}
                </h3>
                <div className="space-y-2 sm:space-y-3 text-white/90">
                  <p className="text-sm sm:text-base">
                    <span className="text-red-600 font-bold">Banda:</span> {selectedEvent.banda}
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="text-red-600 font-bold">Lugar:</span> {selectedEvent.lugar}
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="text-red-600 font-bold">Fecha:</span>{" "}
                    {new Date(selectedEvent.fecha).getUTCDate()} de{" "}
                    {meses[new Date(selectedEvent.fecha).getMonth()]} de{" "}
                    {new Date(selectedEvent.fecha).getFullYear()}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm leading-relaxed">
                      {selectedEvent.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default EventosSection;
