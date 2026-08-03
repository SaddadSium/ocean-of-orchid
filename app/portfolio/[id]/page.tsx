"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

// 1. Protiti Album-er Real Data & Image Array
const albumDataStore: Record<
  string,
  { title: string; subtitle: string; cover: string; photos: string[] }
> = {
  "wedding-1": {
    title: "Tanvir & Sanjida",
    subtitle: "Grand Celebrations // Dhaka",
    cover: "/images/insidealbum/wedding-1/cover.jpg",
    photos: ["/images/insidealbum/wedding-1/pic1.jpg"],
  },
  "wedding-2": {
    title: "Monia's Mehendi",
    subtitle: "Mehendi Ceremony // Dhaka",
    cover: "/images/insidealbum/wedding-2/cover.jpg",
    photos: [
      "/images/insidealbum/wedding-2/pic1.jpg",
      "/images/insidealbum/wedding-2/pic2.jpg",
      "/images/insidealbum/wedding-2/pic3.jpg",
      "/images/insidealbum/wedding-2/pic4.jpg",
      "/images/insidealbum/wedding-2/pic5.jpg",
      "/images/insidealbum/wedding-2/pic6.jpg",
      "/images/insidealbum/wedding-2/pic7.jpg",
      "/images/insidealbum/wedding-2/pic8.jpg",
      "/images/insidealbum/wedding-2/pic9.jpg",
      "/images/insidealbum/wedding-2/pic10.jpg",
      "/images/insidealbum/wedding-2/pic11.jpg",
      "/images/insidealbum/wedding-2/pic12.jpg",
      "/images/insidealbum/wedding-2/pic13.jpg",
      "/images/insidealbum/wedding-2/pic14.jpg",
      "/images/insidealbum/wedding-2/pic15.jpg",
    ],
  },
  "wedding-3": {
    title: "Moon & Trina",
    subtitle: "Wedding Series 2026 // Dhaka",
    cover: "/images/insidealbum/wedding-3/cover.jpg",
    photos: [
      "/images/insidealbum/wedding-3/pic1.jpg",
      "/images/insidealbum/wedding-3/pic2.jpg",
      "/images/insidealbum/wedding-3/pic3.jpg",
      "/images/insidealbum/wedding-3/pic4.jpg",
      "/images/insidealbum/wedding-3/pic5.jpg",
      "/images/insidealbum/wedding-3/pic6.jpg",
      "/images/insidealbum/wedding-3/pic7.jpg",
      "/images/insidealbum/wedding-3/pic8.jpg",
      "/images/insidealbum/wedding-3/pic9.jpg",
      "/images/insidealbum/wedding-3/pic10.jpg",
      "/images/insidealbum/wedding-3/pic11.jpg",
      "/images/insidealbum/wedding-3/pic12.jpg",
      "/images/insidealbum/wedding-3/pic13.jpg",
      "/images/insidealbum/wedding-3/pic14.jpg",
      "/images/insidealbum/wedding-3/pic15.jpg",
      "/images/insidealbum/wedding-3/pic16.jpg",
      "/images/insidealbum/wedding-3/pic17.jpg",
      "/images/insidealbum/wedding-3/pic18.jpg",
      "/images/insidealbum/wedding-3/pic19.jpg",
      "/images/insidealbum/wedding-3/pic20.jpg",
      "/images/insidealbum/wedding-3/pic21.jpg",
      "/images/insidealbum/wedding-3/pic22.jpg",
      "/images/insidealbum/wedding-3/pic23.jpg",
      "/images/insidealbum/wedding-3/pic24.jpg",
      "/images/insidealbum/wedding-3/pic25.jpg",
      "/images/insidealbum/wedding-3/pic26.jpg",
      "/images/insidealbum/wedding-3/pic27.jpg",
      "/images/insidealbum/wedding-3/pic28.jpg",
    ],
  },
  "corporate-1": {
    title: "NEXTOR 2.0",
    subtitle: "Capital Market Investment // Dhaka",
    cover: "/images/corporate-cover/C1.jpg",
    photos: [
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
      "/images/corporate-cover/C2.jpg",
      "/images/corporate-cover/C1.jpg",
    ],
  },
};

export default function AlbumDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Selected Album data or fallback
  const currentAlbum = albumDataStore[id] || {
    title: id ? id.replace(/-/g, " ").toUpperCase() : "ALBUM ARCHIVE",
    subtitle: "Visual Narrative // Dhaka",
    cover: `/images/portfolio/${id ? id.toUpperCase() : "T1"}.jpg`,
    photos: Array.from({ length: 15 }).map(
      (_, i) => `/images/portfolio/T${i + 1}.jpg`,
    ),
  };

  return (
    <main className="min-h-screen bg-[#011425] text-white pt-[120px] md:pt-[150px] pb-20 px-6 md:px-20 antialiased overflow-x-hidden selection:bg-[#5C7C89]">
      <div className="max-w-[1800px] mx-auto">
        {/* 1. HERO COVER IMAGE & ALBUM TITLE */}
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden border border-white/10 shadow-2xl mb-20 bg-[#011425] group">
          <img
            src={currentAlbum.cover}
            onError={(e: any) => {
              e.target.src =
                "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600";
            }}
            alt={currentAlbum.title}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#011425] via-[#011425]/40 to-transparent opacity-90" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10 text-center items-center">
            <span className="text-[9px] md:text-[11px] uppercase tracking-[1.2em] text-[#5C7C89] font-bold mb-4 block animate-pulse">
              Selected Collection
            </span>
            <h1 className="text-4xl md:text-8xl font-serif italic tracking-tighter text-white drop-shadow-2xl leading-tight">
              {currentAlbum.title}
            </h1>
            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-zinc-400 mt-4 font-light">
              {currentAlbum.subtitle}
            </p>
            <div className="w-16 md:w-24 h-[1px] bg-[#5C7C89] mt-8 opacity-50" />
          </div>
        </div>

        {/* 2. PHOTOS MASONRY GALLERY */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {currentAlbum.photos.map((photoUrl, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border border-white/5 bg-[#011425] shadow-2xl transition-all duration-700"
            >
              <img
                src={photoUrl}
                onError={(e: any) => {
                  e.target.src = `https://images.unsplash.com/photo-${1510000000000 + (index + 1) * 12345}?q=80&w=1200`;
                }}
                className="w-full h-auto object-cover transition-all duration-700 cursor-zoom-in scale-100 group-hover:scale-105"
                alt={`${currentAlbum.title} frame ${index + 1}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011425]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-end p-6">
                <span className="text-[8px] uppercase tracking-[0.5em] text-[#5C7C89] font-bold">
                  Frame #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. BOTTOM NAVIGATION & CTA */}
        <div className="mt-28 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] hover:text-white transition-all duration-500 bg-white/5 px-8 py-4 rounded-full border border-white/5 hover:border-[#5C7C89]/40 backdrop-blur-xl"
          >
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform duration-500" />
            Back to Portfolio
          </button>

          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-700 shadow-2xl rounded-full"
          >
            Inquire for Date
          </Link>
        </div>
      </div>
    </main>
  );
}
