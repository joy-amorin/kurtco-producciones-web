import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/app/quienes-somos/About'
import Servicios from '@/app/servicios/Servicios'
import Bandas from '@/app/bandas/Bandas'
import Contacto from '@/app/contacto/Contacto'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <Bandas />
      <Contacto /> 
    </>
  );
}
