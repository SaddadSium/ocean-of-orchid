"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#011425] text-white pt-40 pb-10 px-8 md:px-20 border-t border-[#5C7C89]/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative">
        {/* Background Decorative Text - Ultra Premium Look */}
        <div className="absolute -top-20 -left-10 text-[15vw] font-serif italic text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          Ocean of Orchid Collective
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Left Side: Large Brand Statement */}
          <div className="lg:col-span-6 space-y-10">
            <div className="group cursor-default">
              <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight leading-none mb-4">
                Let’s frame your <br />
                <span className="not-italic font-sans font-black uppercase text-[#5C7C89] tracking-tighter">
                  Legacy
                </span>
              </h2>
              <div className="w-20 h-[1px] bg-[#5C7C89] group-hover:w-40 transition-all duration-700" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">
                Based in Dhaka, Bangladesh
              </p>
              <a
                href="mailto:hello@oceanoforchid.com"
                className="text-sm md:text-xl font-light tracking-widest hover:text-[#5C7C89] transition-colors"
              >
                hello@oceanoforchid.com
              </a>
            </div>
          </div>

          {/* Right Side: Links & Socials Organized Better */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-20">
            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#5C7C89]/60">
                Menu
              </h4>
              <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-white transition"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    The Agency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="hover:text-white transition"
                  >
                    Investment
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#5C7C89]/60">
                Social
              </h4>
              <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Availability */}
            <div className="space-y-6 hidden md:block">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#5C7C89]/60">
                Availability
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                  Booking 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Clean */}
        <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 opacity-30">
            <p className="text-[8px] uppercase tracking-[0.6em]">
              © {currentYear} Ocean of Orchid
            </p>
            <Link
              href="/privacy"
              className="text-[8px] uppercase tracking-[0.6em] hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-[8px] uppercase tracking-[0.8em] font-bold text-[#5C7C89]/50">
            Archiving Emotions Globally
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
