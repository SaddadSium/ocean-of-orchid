"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaStar, FaQuoteLeft, FaCircle, FaPlay } from "react-icons/fa";

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sajid & Neha",
      role: "Wedding Client",
      text: "Ocean of Orchid didn't just take photos; they captured our souls. Every frame feels like a scene from a movie.",
    },
    {
      name: "Rafat Hasan",
      role: "Corporate Lead, TechBD",
      text: "Professionalism at its peak. Their corporate cinematography gave our brand a new global identity.",
    },
    {
      name: "Anika & Fahim",
      role: "Destination Wedding",
      text: "They traveled to Sylhet with us and managed everything so smoothly. Timeless portraits that we cherish.",
    },
    {
      name: "Eco Group",
      role: "Industrial Client",
      text: "High-end visual solutions. Their drones and lighting setup were beyond expectations.",
    },
    {
      name: "Zarin & Imtiaz",
      role: "Engagement",
      text: "The editing style is so unique—moody yet elegant. Exactly what we were looking for.",
    },
    {
      name: "Global Events Ltd",
      role: "Event Partner",
      text: "Reliable, creative, and always on time. Our go-to collective for all high-profile events.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const stats = [
    { label: "Successful Projects", value: "500+" },
    { label: "Happy Clients", value: "450+" },
    { label: "Years of Legacy", value: "08" },
    { label: "Global Shoots", value: "12+" },
  ];

  const featuredStories = [
    {
      id: 1,
      title: "Deep Ocean Tales",
      category: "Wedding Story",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
      slug: "wedding-collection-1",
    },
    {
      id: 2,
      title: "Shadows of Old Dhaka",
      category: "Portrait",
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200",
      slug: "wedding-collection-2",
    },
    {
      id: 3,
      title: "The Brand Odyssey",
      category: "Corporate Film",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200",
      slug: "corporate-collection-1",
    },
  ];

  return (
    <main className="min-h-screen bg-[#011425] text-white selection:bg-[#5C7C89] antialiased overflow-x-hidden">
      {/* 1. HERO SECTION - Branding & Video CTA Fixed */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000"
            className="w-full h-full object-cover opacity-60"
            alt="Hero Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011425] via-[#011425]/40 to-[#011425]" />
        </div>

        <div className="relative z-20 text-center px-6 space-y-12">
          <div className="space-y-4">
            <span className="uppercase tracking-[1.5em] text-[10px] font-black text-[#5C7C89] block animate-pulse">
              Atelier of Visual Arts
            </span>
            <h1 className="text-6xl md:text-[140px] font-serif italic leading-[0.8] tracking-tighter text-white uppercase">
              Ocean of <br />
              <span className="not-italic font-sans font-black text-white">
                Orchid
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
            <Link
              href="/portfolio"
              className="inline-block px-14 py-5 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-500 shadow-xl"
            >
              Enter The Gallery
            </Link>
            <Link
              href="/cinematography"
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.6em] font-black hover:text-[#5C7C89] transition-all group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#5C7C89] transition-all">
                <FaPlay size={10} className="ml-1" />
              </div>
              Play Film
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM STATS */}
      <section className="py-24 px-8 md:px-20 bg-[#011425] border-y border-white/5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-12 text-center border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <h4 className="text-5xl md:text-8xl font-sans font-black text-white tracking-tighter group-hover:text-[#5C7C89] transition-colors duration-500">
                {stat.value}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-bold pt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED WORKS - Original Color Fixed */}
      <section className="py-32 px-8 md:px-20 max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/5 pb-10">
          <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white uppercase leading-none">
            Selected Works
          </h2>
          <Link
            href="/portfolio"
            className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] border-b border-[#5C7C89]/20 pb-2 hover:text-white transition-all"
          >
            Full Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="group relative flex flex-col space-y-8"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 shadow-2xl bg-[#011425]">
                <img
                  src={story.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={story.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/80 via-transparent to-transparent opacity-100" />

                <Link
                  href={`/portfolio/${story.slug}`}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="px-10 py-4 bg-white text-black rounded-full shadow-2xl flex items-center gap-4">
                    <FaCircle
                      className="text-[#5C7C89] animate-pulse"
                      size={8}
                    />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black">
                      Full Album
                    </span>
                  </div>
                </Link>
              </div>
              <div className="border-l border-[#5C7C89]/30 pl-6">
                <span className="text-[9px] uppercase tracking-[0.5em] text-[#5C7C89] font-bold">
                  {story.category}
                </span>
                <h3 className="text-2xl font-serif italic text-white group-hover:text-[#5C7C89] transition-colors">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM SLIDING REVIEWS - Floating Box Design */}
      <section className="py-40 px-8 md:px-20 bg-black/20 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter text-white uppercase mb-4">
              Voices of Trust
            </h2>
            <div className="flex justify-center gap-2 text-[#5C7C89]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={12} />
              ))}
            </div>
          </div>

          <div className="relative min-h-[350px] flex items-center justify-center">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className={`absolute w-full transition-all duration-700 ease-in-out transform
                ${i === currentReview ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-10 scale-95 z-0 pointer-events-none"}`}
              >
                <div className="bg-[#011425] border border-white/5 p-12 md:p-16 shadow-3xl relative">
                  <FaQuoteLeft
                    className="text-[#5C7C89]/10 absolute top-8 left-8"
                    size={60}
                  />
                  <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-300 italic mb-10 tracking-widest leading-loose uppercase">
                    "{rev.text}"
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-lg font-serif italic text-white">
                      {rev.name}
                    </h5>
                    <p className="text-[9px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentReview(i)}
                className={`h-[2px] transition-all duration-500 ${i === currentReview ? "w-12 bg-[#5C7C89]" : "w-6 bg-white/10 hover:bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINALE CTA */}
      <section className="py-60 text-center relative overflow-hidden bg-gradient-to-t from-black to-[#011425]">
        <div className="relative z-10 space-y-12">
          <h2 className="text-5xl md:text-[90px] font-serif italic leading-none tracking-tighter text-white uppercase leading-[0.9]">
            Your Story <br /> Starts Here.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-20 py-7 bg-[#5C7C89] text-white text-[11px] uppercase tracking-[0.8em] font-black hover:bg-white hover:text-black transition-all duration-700 shadow-2xl uppercase"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </main>
  );
}
