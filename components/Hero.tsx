"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0E14] text-[#FAF8F5] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#252D3C]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-6 bg-[#C5A880]" />
              <span className="text-[11.5px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold">
                Ideas • Initiatives • Human Capability
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light font-serif-luxury tracking-tight leading-[1.08] text-[#FAF8F5] mb-4">
              Dr. S. <br />
              <span className="italic font-normal text-[#F4EFE6]">Anand Reddy</span>
            </h1>

            {/* Verified Designation */}
            <p className="text-[17px] sm:text-[19px] text-[#C5A880] font-serif-luxury tracking-wide mb-6">
              Head of Learning &amp; Development • Hetero
            </p>

            {/* Editorial Lead Narrative */}
            <p className="text-[15px] sm:text-[16px] text-[#A6ADB8] font-normal leading-relaxed max-w-xl mb-8">
              A journey through 18+ years of human capability development, psychological inquiry,
              enterprise learning architectures, and tangible workforce initiatives across diverse industries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B59870] text-[#0B0E14] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <span>View LinkedIn Archive</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2B3548] hover:border-[#C5A880] text-[#FAF8F5] hover:text-[#C5A880] text-xs font-medium tracking-widest uppercase transition-colors"
              >
                <span>Explore Timeline</span>
                <ArrowDown size={14} />
              </a>
            </div>

            {/* Verified Evidence Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#202735] max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury text-[#FAF8F5] font-light">
                  18<span className="text-[#C5A880]">+</span>
                </div>
                <div className="text-[10.5px] tracking-[0.14em] uppercase text-[#8E97A6] mt-1 font-medium">
                  Years in L&amp;OD
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury text-[#FAF8F5] font-light">
                  Hetero
                </div>
                <div className="text-[10.5px] tracking-[0.14em] uppercase text-[#8E97A6] mt-1 font-medium">
                  Head of L&amp;D
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury text-[#FAF8F5] font-light">
                  ISTD
                </div>
                <div className="text-[10.5px] tracking-[0.14em] uppercase text-[#8E97A6] mt-1 font-medium">
                  Hyderabad Chapter
                </div>
              </div>
            </div>
          </div>

          {/* Right Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] bg-[#12161F] border border-[#232B3A] rounded-sm p-5 shadow-2xl group">
              {/* Monogram Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#202735] mb-4">
                <span className="text-xs tracking-[0.25em] text-[#8E97A6] uppercase font-mono">
                  HETERO • L&amp;D
                </span>
                <span className="text-sm font-serif-luxury tracking-widest text-[#C5A880] font-bold">
                  AR
                </span>
              </div>

              {/* Portrait Container */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-[#0A0D12] rounded-sm">
                <Image
                  src="/anand-reddy.png"
                  alt="Dr. S. Anand Reddy — Head of Learning & Development, Hetero"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Portrait Caption */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase font-semibold text-[#FAF8F5]">
                    Dr. S. Anand Reddy
                  </div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#C5A880] mt-0.5">
                    Head of Learning &amp; Development, Hetero
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1C2330] hover:bg-[#C5A880] text-[#8E97A6] hover:text-[#0B0E14] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
