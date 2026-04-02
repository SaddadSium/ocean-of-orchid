"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

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
    <main className="min-h-screen bg-[#011425] text-white pt-[140px] md:pt-[180px] pb-20 px-6 md:px-20 antialiased overflow-x-hidden selection:bg-[#5C7C89] selection:text-white">
      <div className="max-w-[1920px] mx-auto">
        {/* 1. HERO HEADER - Poetic & Editorial */}
        <div className="text-center mb-24 md:mb-32 relative">
          {/* Large Ghost Background Text - Responsive */}
          <div className="absolute inset-0 -top-10 md:-top-16 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
            <h2 className="text-[35vw] md:text-[25vw] font-serif italic uppercase text-white">
              Archive
            </h2>
          </div>

          <div className="relative z-10 space-y-6 md:space-y-8">
            <span className="text-[9px] md:text-[12px] uppercase tracking-[1em] md:tracking-[1.3em] text-[#5C7C89] font-bold mb-4 md:mb-6 block animate-pulse">
              The Collective Narrative
            </span>
            <h1 className="text-5xl md:text-[130px] font-serif italic tracking-tighter uppercase leading-[0.9] md:leading-[0.8] drop-shadow-lg text-white">
              Cinematic <br />{" "}
              <span className="not-italic font-sans font-black tracking-tight text-white">
                Chronicles
              </span>
            </h1>
            <p className="text-[10px] md:text-[13px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 mt-8 md:mt-12 font-light max-w-xl mx-auto leading-relaxed border-y border-white/5 py-6 md:py-8">
              A curated anthology of timeless stories,{" "}
              <br className="hidden md:block" /> preserved in the essence of
              light and profound emotion.
            </p>
          </div>
        </div>

        {/* 2. CATEGORY SWITCHER - Minimalist Floating Tabs */}
        <div className="flex justify-center gap-8 md:gap-24 mb-20 md:mb-32 border-b border-white/5 pb-8 md:pb-10 relative z-10">
          {["wedding", "corporate"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as any)}
              className={`text-[10px] md:text-[13px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black transition-all duration-700 relative group
                ${category === cat ? "text-[#5C7C89]" : "text-zinc-600 hover:text-white"}`}
            >
              {cat === "wedding" ? "Wedding Stories" : "Corporate Identity"}
              {/* Dynamic Line Indicator */}
              <span
                className={`absolute -bottom-8 md:-bottom-10 left-0 h-[2px] md:h-[3px] bg-[#5C7C89] transition-all duration-700 rounded-full
                ${category === cat ? "w-full" : "w-0 group-hover:w-1/2"}`}
              />
            </button>
          ))}
        </div>

        {/* 3. ALBUMS GRID - Fixed Original Color on Desktop & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group flex flex-col space-y-6 md:space-y-8"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 shadow-2xl bg-[#011425]">
                {/* Image - Original Color Fixed */}
                <img
                  src={album.cover}
                  className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                  alt={album.name}
                />

                {/* 1. Subtle Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/90 via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-700" />

                {/* 2. Hover Reveal Inner Border Accent - Desktop Only */}
                <div className="hidden md:block absolute inset-0 border-[0px] group-hover:border-[15px] border-[#011425]/10 transition-all duration-500 pointer-events-none z-10" />

                {/* 3. CENTER REVEAL - "VIEW STORY" Button */}
                <Link
                  href={`/portfolio/${album.slug}`}
                  className="absolute inset-0 flex items-center justify-center z-20 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <div className="flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-5 bg-white text-black md:bg-white/5 md:backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <FaCircle
                      className="text-[#5C7C89] animate-pulse"
                      size={6}
                    />
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[1em] font-black whitespace-nowrap">
                      View Story
                    </p>
                  </div>
                </Link>
              </div>

              {/* Album Details */}
              <div className="flex flex-col border-l border-[#5C7C89]/30 pl-6 md:pl-8 space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-3xl font-serif italic text-white group-hover:text-[#5C7C89] transition-colors duration-700 leading-none">
                  {album.name}
                </h3>
                <div className="flex justify-between items-center pt-2">
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-600 font-bold">
                    Archive // MMXXVI
                  </p>
                  <span className="w-8 md:w-12 h-[1px] bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL TRANSITION SECTION - Responsive Ghost Text */}
      <section className="mt-32 md:mt-40 py-32 md:py-60 border-t border-white/5 text-center relative overflow-hidden bg-gradient-to-t from-black to-[#011425]">
        {/* Large Ghost Background Text */}
        <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center pointer-events-none select-none">
          <h2 className="text-[40vw] md:text-[30vw] font-serif italic text-[#5C7C89] whitespace-nowrap leading-none translate-y-6 md:translate-y-10">
            Collective
          </h2>
        </div>

        <div className="relative z-10 px-6">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[1em] text-[#5C7C89] font-bold mb-6 md:mb-8 block opacity-50">
            Visual Anthology
          </span>
          <h2 className="text-3xl md:text-8xl font-serif italic text-white/20 tracking-tighter leading-[1] md:leading-none">
            Exploring the <br />
            <span className="not-italic font-sans font-black">
              Depth of Memory
            </span>
          </h2>
          <div className="w-12 md:w-20 h-[1px] bg-[#5C7C89]/30 mx-auto mt-12 md:mt-20" />
        </div>
      </section>
    </main>
  );
}
