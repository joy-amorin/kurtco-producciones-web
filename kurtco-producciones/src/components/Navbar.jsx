"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react"; // para la flechita

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);       
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false)
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quienes Somos", href: "/#about" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Bandas", href: "/#bandas" },
    { name: "Eventos", href: "/eventos", submenu: [
        { name: "Próximos eventos", href: "/eventos/proximos" },
        { name: "Eventos realizados", href: "/eventos/realizados" },
      ] 
    },
    { name: "Contacto", href: "/#contacto" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsEventsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#111111] text-[#f4f4f4] fixed w-full z-[999] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/Logo_KurtCo-Rojo.svg" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsEventsOpen(!isEventsOpen)}
                    className="flex items-center gap-1 hover:text-[#ff003c] transition-colors duration-150"
                  >
                    {link.name} 
                    {isEventsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isEventsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#222222] shadow-lg rounded-md z-50"
                         style={{ right: 'auto', minWidth: '12rem' }}
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-[#f4f4f4] hover:bg-[#ff003c] hover:text-[#111111] transition-colors duration-150"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#ff003c] transition-colors duration-150"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f4f4f4] hover:text-[#ff003c] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] space-y-2 px-4 pt-2 pb-4 font-bold">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.name}>
                <button
                  onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                  className="block w-full text-left hover:text-[#ff003c] transition-colors duration-150 flex justify-between items-center"
                >
                  {link.name} 
                  {isMobileEventsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {isMobileEventsOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => { setIsOpen(false); setIsMobileEventsOpen(false); }}
                        className="block text-[#f4f4f4] hover:text-[#ff003c] transition-colors duration-150"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#f4f4f4] hover:text-[#ff003c] transition-colors duration-150"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
