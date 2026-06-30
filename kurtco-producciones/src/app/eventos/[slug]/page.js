import Link from "next/link";
import ProduccionDetalle from "./ProduccionDetalle";
import { eventos } from "@/data/produccionesData";


export default await async function ProduccionDetail({ params }) {
  const { slug } = await params;

  const produccion = eventos.find(p => p.slug === slug);

  if (!produccion) {
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

  return <ProduccionDetalle produccion={produccion} />;
}