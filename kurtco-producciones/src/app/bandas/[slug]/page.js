import Link from "next/link";
import BuickBanda from "./BuickBanda";
import ZapaBanda from "./ZapaBanda";
import SalioLaFotoBanda from "./SalioLaFotoBanda"
import JohnnyMoonBanda from "./JohnnyMoonBanda"
import RetroalcanceBanda from "./RetroalcanceBanda"

const bandasMap = {
  "buick-8": BuickBanda,
  "la-zapa": ZapaBanda,
  "salio-la-foto": SalioLaFotoBanda,
  "johnny-moon": JohnnyMoonBanda,
  "retroalcance": RetroalcanceBanda
};

export default async function BandDetail({ params }) {
  const { slug } = await params;
  const BandaComponent = bandasMap[slug];

  if (!BandaComponent) {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-xl mb-6">Banda no encontrada.</p>
        <Link
          href="/#bandas"
          className="text-red-600 underline hover:text-red-400 transition-colors"
        >
          ← Volver al listado
        </Link>
      </section>
    );
  }

  return <BandaComponent />;
}
