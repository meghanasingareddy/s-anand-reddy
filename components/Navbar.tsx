"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Timeline", href: "#timeline" },
    { name: "Archive", href: "#archive" },
    { name: "Ideas", href: "#ideas" },
    { name: "Real Initiatives", href: "#real-work" },
    { name: "Writings", href: "#writings" },
    { name: "Dialogues", href: "#conversation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D6] py-3.5 shadow-sm"
          : "bg-[#FAF8F5] border-b border-[#ECE6DB] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Title */}
        <a href="#" className="flex flex-col group">
          <span className="text-[14.5px] sm:text-[15.5px] font-semibold tracking-[0.16em] text-[#11161F] uppercase font-sans transition-colors">
            DR. S. ANAND REDDY
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#7A746B] uppercase font-medium mt-0.5">
            Head of Learning &amp; Development • Hetero
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium tracking-wider text-[#4A453E] hover:text-[#11161F] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D6CBB8] hover:border-[#11161F] text-[#3B352C] hover:text-[#11161F] text-[11.5px] font-medium tracking-wider uppercase transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#11161F] hover:bg-[#252D3C] text-[#FAF8F5] text-[11.5px] font-medium tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#11161F] hover:text-[#7A746B] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E8E2D6] px-6 py-6 space-y-3.5 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[13.5px] font-medium tracking-wider text-[#3B362F] hover:text-[#11161F] py-1 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5 border-t border-[#ECE6DB]">
            <a
              href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full border border-[#D6CBB8] text-[#11161F] text-[12.5px] font-medium tracking-wider uppercase flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 rounded-full bg-[#11161F] text-[#FAF8F5] text-[12.5px] font-medium tracking-wider uppercase"
            >
              Connect Directly
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
