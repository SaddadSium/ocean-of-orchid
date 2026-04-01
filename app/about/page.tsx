"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  const leadDuo = [
    {
      id: "01",
      name: "A.S.M. Sium",
      role: "Founder & Lead Visual Artist",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      description:
        "Preserving raw, unfiltered human emotions through a cinematic lens for over a decade.",
      insta: "https://instagram.com/your-id",
      fb: "https://facebook.com/your-id",
      linkedin: "https://linkedin.com/in/your-id",
    },
    {
      id: "02",
      name: "Sarah Khan",
      role: "Chief Cinematographer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
      description:
        "Master of light and movement, turning fleeting moments into visual poetry.",
      insta: "https://instagram.com/id",
      fb: "https://facebook.com/id",
      linkedin: "https://linkedin.com/in/id",
    },
  ];

  const theCollective = [
    {
      name: "Tanvir Ahmed",
      role: "Senior Photographer",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
      insta: "#",
      fb: "#",
    },
    {
      name: "Rahat Kabir",
      role: "Cinematographer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
      insta: "#",
      fb: "#",
    },
    {
      name: "Nabil Hasan",
      role: "Visual Editor",
      img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800",
      insta: "#",
      fb: "#",
    },
    {
      name: "Sajid Islam",
      role: "Lead Retoucher",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800",
      insta: "#",
      fb: "#",
    },
    {
      name: "Arif Rayhan",
      role: "Lighting Expert",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800",
      insta: "#",
      fb: "#",
    },
    {
      name: "Mehedi Hasan",
      role: "Production Manager",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
      insta: "#",
      fb: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#011425] text-white selection:bg-[#5C7C89] antialiased overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-[160px] pb-20 px-8 md:px-20 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] text-[15vw] font-serif italic text-white/[0.02] select-none pointer-events-none uppercase">
          Collective
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[1.2em] text-[#5C7C89] font-bold mb-8 block animate-pulse">
            Since 2016
          </span>
          <h1 className="text-6xl md:text-[130px] font-serif italic leading-[0.8] tracking-tighter text-white">
            Beyond the <br />
            <span className="not-italic font-sans font-black uppercase text-white tracking-tighter">
              Surface
            </span>
          </h1>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-24 px-8 md:px-20 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="relative z-10 aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]"
                alt="Our Story"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 p-8 md:p-12 bg-white/5 backdrop-blur-3xl border border-white/10 max-w-sm hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-bold mb-4 italic underline decoration-[#5C7C89]/30 underline-offset-8">
                Our Philosophy
              </p>
              <p className="text-xs font-light leading-loose text-zinc-400 tracking-wider">
                Capturing the perfume of your memories. Based in Dhaka,
                archiving worldwide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 lg:pl-10">
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              "We archive <br /> human legacy."
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#5C7C89] to-transparent" />
            <div className="space-y-6 text-zinc-400 font-light tracking-widest text-[11px] md:text-[13px] leading-loose uppercase">
              <p>
                Ocean of Orchid is not just a name; it represents the strength
                and rare beauty found in every human story we tell.
              </p>
              <p>
                Every frame is carefully curated to breathe life into your
                memories, ensuring they remain timeless for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE VISIONARIES - Lead Socials (Insta, FB, LinkedIn) */}
      <section className="py-32 px-8 md:px-20 bg-black/20">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-7xl font-serif italic text-white tracking-tighter">
              The Minds Behind
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {leadDuo.map((lead, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden border border-white/5 group-hover:border-[#5C7C89]/40 transition-all duration-1000 shadow-3xl mb-8 bg-[#011425]">
                  <img
                    src={lead.img}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s]"
                    alt={lead.name}
                  />
                  {/* Floating Socials for Key Persons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011425] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-10 gap-5 z-20">
                    <a
                      href={lead.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-all"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href={lead.fb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all"
                    >
                      <FaFacebookF size={16} />
                    </a>
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-all"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-serif italic text-[#5C7C89]/60">
                    {lead.id}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif italic text-white">
                    {lead.name}
                  </h4>
                  <p className="text-[9px] uppercase tracking-[0.5em] text-[#5C7C89] font-bold border-l border-[#5C7C89] pl-4">
                    {lead.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE COLLECTIVE - Mosaic Portraits with Insta & FB */}
      <section className="py-32 px-8 md:px-20 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
              The Collective
            </h2>
            <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold">
              Visual Specialists // Dhaka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            {theCollective.map((member, i) => (
              <div key={i} className="group cursor-default relative">
                <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 group-hover:border-[#5C7C89]/30 transition-all duration-700 mb-6 bg-[#011425]">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    alt={member.name}
                  />

                  {/* Quick Social Overlay for Collective Members */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                    <a
                      href={member.insta}
                      className="text-white hover:text-[#5C7C89] transition-colors"
                    >
                      <FaInstagram size={16} />
                    </a>
                    <a
                      href={member.fb}
                      className="text-white hover:text-[#5C7C89] transition-colors"
                    >
                      <FaFacebookF size={14} />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-[11px] font-medium tracking-widest text-white leading-tight uppercase">
                    {member.name}
                  </h5>
                  <p className="text-[7px] uppercase tracking-[0.4em] text-[#5C7C89] font-bold mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-48 text-center bg-gradient-to-b from-[#011425] to-black">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-6">
          <h2 className="text-5xl md:text-[90px] font-serif italic text-white leading-none tracking-tighter">
            Your legacy <br /> awaits.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-14 py-6 bg-[#5C7C89] text-white text-[10px] uppercase tracking-[0.8em] font-black hover:bg-white hover:text-[#011425] transition-all duration-700 shadow-2xl"
          >
            Connect with us
          </Link>
        </div>
      </section>
    </main>
  );
}
