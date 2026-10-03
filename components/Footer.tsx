"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#07090D] text-[#8E97A6] border-t border-[#181E29] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181E29] items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#FAF8F5] uppercase font-sans">
              DR. S. ANAND REDDY
            </div>
            <p className="text-xs text-[#8E97A6] leading-relaxed max-w-md">
              Head of Learning &amp; Development • Hetero. Dedicated to developing people,
              building leadership capability, enabling continuous learning, and fostering vibrant organizational cultures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  About &amp; Profile
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF8F5] transition-colors">
                  Professional Journey
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#FAF8F5] transition-colors">
                  Areas of Focus
                </a>
              </li>
              <li>
                <a href="#perspective" className="hover:text-[#FAF8F5] transition-colors">
                  Leadership Philosophy
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-[#FAF8F5] transition-colors">
                  Initiatives &amp; Credentials
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Affiliations & LinkedIn */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Organization &amp; Connect
            </div>
            <div className="text-xs text-[#8E97A6] space-y-2">
              <div className="text-[#FAF8F5]">Hetero</div>
              <div className="text-[11px] text-[#6B7585]">
                ISTD Hyderabad &amp; NIPM
              </div>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#E8D3B8] transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5A6372] gap-4">
          <div>
            © {new Date().getFullYear()} Dr. S. Anand Reddy. All rights reserved.
          </div>
          <div className="text-[11px] font-mono tracking-wider">
            LEARNING &amp; ORGANIZATIONAL DEVELOPMENT • HETERO
          </div>
        </div>
      </div>
    </footer>
  );
}
