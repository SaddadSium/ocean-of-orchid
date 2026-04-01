"use client";
import { useState } from "react";
import Link from "next/link";

export default function Cinematography() {
  const [activeTab, setActiveTab] = useState("wedding");

  const videos = {
    wedding: [
      {
        id: 1,
        title: "The Royal Union",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        location: "Dhaka",
      },
      {
        id: 2,
        title: "Eternal Glow",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        location: "Sylhet",
      },
      {
        id: 3,
        title: "Classic Heritage",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        location: "Chittagong",
      },
    ],
    corporate: [
      {
        id: 4,
        title: "Brand Identity 2026",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        client: "Tech Corp",
      },
      {
        id: 5,
        title: "Industrial Showcase",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        client: "Eco Group",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#011425] text-white selection:bg-[#5C7C89] antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative pt-[180px] pb-16 px-8 md:px-20 text-center">
        <div className="max-w-[1800px] mx-auto">
          <span className="text-[10px] uppercase tracking-[1.2em] text-[#5C7C89] font-bold mb-6 block animate-pulse">
            Motion Pictures
          </span>
          <h1 className="text-5xl md:text-[110px] font-serif italic leading-none tracking-tighter uppercase">
            The Cinematic <br />{" "}
            <span className="not-italic font-sans font-black text-white">
              Narrative
            </span>
          </h1>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="pb-20 px-8 md:px-20">
        <div className="max-w-[1800px] mx-auto flex justify-center gap-12 border-b border-white/5 pb-6">
          <button
            onClick={() => setActiveTab("wedding")}
            className={`text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-500 ${activeTab === "wedding" ? "text-[#5C7C89]" : "text-zinc-600 hover:text-white"}`}
          >
            Wedding Stories
          </button>
          <button
            onClick={() => setActiveTab("corporate")}
            className={`text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-500 ${activeTab === "corporate" ? "text-[#5C7C89]" : "text-zinc-600 hover:text-white"}`}
          >
            Corporate Films
          </button>
        </div>
      </section>

      {/* 3. VIDEO GRID */}
      <section className="py-12 px-8 md:px-20 max-w-[1800px] mx-auto min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {videos[activeTab as keyof typeof videos].map((video) => (
            <div key={video.id} className="group space-y-6">
              {/* YouTube Iframe Wrapper */}
              <div className="relative aspect-video overflow-hidden border border-white/5 bg-black shadow-2xl group-hover:border-[#5C7C89]/40 transition-all duration-700">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="flex justify-between items-end border-l-2 border-[#5C7C89] pl-6 py-2">
                <div>
                  <h3 className="text-2xl font-serif italic text-white group-hover:tracking-wider transition-all duration-700">
                    {video.title}
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mt-2 font-bold">
                    {"location" in video ? video.location : video.client} //
                    Dhaka, Worldwide
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-[8px] uppercase tracking-[0.5em] text-[#5C7C89] font-black hover:text-white transition-colors pb-1"
                >
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-40 px-8 md:px-20 text-center bg-gradient-to-t from-black to-[#011425]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-7xl font-serif italic leading-none tracking-tighter">
            Bring your vision to life.
          </h2>
          <div className="pt-10">
            <Link
              href="/contact"
              className="px-20 py-7 bg-white text-black text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-700"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
