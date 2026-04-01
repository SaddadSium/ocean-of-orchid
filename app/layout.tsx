import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ocean of Orchid | Visual Collective",
  description:
    "Premium Photography & Cinematography based in Dhaka, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#011425] text-white">
        {/* Navbar globally thakbe */}
        <Navbar />

        {/* Main Content Area */}
        <div className="min-h-screen">{children}</div>

        {/* Footer globally thakbe */}
        <Footer />
      </body>
    </html>
  );
}
