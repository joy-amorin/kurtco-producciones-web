import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/app/quienes-somos/About'
import Servicios from '@/app/servicios/Servicios'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
    </>
  );
}
