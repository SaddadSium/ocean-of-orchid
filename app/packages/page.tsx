"use client";
import Link from "next/link";
import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function Packages() {
  const weddingTiers = [
    {
      name: "Basic",
      tag: "Essential",
      price: "25k",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      features: [
        "1 Lead Photographer",
        "100 Edited Photos",
        "Standard Retouching",
        "Online Gallery",
      ],
    },
    {
      name: "Silver",
      tag: "Signature",
      price: "45k",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
      features: [
        "2 Photographers",
        "250 Edited Photos",
        "Premium Photo Book",
        "Cinematic Teaser",
      ],
    },
    {
      name: "Premium",
      tag: "Legacy",
      price: "85k",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
      features: [
        "Lead Duo + 2 Photogs",
        "Unlimited Photos",
        "Luxury Coffee Table Book",
        "Full Wedding Film",
      ],
    },
  ];

  const comboPackages = [
    {
      name: "Combo Starter",
      price: "60k",
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
      features: ["Photo + Cinema", "SDE Teaser", "Standard Album"],
    },
    {
      name: "Combo Signature",
      price: "110k",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800",
      features: ["Full Team", "4K Cinematic Film", "2 Premium Albums"],
    },
    {
      name: "Combo Royal",
      price: "160k",
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800",
      features: ["Lead Duo Presence", "Drone Shots", "Handcrafted Box Set"],
    },
  ];

  const elegantPackages = [
    {
      name: "Elegant Portrait",
      price: "35k",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800",
      features: ["Editorial Retouching", "Studio Session", "Fine Art Prints"],
    },
    {
      name: "Elegant Muse",
      price: "55k",
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800",
      features: [
        "Fashion Grade Lighting",
        "Luxury Keepsake",
        "Private Gallery",
      ],
    },
    {
      name: "Elegant Cinema",
      price: "50k",
      img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800",
      features: ["Artistic Video Portrait", "Sound Design", "Vimeo Hosting"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#011425] text-white selection:bg-[#5C7C89] antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative pt-[180px] pb-16 px-8 md:px-20">
        <div className="max-w-[1800px] mx-auto text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[1em] text-[#5C7C89] font-bold mb-6 block animate-pulse">
            Investment Guide
          </span>
          <h1 className="text-5xl md:text-[100px] font-serif italic leading-none tracking-tighter uppercase">
            Curated <br />{" "}
            <span className="not-italic font-sans font-black text-white">
              Collections
            </span>
          </h1>
        </div>
      </section>

      {/* 2. WEDDING TIERS - 3 Col Grid */}
      <section className="py-20 px-8 md:px-20 max-w-[1800px] mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#5C7C89] font-bold mb-12 border-b border-white/5 pb-4">
          01 // Wedding Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingTiers.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 3. COMBO PACKAGES - 3 Col Grid */}
      <section className="py-20 px-8 md:px-20 max-w-[1800px] mx-auto bg-black/10">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#5C7C89] font-bold mb-12 border-b border-white/5 pb-4">
          02 // Combo Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comboPackages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 4. ELEGANT PACKAGES - 3 Col Grid */}
      <section className="py-20 px-8 md:px-20 max-w-[1800px] mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#5C7C89] font-bold mb-12 border-b border-white/5 pb-4">
          03 // Elegant Signature
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {elegantPackages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 5. CORPORATE - Call to Action */}
      <section className="py-40 px-8 md:px-20 text-center bg-gradient-to-t from-black to-[#011425]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h3 className="text-4xl md:text-[80px] font-serif italic leading-none tracking-tighter">
            Bespoke <br /> Corporate Solutions.
          </h3>
          <p className="text-[11px] uppercase tracking-[0.5em] text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Custom cinematography and photography for brands and global
            organizations.
          </p>
          <div className="pt-10">
            <Link
              href="/contact"
              className="inline-block px-20 py-7 bg-white text-black text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-700 shadow-2xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Package Card Component (Updated to show original color)
function PackageCard({ pkg }: { pkg: any }) {
  return (
    <div className="group flex flex-col bg-white/[0.01] border border-white/5 hover:border-[#5C7C89]/30 transition-all duration-700">
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Grayscale and opacity removed, original color preserved */}
        <img
          src={pkg.img}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          alt={pkg.name}
        />
        {/* Subtle gradient kept at the bottom only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/90 via-transparent to-transparent opacity-100" />
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#5C7C89] font-bold mb-1">
            {pkg.tag || "Selection"}
          </p>
          <h3 className="text-2xl font-serif italic text-white leading-none">
            {pkg.name}
          </h3>
        </div>
      </div>

      <div className="p-8 space-y-6 relative z-10 bg-[#011425]">
        <div className="flex items-baseline gap-1 border-b border-white/5 pb-4">
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            BDT
          </span>
          <span className="text-3xl font-sans font-black">{pkg.price}</span>
        </div>

        <ul className="space-y-4">
          {pkg.features.map((feat: string, idx: number) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold"
            >
              <div className="w-1 h-1 rounded-full bg-[#5C7C89]" /> {feat}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="flex items-center justify-between text-[10px] uppercase tracking-[0.5em] font-black pt-4 border-t border-white/5 group-hover:text-[#5C7C89] transition-all"
        >
          Inquire Now <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
