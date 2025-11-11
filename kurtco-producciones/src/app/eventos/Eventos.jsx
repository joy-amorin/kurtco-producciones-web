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

  // Al cargar, seleccionar el primer mes que tenga eventos
  useEffect(() => {
    const mesesConEventos = eventos
      .map(e => new Date(e.fecha).getMonth())
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort((a,b) => a - b);

    if (mesesConEventos.length > 0) {
      setMesSeleccionado(mesesConEventos[0]);
    } else {
      setMesSeleccionado(new Date().getMonth());
    }
  }, []);

  const eventosMes = eventos.filter(
    (e) => new Date(e.fecha).getMonth() === mesSeleccionado
  );

  return (
    <section
      id="eventos"
      className="w-full min-h-screen bg-black py-20 lg:py-32 px-6 md:px-12 lg:px-20"
    >
      {/* Título */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24 text-center -mt-8">
        <h2 className="text-5xl font-black text-[#f4f4f4] tracking-tight leading-none mb-4">
          EVENTOS
        </h2>
        <div className="w-32 h-1 bg-red-600 mx-auto"></div>
      </div>

      {/* Layout: galería a la izquierda, calendario a la derecha */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12">
        {/* Calendario */}
        <div className="lg:w-1/3 bg-[#111] p-6 rounded-md shadow-lg -mt-12">
          <h3 className="text-2xl font-bold text-[#f4f4f4] mb-4 text-center">
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
                  className={`py-2 rounded-md text-white ${
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
                setMesSeleccionado((prev) => {
                  const prevMes = prev === 0 ? 11 : prev - 1;
                  return prevMes;
                })
              }
            >
              ←
            </button>
            <button
              className="text-red-600 font-bold"
              onClick={() =>
                setMesSeleccionado((prev) => {
                  const nextMes = prev === 11 ? 0 : prev + 1;
                  return nextMes;
                })
              }
            >
              →
            </button>
          </div>
        </div>

        {/* Galería */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 -mt-12">
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
                  className="group relative w-full max-w-[220px] aspect-[4/5] overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}
                >
                  <img
                    src={evento.foto}
                    alt={evento.nombre}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        inset 0 0 40px rgba(0,0,0,0.3),
                        inset 0 0 20px rgba(255,0,0,0.15)
                      `,
                    }}
                  />
                </div>
                {/* Nombre + "Ver detalle" */}
                <div
                  onClick={() => setSelectedEvent(evento)}
                  className="mt-2 p-2 bg-[#111] rounded-sm shadow-md text-center w-full max-w-[220px] cursor-pointer"
                >
                  <h3 className="text-sm font-bold text-[#f4f4f4] leading-tight">
                    {evento.nombre}
                  </h3>
                  <span className="text-sm text-red-600 font-bold">Ver detalle</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#111] p-6 rounded-md max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-xl"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <img
              src={selectedEvent.foto}
              alt={selectedEvent.nombre}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-black text-white mb-2">
              {selectedEvent.nombre}
            </h3>
            <p className="text-sm text-white/80 mb-1">{selectedEvent.banda}</p>
            <p className="text-sm text-white/80 mb-1">{selectedEvent.lugar}</p>
            <p className="text-sm text-white/80 mb-2">
              {new Date(selectedEvent.fecha).getUTCDate()} de {meses[new Date(selectedEvent.fecha).getMonth()]} de {new Date(selectedEvent.fecha).getFullYear()}
            </p>
            <p className="text-white">{selectedEvent.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventosSection;
