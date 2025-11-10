"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quienes Somos", href: "/#about" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Bandas", href: "/#bandas" },
    { name: "Proyectos", href: "/projects" },
    { name: "Prensa", href: "/press" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav className="bg-[#111111] text-[#f4f4f4] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/Logo_KurtCo-Rojo.svg" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#ff003c] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f4f4f4] hover:text-#ff003c] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] space-y-2 px-4 pt-2 pb-4 font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-[#f4f4f4] hover:text-[#9340ff] transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
