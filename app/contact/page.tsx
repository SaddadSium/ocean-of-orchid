"use client";
import { useState } from "react";
import Link from "next/link";
// FaCircle added to the import list below
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
  FaMap,
  FaCircle,
} from "react-icons/fa";

export default function Contact() {
  const [eventType, setEventType] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      eventType: e.target.eventType.value,
      package: e.target.package.value,
      reference: e.target.reference.value,
      venue: e.target.venue.value,
      description: e.target.description.value,
    };

    try {
      // Tomar Google Web App URL ekhane boshao
      const GOOGLE_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbx3mqXzvDahc6S1mr_yMF4H_9ETiITexrSSCeZXxvs6GkUOQzXdUjR7dXFtHGIzzmM/exec";

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("SUCCESS");
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#011425] text-white pt-[160px] pb-20 px-8 md:px-20 antialiased selection:bg-[#5C7C89]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Side Info */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[1em] text-[#5C7C89] font-bold block animate-pulse">
              Inquiry Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.85] tracking-tighter uppercase text-white">
              Start Your <br />{" "}
              <span className="not-italic font-sans font-black">Legacy</span>
            </h1>
          </div>

          <div className="space-y-8 pt-10 border-t border-white/5 text-zinc-300">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5C7C89] transition-all">
                <FaPhoneAlt size={14} className="text-[#5C7C89]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#5C7C89] font-bold mb-1">
                  Studio
                </p>
                <p className="text-sm tracking-widest">+880 1XXX XXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5C7C89] transition-all">
                <FaEnvelope size={14} className="text-[#5C7C89]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#5C7C89] font-bold mb-1">
                  Email
                </p>
                <p className="text-sm tracking-widest font-sans">
                  hello@oceanoforchid.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5C7C89] transition-all">
                <FaMapMarkerAlt size={14} className="text-[#5C7C89]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#5C7C89] font-bold mb-1">
                  HQ
                </p>
                <p className="text-sm tracking-widest font-sans uppercase">
                  Banani, Dhaka
                </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-6">
            <a
              href="#"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#5C7C89] transition-all"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 p-8 md:p-16 shadow-2xl backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white"
          >
            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Full Name
              </label>
              <input
                required
                name="fullName"
                type="text"
                placeholder="ENTER YOUR NAME"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 tracking-widest"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 tracking-widest"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Phone Number
              </label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+880"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 tracking-widest"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Event Date
              </label>
              <input
                required
                name="date"
                type="date"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white color-scheme-dark"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Event Category
              </label>
              <select
                required
                name="eventType"
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white tracking-widest cursor-pointer"
              >
                <option className="bg-[#011425]" value="">
                  Select Category
                </option>
                <option className="bg-[#011425]" value="Wedding">
                  Wedding Story
                </option>
                <option className="bg-[#011425]" value="Corporate">
                  Corporate / Industrial
                </option>
                <option className="bg-[#011425]" value="Birthday">
                  Birthday / Event
                </option>
              </select>
            </div>

            <div className="space-y-3 group relative">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Select Package
              </label>
              <select
                required
                name="package"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white tracking-widest cursor-pointer appearance-none"
              >
                <option className="bg-[#011425]" value="">
                  Choose Your Tier
                </option>
                <option className="bg-[#011425]" value="Basic">
                  Basic (25k)
                </option>
                <option className="bg-[#011425]" value="Silver">
                  Silver (45k)
                </option>
                <option className="bg-[#011425]" value="Premium">
                  Premium (85k)
                </option>
                <option className="bg-[#011425]" value="Combo">
                  Combo Collective
                </option>
                <option className="bg-[#011425]" value="Elegant">
                  Elegant Signature
                </option>
              </select>
              <FaCircle
                className="text-[#5C7C89] absolute right-2 top-[70%] -translate-y-1/2 pointer-events-none"
                size={6}
              />
            </div>

            <div className="space-y-3 group md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                How did you find us?
              </label>
              <input
                name="reference"
                type="text"
                placeholder="FB / INSTA ID / FRIEND"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 tracking-widest"
              />
            </div>

            <div className="space-y-3 group md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Venue / Location
              </label>
              <input
                name="venue"
                type="text"
                placeholder="CITY & VENUE NAME"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 tracking-widest"
              />
            </div>

            <div className="space-y-3 group md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.5em] text-[#5C7C89] font-black">
                Message
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="SHARE YOUR VISION..."
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#5C7C89] text-white placeholder:text-zinc-700 resize-none tracking-widest"
              ></textarea>
            </div>

            {/* Corporate Alert */}
            {eventType === "Corporate" && (
              <div className="md:col-span-2 p-6 bg-[#5C7C89]/20 border border-[#5C7C89]/40 rounded-sm">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white font-bold">
                  Corporate Notice: Formal quotes are handled via direct email.
                  Our team will verify and respond within 24 business hours.
                </p>
              </div>
            )}

            {/* Submit */}
            <div className="md:col-span-2 pt-6">
              {status === "SUCCESS" && (
                <p className="text-green-500 text-xs mb-4 tracking-[0.3em] uppercase text-center font-bold">
                  Inquiry Sent Successfully!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-500 text-xs mb-4 tracking-[0.3em] uppercase text-center font-bold">
                  Failed to send. Please try again.
                </p>
              )}

              <button
                disabled={loading}
                type="submit"
                className="w-full py-6 bg-white text-black text-[11px] uppercase tracking-[1em] font-black hover:bg-[#5C7C89] hover:text-white transition-all duration-700 disabled:opacity-50"
              >
                {loading ? "PROCESSING..." : "SEND INQUIRY"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-40 border-t border-white/5 pt-32">
        <div className="max-w-[1800px] mx-auto text-center mb-16 px-6">
          <span className="uppercase tracking-[1.2em] text-[10px] font-black text-[#5C7C89] block animate-pulse">
            Visit Our Studio
          </span>
          <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter uppercase mt-4">
            HQ Location
          </h2>
        </div>
        <div className="relative h-[600px] bg-white/[0.02] border border-white/10 flex items-center justify-center p-6 shadow-2xl group overflow-hidden">
          <FaMap
            size={50}
            className="text-[#5C7C89]/30 animate-bounce group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute bottom-10 left-10 right-10 p-10 bg-[#011425]/90 backdrop-blur-3xl border border-white/10 max-w-sm">
            <FaMapMarkerAlt size={16} className="text-[#5C7C89] mb-4" />
            <h3 className="text-xl font-serif italic text-white mb-2 uppercase">
              Orchid Atelier
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 leading-loose">
              Banani, Dhaka <br /> Bangladesh
            </p>
            <Link
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-6 text-[10px] uppercase tracking-[0.5em] font-black text-[#5C7C89] hover:text-white transition-all border-b border-[#5C7C89]/30 pb-1"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
