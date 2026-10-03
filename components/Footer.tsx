"use client";

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
              Managing Director • Sagar Cements Limited. Guiding sustainable industrial growth,
              state-of-the-art cement manufacturing, and clean energy innovation across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#profile" className="hover:text-[#FAF8F5] transition-colors">
                  Executive Profile
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#FAF8F5] transition-colors">
                  Leadership Journey
                </a>
              </li>
              <li>
                <a href="#focus" className="hover:text-[#FAF8F5] transition-colors">
                  Strategic Pillars
                </a>
              </li>
              <li>
                <a href="#perspective" className="hover:text-[#FAF8F5] transition-colors">
                  Industry Perspective
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-[#FAF8F5] transition-colors">
                  Insights &amp; Initiatives
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate / Enterprise */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
              Enterprise
            </div>
            <div className="text-xs text-[#8E97A6] space-y-1.5">
              <div>Sagar Cements Limited</div>
              <div className="text-[11px] font-mono text-[#5A6372]">
                NSE: <span className="text-[#C5A880]">SAGCEM</span> | BSE: <span className="text-[#C5A880]">502090</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="text-xs text-[#FAF8F5] underline hover:text-[#C5A880] transition-colors"
                >
                  Direct Executive Contact →
                </button>
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
            EXECUTIVE PORTFOLIO
          </div>
        </div>
      </div>
    </footer>
  );
}
