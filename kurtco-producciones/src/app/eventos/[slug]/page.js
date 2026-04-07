import Link from "next/link";
import Lanzamiento1 from "./Lanzamiento1";
import Lanzamiento2 from "./Lanzamiento2";
import { eventos } from "@/data/produccionesData";

const produccionesMap = {
  "primer-lanzamiento": Lanzamiento1,
  "segundo-lanzamiento": Lanzamiento2,
};

export default async function ProduccionDetail({ params }) {
  const { slug } = params;

  const ProduccionComponent = produccionesMap[slug];
  const produccion = eventos.find(p => p.slug === slug);

  if (!ProduccionComponent) {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-xl mb-6">Evento no encontrado.</p>
        <Link
          href="/producciones"
          className="text-red-600 underline hover:text-red-400 transition-colors"
        >
          ← Volver al listado
        </Link>
      </section>
    );
  }

  return <ProduccionComponent produccion={produccion} />;
}