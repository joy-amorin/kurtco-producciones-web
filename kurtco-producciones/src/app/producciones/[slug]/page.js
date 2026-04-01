import ProduccionDetalle from "./Lanzamiento2"; // ajusta si cambia el nombre
import { producciones } from "@/data/produccionesData";

export default async function Page({ params }) {
  const { slug } = await params;
  

  const produccion = producciones.find(p => p.slug === slug);

  if (!produccion) {
    return <div>No encontrado</div>;
  }

  return <ProduccionDetalle produccion={produccion} />;
}