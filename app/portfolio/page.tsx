"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa"; // Install standard icon pack: npm install react-icons

export default function Portfolio() {
  const [category, setCategory] = useState<"wedding" | "corporate">("wedding");

  // Placeholder data: 10 albums per category
  const albums = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `${category === "wedding" ? "The Bloom Union" : "Brand Odyssey"} ${i + 1}`,
    cover: `https://images.unsplash.com/photo-${1500000000000 + i * 10000}?q=80&w=1200`,
    slug: `${category}-collection-${i + 1}`,
  }));

  return (
    <main className="min-h-screen bg-[#011425] text-white pt-[180px] pb-20 px-8 md:px-20 antialiased overflow-x-hidden selection:bg-[#5C7C89] selection:text-white">
      <div className="max-w-[1920px] mx-auto">
        {/* 1. HERO HEADER -Poetic & Editorial */}
        <div className="text-center mb-32 relative">
          {/* Large Ghost Background Text */}
          <div className="absolute inset-0 -top-16 flex items-center justify-center opacity-[0.01] pointer-events-none select-none">
            <h2 className="text-[25vw] font-serif italic uppercase text-white">
              Archive
            </h2>
          </div>

          <div className="relative z-10 space-y-8">
            <span className="text-[10px] md:text-[12px] uppercase tracking-[1.3em] text-[#5C7C89] font-bold mb-6 block animate-pulse">
              The Collective Narrative
            </span>
            <h1 className="text-6xl md:text-[130px] font-serif italic tracking-tighter uppercase leading-[0.8] drop-shadow-lg text-white">
              Cinematic <br />{" "}
              <span className="not-italic font-sans font-black tracking-tight text-white">
                Chronicles
              </span>
            </h1>
            <p className="text-[10px] md:text-[13px] uppercase tracking-[0.5em] text-zinc-500 mt-12 font-light max-w-xl mx-auto leading-relaxed border-y border-white/5 py-8">
              A curated anthology of timeless stories, <br /> preserved in the
              essence of light and profound emotion.
            </p>
          </div>
        </div>

        {/* 2. CATEGORY SWITCHER - Minimalist Floating Tabs */}
        <div className="flex justify-center gap-12 md:gap-24 mb-32 border-b border-white/5 pb-10 relative z-10">
          {["wedding", "corporate"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as any)}
              className={`text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-black transition-all duration-700 relative group
                ${category === cat ? "text-[#5C7C89]" : "text-zinc-600 hover:text-white"}`}
            >
              {cat === "wedding" ? "Wedding Stories" : "Corporate Identity"}
              {/* Dynamic Line Indicator */}
              <span
                className={`absolute -bottom-10 left-0 h-[3px] bg-[#5C7C89] transition-all duration-700 rounded-full
                ${category === cat ? "w-full" : "w-0 group-hover:w-1/2"}`}
              />
            </button>
          ))}
        </div>

        {/* 3. ALBUMS GRID - Cinematography & Grayscale Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {albums.map((album) => (
            <div key={album.id} className="group flex flex-col space-y-8">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] bg-[#011425]">
                {/* Image - Original Color */}
                <img
                  src={album.cover}
                  className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:grayscale group-hover:scale-105"
                  alt={album.name}
                />

                {/* 1. Subtle Vignette - Always Visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/90 via-transparent to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-700" />

                {/* 2. Hover Reveal Inner Border Accent */}
                <div className="absolute inset-0 border-[0px] group-hover:border-[15px] border-[#011425]/10 transition-all duration-500 pointer-events-none z-10" />

                {/* 3. CENTER REVEAL - "VIEW STORY" Button */}
                <Link
                  href={`/portfolio/${album.slug}`}
                  className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 cursor-none"
                >
                  <div className="flex items-center gap-6 px-12 py-5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/5 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-700">
                    <FaCircle
                      className="text-[#5C7C89] animate-pulse"
                      size={8}
                    />
                    <p className="text-[10px] uppercase tracking-[1em] text-white font-black whitespace-nowrap">
                      View Story
                    </p>
                  </div>
                </Link>
              </div>

              {/* Album Details Below Image */}
              <div className="flex flex-col border-l border-[#5C7C89]/30 pl-8 space-y-3">
                <h3 className="text-2xl md:text-3xl font-serif italic text-white group-hover:text-[#5C7C89] transition-colors duration-700 leading-none">
                  {album.name}
                </h3>
                <div className="flex justify-between items-center pt-3">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-zinc-600 font-bold">
                    Archive // Dhaka // MMXXVI
                  </p>
                  <span className="w-10 h-[1px] bg-white/5" />{" "}
                  {/* Small visual separator */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL TRANSITION SECTION */}
      <section className="mt-40 py-60 border-t border-white/5 text-center relative overflow-hidden bg-gradient-to-t from-black to-[#011425]">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <h2 className="text-[30vw] font-serif italic text-[#5C7C89] whitespace-nowrap -translate-x-1/2">
            Collective
          </h2>
        </div>
        <h2 className="text-3xl md:text-6xl font-serif italic text-white/10 tracking-tighter relative z-10 leading-none">
          Exploring the <br /> Depth of Memory
        </h2>
      </section>
    </main>
  );
}
