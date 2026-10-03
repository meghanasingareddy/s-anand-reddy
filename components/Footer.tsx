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
          <div className="md:col-span-5 space-y-3">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#FAF8F5] uppercase font-sans">
              DR. S. ANAND REDDY
            </div>
            <p className="text-xs text-[#8E97A6] leading-relaxed max-w-sm">
              Head of Learning &amp; Development • Hetero. An archive of 18+ years of ideas,
              behavioral inquiry, graduate development initiatives, and enterprise learning ecosystems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Archive &amp; Sections
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <a href="#journey" className="hover:text-[#FAF8F5] transition-colors">
                The Journey
              </a>
              <a href="#timeline" className="hover:text-[#FAF8F5] transition-colors">
                Thoughts Over Time
              </a>
              <a href="#archive" className="hover:text-[#FAF8F5] transition-colors">
                From the Archive
              </a>
              <a href="#ideas" className="hover:text-[#FAF8F5] transition-colors">
                Ideas Explored
              </a>
              <a href="#real-work" className="hover:text-[#FAF8F5] transition-colors">
                Real-World Work
              </a>
              <a href="#writings" className="hover:text-[#FAF8F5] transition-colors">
                Articles &amp; Book
              </a>
              <a href="#conversation" className="hover:text-[#FAF8F5] transition-colors">
                In Conversation
              </a>
              <a href="#credentials" className="hover:text-[#FAF8F5] transition-colors">
                Credentials
              </a>
            </div>
          </div>

          {/* Connect & Organization */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Organization &amp; Connect
            </div>
            <div className="text-xs text-[#8E97A6] space-y-2">
              <div className="text-[#FAF8F5]">Hetero</div>
              <div className="text-[11px] text-[#6B7585]">
                ISTD Hyderabad Chapter (Chairman &amp; EC) • NIPM
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
          <div className="text-[11px] font-mono tracking-wider text-[#8E97A6]">
            HETERO • LEARNING &amp; ORGANIZATIONAL DEVELOPMENT
          </div>
        </div>
      </div>
    </footer>
  );
}
