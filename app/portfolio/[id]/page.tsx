"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function AlbumDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Placeholder for 15 photos inside the album
  const photos = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${1510000000000 + i * 10000}?q=80&w=1200`,
  }));

  // Album name format (e.g., "wedding-story-1" -> "WEDDING STORY 1")
  const albumTitle = id ? id.replace(/-/g, " ").toUpperCase() : "ALBUM";

  return (
    <main className="min-h-screen bg-[#011425] text-white pt-[160px] pb-20 px-8 md:px-20 antialiased overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* 1. STICKY / FLOATING BACK BUTTON */}
        <div className="mb-12">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] hover:text-white transition-all duration-500 bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-[#5C7C89]/40 backdrop-blur-xl"
          >
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform duration-500" />
            Go Back
          </button>
        </div>

        {/* 2. ALBUM HEADER */}
        <div className="mb-24 flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[1em] text-[#5C7C89]/60 font-bold mb-4">
            Collection Archive
          </span>
          <h1 className="text-4xl md:text-8xl font-serif italic tracking-tighter text-center leading-none max-w-4xl">
            {albumTitle}
          </h1>
          <div className="w-24 h-[1px] bg-[#5C7C89] mt-10 opacity-30" />
        </div>

        {/* 3. MASONRY GALLERY - Editorial Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden border border-white/5 bg-[#011425] shadow-2xl"
            >
              <img
                src={photo.url}
                className="w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 cursor-zoom-in scale-100 group-hover:scale-105"
                alt={`Gallery shot ${photo.id}`}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* 4. FOOTER CALL TO ACTION */}
        <div className="mt-40 text-center border-t border-white/5 pt-32">
          <p className="text-[10px] uppercase tracking-[1em] text-[#5C7C89] font-bold mb-8">
            Next Step
          </p>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-14 tracking-tighter">
            Your Story is Next.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-16 py-7 bg-white text-black text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-700 shadow-2xl"
          >
            Inquire for Date
          </Link>
        </div>
      </div>
    </main>
  );
}
