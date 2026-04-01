"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Cinematography", href: "/cinematography" },
  ];

  return (
    <div className="fixed top-0 w-full z-[100] flex justify-center pointer-events-none">
      <nav
        className={`mt-6 transition-all duration-1000 ease-in-out flex items-center justify-between pointer-events-auto
        ${
          scrolled
            ? "w-[95%] md:w-[90%] lg:w-[85%] bg-[#011425]/40 backdrop-blur-2xl py-3 px-8 rounded-full border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "w-full bg-transparent py-8 px-12 md:px-20 border-transparent"
        }`}
      >
        {/* Branding - Kinetic Logo */}
        <Link href="/" className="group flex flex-col">
          <h1
            className={`font-serif tracking-[0.3em] uppercase leading-none transition-all duration-700
            ${scrolled ? "text-sm md:text-xl" : "text-xl md:text-3xl text-white"}
          `}
          >
            Ocean{" "}
            <span className="italic font-extralight lowercase text-[#5C7C89]">
              of
            </span>{" "}
            Orchid
          </h1>
          {!scrolled && (
            <p className="text-[7px] uppercase tracking-[0.9em] mt-2 text-[#5C7C89]/60 font-bold group-hover:tracking-[1.1em] transition-all duration-700">
              Visual Collective
            </p>
          )}
        </Link>

        {/* Navigation links - Minimalist Floating Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group/link">
                  <Link
                    href={link.href}
                    className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500
                      ${isActive ? "text-[#5C7C89]" : "text-white/50 hover:text-white"}
                    `}
                  >
                    {link.name}
                  </Link>
                  {/* Magnetic Dot Indicator */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5C7C89] transition-all duration-500 
                    ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover/link:opacity-50 group-hover/link:scale-100"}
                  `}
                  ></span>
                </li>
              );
            })}
          </ul>

          {/* Inquiry Button - Liquid Morphing Effect */}
          <Link
            href="/contact"
            className={`group relative overflow-hidden transition-all duration-700 
              ${
                scrolled
                  ? "bg-white text-[#011425] px-6 py-2 rounded-full text-[8px]"
                  : "border border-white/20 px-8 py-3 text-[9px]"
              }
            `}
          >
            <span className="relative z-10 font-black uppercase tracking-[0.4em]">
              Contact
            </span>
            {!scrolled && (
              <div className="absolute inset-0 bg-[#5C7C89] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            )}
          </Link>
        </div>

        {/* Mobile Toggle with Glass Circle */}
        <button
          className={`lg:hidden flex flex-col items-center justify-center gap-1.5 transition-all duration-500
            ${scrolled ? "w-10 h-10 bg-white/10 rounded-full" : ""}
          `}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-[1px] bg-white"></div>
          <div className="w-4 h-[1px] bg-[#5C7C89] self-end"></div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
