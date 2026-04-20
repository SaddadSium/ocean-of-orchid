"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Cinematography", href: "/cinematography" },
  ];

  return (
    <div className="fixed top-0 w-full z-[999] flex justify-center pointer-events-none">
      <nav
        className={`mt-4 md:mt-6 transition-all duration-700 ease-in-out flex items-center justify-between pointer-events-auto
        ${
          scrolled || isOpen
            ? "w-[92%] md:w-[90%] lg:w-[85%] bg-[#011425] py-3 px-6 md:px-8 rounded-full border border-white/10 shadow-2xl"
            : "w-full bg-transparent py-6 md:py-8 px-8 md:px-20 border-transparent"
        }`}
      >
        {/* BRANDING */}
        <Link href="/" className="group flex flex-col relative z-[1001]">
          <h1
            className={`font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none transition-all duration-700
            ${scrolled || isOpen ? "text-sm md:text-xl" : "text-lg md:text-3xl text-white"}`}
          >
            Ocean{" "}
            <span className="italic font-extralight lowercase text-[#5C7C89]">
              of
            </span>{" "}
            Orchid
          </h1>
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[1001] flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-[1px] bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-4 h-[1px] bg-[#5C7C89] self-end transition-all duration-500 ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-[1px] bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-0.5" : ""}`}
          />
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group/link">
                <Link
                  href={link.href}
                  className={`text-[9px] uppercase tracking-[0.4em] font-bold ${pathname === link.href ? "text-[#5C7C89]" : "text-white/50 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`px-8 py-3 text-[9px] font-black uppercase tracking-[0.4em] ${scrolled ? "bg-white text-[#011425] rounded-full" : "border border-white/20 text-white"}`}
          >
            Contact
          </Link>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div
          className={`fixed inset-x-0 top-0 bg-[#011425] shadow-2xl transition-all duration-700 ease-in-out lg:hidden z-[1000]
          ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden"}`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                className={`transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <Link
                  href={link.href}
                  className={`text-3xl font-serif italic ${pathname === link.href ? "text-[#5C7C89]" : "text-white"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-10">
              <Link
                href="/contact"
                className="px-12 py-4 bg-[#5C7C89] text-white text-[10px] uppercase tracking-[0.8em] font-black"
              >
                Inquire Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
