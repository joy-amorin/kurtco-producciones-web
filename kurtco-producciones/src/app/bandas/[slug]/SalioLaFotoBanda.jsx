import Link from "next/link";

export default function SalioLaFotoBanda() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden shadow-lg mt-16">
          <img
             src="/bandas-fotos/salio-la-foto-portada.jpg"
            alt="Banda buick-8"
            className="w-full h-full object-cover"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(0,0,0,0.4),
                inset 0 0 30px rgba(255,0,0,0.2)
              `
            }}
          />
        </div>

        {/* Bio */}
         <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-red-600 mb-3">Salió la foto</h1>
          
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
             Salió la Foto es una banda de rock uruguaya formada a finales de 2023. Lo que comenzó como un proyecto entre amigos —Juan, Gonza y Cococho— 
             fue tomando forma hasta consolidarse a mediados de 2024 con la incorporación de Esteban y Giuliano, completando así la formación 
             actual. Desde sus inicios, la banda se enfocó en crear música original con un sonido que combina la potencia del rock clásico, 
             la guitarra electroacústica y la distorsión eléctrica, acompañados por un bajo potente y una batería sólida.
          </p>
           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Su propuesta aborda letras vinculadas a la realidad social y las experiencias cotidianas, 
            buscando resonar con la audiencia desde un lugar honesto y directo. 
            El debut en vivo fue el 30 de noviembre de 2024 en <em>The Shannon</em>, marcando el inicio de una nueva etapa. 
            Durante 2025, Salió la Foto continúa presentándose en el circuito under montevideano, buscando visibilidad, 
            nuevas conexiones y consolidar su identidad.
          </p>

           <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
            Integrantes:</p> 
            <ul className="text-sm sm:text-base md:text-base lg:text-sm xl:text-lg leading-relaxed text-[#f4f4f4] mb-3">
              <li>Juan Pablo López: guitarra y coros</li>
              <li>Claudio "Cococho" Arosa: voz</li>
              <li>Esteban Louise: guitarra</li>
              <li>Gonzalo Ferna: batería</li>
              <li>Giuliano Dorelo: bajo</li>
            </ul>


          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10 mt-8" >
            <a
              href="https://www.instagram.com/saliolafoto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@Sali%C3%B3lafoto"
              target="_blank"
              rel="noopener noreferrer"
             className="text-sm sm:text-base lg:text-sm px-3 sm:px-5 lg:px-4 py-2 sm:py-3 lg:py-2 border-2 border-red-600 text-red-600 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
            >
              YouTube
            </a>
          </div>

          {/* Volver */}
          <Link
            href="/#bandas"
            className="text-red-600 underline hover:text-red-400 transition-colors"
          >
            ← Volver al listado de bandas
          </Link>
        </div>
      </div>
       {/* Enlaces embebidos */}
        <div className="flex flex-col md:flex-row w-full mt-10 gap-6">

          {/* YouTube */}
          <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3 shadow-md  flex justify-center">
            <iframe
              className="w-full rounded-lg"
              style={{ height: "360px" }}
              src="https://www.youtube.com/embed/O7BUh5G5T70?si=94YjOiaHlEZ_afA7" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* YouTube */}
          <div className="w-full h-full md:w-1/2 bg-[#111] rounded-2xl p-3 shadow-md  flex justify-center">
            <iframe
              className="w-full rounded-lg"
              style={{ height: "360px" }}
             src="https://www.youtube.com/embed/MhZXk2muYX4?si=I2H1Ad1_6nnTNHyg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </section>
  );
}
