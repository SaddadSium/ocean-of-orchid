"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"wedding" | "corporate">(
    "wedding",
  );

  // 1. Real Wedding Albums Data
  const weddingAlbums = [
    {
      id: "wedding-1",
      title: "Tanvir & Sanjida",
      client: "Grand Celebrations",
      image: "/images/portfolio/PC1.jpg",
    },
    {
      id: "wedding-2",
      title: "Monia's Mehendi",
      client: "Mehendi Ceremony",
      image: "/images/portfolio/PC2.jpg",
    },
    {
      id: "wedding-3",
      title: "Moon & Trina",
      client: "Wedding Series 2026",
      image: "/images/portfolio/PC3.jpg",
    },
    {
      id: "wedding-4",
      title: "Atik & Auhona",
      client: "Intimate Akhd",
      image: "/images/portfolio/PC4.jpg",
    },
    {
      id: "wedding-5",
      title: "Monia's Haldi",
      client: "Traditional Haldi",
      image: "/images/portfolio/PC5.jpg",
    },
    {
      id: "wedding-6",
      title: "Rahat & Nidhi",
      client: "Grand Reception",
      image: "/images/portfolio/PC6.jpg",
    },
    {
      id: "wedding-7",
      title: "Udoy & Sumaiya",
      client: "Premium Wedding",
      image: "/images/portfolio/PC7.jpg",
    },
    {
      id: "wedding-8",
      title: "Shanto & Madhurjo",
      client: "Intimate Wedding",
      image: "/images/portfolio/PC8.jpg",
    },
    {
      id: "wedding-9",
      title: "Roshni's Haldi",
      client: "Traditional Haldi",
      image: "/images/portfolio/PC9.jpg",
    },
    {
      id: "wedding-10",
      title: "Sumaiya & Udoy",
      client: "Traditional Holud",
      image: "/images/portfolio/PC10.jpg",
    },
    {
      id: "wedding-11",
      title: "Nayem & Imu",
      client: "Wedding Series 2025",
      image: "/images/portfolio/PC11.jpg",
    },
    {
      id: "wedding-15",
      title: "Tanha's Wedding",
      client: "Glamorous Wedding",
      image: "/images/portfolio/PC15.jpg",
    },
    {
      id: "wedding-16",
      title: "Saadat & Fariya",
      client: "Traditional Wedding",
      image: "/images/portfolio/PC16.jpg",
    },
    {
      id: "wedding-21",
      title: "Bappy & Neha",
      client: "Wedding Series 2025",
      image: "/images/portfolio/PC21.jpg",
    },
  ];

  // 2. Real Corporate Albums Data
  const corporateAlbums = [
    {
      id: "corporate-1",
      title: "NEXTOR 2.0",
      client: "Capital Market Investment",
      image: "/images/portfolio/CC1.jpg",
    },
    {
      id: "corporate-2",
      title: "Fakir Technologies",
      client: "New Year Celebration 2026",
      image: "/images/portfolio/CC2.jpg",
    },
  ];

  const displayedAlbums =
    activeTab === "wedding" ? weddingAlbums : corporateAlbums;

  return (
    <main className="min-h-screen bg-[#011425] text-white pt-[140px] md:pt-[170px] pb-24 px-6 md:px-20 antialiased selection:bg-[#5C7C89] selection:text-white">
      <div className="max-w-[1920px] mx-auto">
        {/* 1. MINIMAL HEADER & FILTER TABS (No Distractions) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 pb-8 border-b border-white/10 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#5C7C89] font-bold block mb-2">
              Visual Archive
            </span>
            <h1 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight">
              Selected Works
              <span className="text-[#5C7C89] font-sans not-italic font-bold">
                .
              </span>
            </h1>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "wedding"
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              Wedding ({weddingAlbums.length})
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#5C7C89] transition-all duration-500 rounded-full ${
                  activeTab === "wedding" ? "w-full" : "w-0"
                }`}
              />
            </button>

            <button
              onClick={() => setActiveTab("corporate")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "corporate"
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              Corporate ({corporateAlbums.length})
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#5C7C89] transition-all duration-500 rounded-full ${
                  activeTab === "corporate" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 2. ALBUMS GRID - High-Impact 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-20">
          {displayedAlbums.map((album) => (
            <div key={album.id} className="group flex flex-col space-y-5">
              {/* Image Container with Framing */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#011425]">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Ambient Dark Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Subtle Inner Border on Hover */}
                <div className="hidden md:block absolute inset-0 border-[0px] group-hover:border-[10px] border-[#011425]/30 transition-all duration-500 pointer-events-none z-10" />

                {/* Center Hover CTA */}
                <Link
                  href={`/portfolio/${album.id}`}
                  className="absolute inset-0 flex items-center justify-center z-20 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="flex items-center gap-4 px-8 py-3.5 bg-white text-black md:bg-white/10 md:text-white md:backdrop-blur-xl rounded-full border border-white/20 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <FaCircle
                      className="text-[#5C7C89] animate-pulse"
                      size={6}
                    />
                    <span className="text-[9px] uppercase tracking-[0.5em] font-black whitespace-nowrap">
                      View Story
                    </span>
                  </div>
                </Link>
              </div>

              {/* Minimal Meta Details Below */}
              <div className="flex flex-col border-l border-[#5C7C89]/40 pl-5 space-y-1.5">
                <h3 className="text-xl md:text-2xl font-serif italic text-white group-hover:text-[#5C7C89] transition-colors duration-500 leading-tight">
                  {album.title}
                </h3>
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                  {album.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
