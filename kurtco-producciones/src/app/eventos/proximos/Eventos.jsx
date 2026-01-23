"use client";
import React, { useState, useEffect } from "react";
import { eventos } from "@/data/EventosData";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const meses = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

// 👉 Helper para fechas locales (evitar problemas de zona horaria)
const parseLocalDate = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const EventosSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Eventos del mes actual
  const eventosDelMes = eventos.filter(
    (e) =>
      parseLocalDate(e.fecha).getMonth() === currentMonth &&
      parseLocalDate(e.fecha).getFullYear() === currentYear
  );

  const diasConEventos = eventosDelMes.map(e =>
    parseLocalDate(e.fecha)
  );

  // Seleccionar automáticamente el primer día con evento del mes
  useEffect(() => {
    if (eventosDelMes.length > 0) {
      setSelectedDate(parseLocalDate(eventosDelMes[0].fecha));
    } else {
      setSelectedDate(null);
    }
  }, [currentMonth, currentYear]);

  // Eventos del día seleccionado
  const eventosDelDia = selectedDate
    ? eventos.filter(
        e =>
          parseLocalDate(e.fecha).toDateString() ===
          selectedDate.toDateString()
      )
    : [];

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black py-20 px-6">

      {/* Título */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-gray-100 mt-8 mb-25">
          Próximos eventos
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 justify-center">

        {/* Calendario */}
        <div className="lg:w-1/3 lg:max-w-sm bg-[#111] p-6 rounded-md shadow-lg -mt-12 text-center mx-auto lg:mx-0">
          
          {/* Header personalizado con flechas */}
          <div className="flex items-center justify-between mb-6 px-2">
            <button
              onClick={goToPreviousMonth}
              className="text-red-600 hover:text-red-500 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5"
              aria-label="Mes anterior"
            >
              <ChevronLeft size={26} strokeWidth={2.5} />
            </button>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#f4f4f4] tracking-wide">
              {meses[currentMonth]} {currentYear}
            </h3>
            
            <button
              onClick={goToNextMonth}
              className="text-red-600 hover:text-red-500 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5"
              aria-label="Mes siguiente"
            >
              <ChevronRight size={26} strokeWidth={2.5} />
            </button>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .custom-calendar .rdp-caption {
              display: none;
            }
            
            .custom-calendar .rdp-nav {
              display: none;
            }
            
            .custom-calendar .rdp-day_today:not(.rdp-day_selected) .rdp-day_button {
              color: #dc2626 !important;
              font-weight: bold;
              border: 2px solid #dc2626;
              border-radius: 6px;
            }
            
            .custom-calendar .rdp-day_button:hover {
              background-color: #1a1a1a !important;
              transform: scale(1.05);
              transition: all 0.2s;
            }
            
            .custom-calendar .rdp-day_button {
              border-radius: 6px;
              transition: all 0.2s;
            }
            
            .custom-calendar .rdp-head_cell {
              color: #dc2626;
              font-weight: 600;
              text-transform: uppercase;
              font-size: 0.7rem;
              letter-spacing: 0.5px;
            }
            
            .custom-calendar .rdp-months {
              padding: 0.5rem;
            }
          `}} />

          <DayPicker
            locale={es}
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={new Date(currentYear, currentMonth)}
            modifiers={{
              hasEvent: diasConEventos
            }}
            modifiersClassNames={{
              hasEvent: "bg-red-600 text-white font-bold shadow-md"
            }}
            className="mx-auto text-white custom-calendar"
            classNames={{
              months: "flex justify-center",
              month: "space-y-4",
              table: "w-full border-collapse",
              head_row: "flex",
              head_cell: "text-white/70 w-9 text-xs font-bold",
              row: "flex w-full mt-2",
              cell: "w-9 h-9 text-sm text-white flex items-center justify-center rounded-md cursor-pointer",
              day_outside: "text-white/30",
            }}
          />   
        </div>

        {/* Galería */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 -mt-12">
          {eventosDelDia.length === 0 ? (
            <p className="text-white text-center col-span-full mt-6">
              {eventosDelMes.length === 0 
                ? "No hay eventos programados en este mes"
                : selectedDate
                ? "No hay eventos programados para este día"
                : "Seleccione un día"}
            </p>
          ) : (
            eventosDelDia.map((evento, idx) => (
              <div key={idx} className="flex flex-col cursor-pointer items-center">

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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver Flyer
                    </span>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedEvent(evento)}
                  className="mt-2 p-2 bg-[#111] rounded-sm shadow-md text-center w-full max-w-[160px] sm:max-w-[180px] hover:bg-[#1a1a1a] transition-colors"
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
            className="bg-[#111] rounded-lg max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-2xl xl:mt-10 max-h-[75vh] md:max-h-[80vh] lg:max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-20 text-red-600 hover:text-red-500 font-bold text-2xl bg-black/70 rounded-full w-9 h-9 flex items-center justify-center"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-6">
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={selectedEvent.foto}
                  alt={selectedEvent.nombre}
                  className="w-full max-w-[300px] sm:max-w-[360px] rounded-md shadow-2xl"
                />
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  {selectedEvent.nombre}
                </h3>
                <div className="space-y-2 text-white/90">
                  <p><span className="text-red-600 font-bold">Banda:</span> {selectedEvent.banda}</p>
                  <p><span className="text-red-600 font-bold">Lugar:</span> {selectedEvent.lugar}</p>
                  <p>
                    <span className="text-red-600 font-bold">Fecha:</span>{" "}
                    {parseLocalDate(selectedEvent.fecha).getDate()} de{" "}
                    {meses[parseLocalDate(selectedEvent.fecha).getMonth()]} de{" "}
                    {parseLocalDate(selectedEvent.fecha).getFullYear()}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm">{selectedEvent.descripcion}</p>
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