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
    { name: "About", href: "#profile" },
    { name: "Journey", href: "#journey" },
    { name: "Focus", href: "#focus" },
    { name: "Perspective", href: "#perspective" },
    { name: "Initiatives", href: "#initiatives" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D6] py-3.5 shadow-sm"
          : "bg-[#FAF8F5] border-b border-[#ECE6DB] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex flex-col group">
          <span className="text-[15px] sm:text-[16px] font-semibold tracking-[0.18em] text-[#11161F] uppercase font-sans transition-colors">
            DR. S. ANAND REDDY
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#7A746B] uppercase font-medium mt-0.5">
            Managing Director • Sagar Cements
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium tracking-wider text-[#4A453E] hover:text-[#11161F] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#11161F] hover:bg-[#252D3C] text-[#FAF8F5] text-[13px] font-medium tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#11161F] hover:text-[#7A746B] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D6] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[14px] font-medium tracking-wider text-[#3B362F] hover:text-[#11161F] py-1 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 rounded-full bg-[#11161F] text-[#FAF8F5] text-[13px] font-medium tracking-wider uppercase"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
