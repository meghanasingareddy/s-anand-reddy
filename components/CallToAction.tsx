"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CallToActionProps {
  onOpenContact: () => void;
}

export default function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#D8C4A0] text-[#141820] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light tracking-tight text-[#141820] mb-2 leading-tight">
          Professional profile. <br />
          <span className="italic font-normal">Open conversation.</span>
        </h2>

        <p className="text-[15px] sm:text-[16.5px] text-[#4A4135] max-w-xl mx-auto font-normal mt-4 mb-8 leading-relaxed">
          For leadership development dialogues, executive coaching, professional training forums, and organizational development initiatives.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#11161F] hover:bg-[#202735] text-[#FAF8F5] text-[13px] font-medium tracking-widest uppercase transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight size={15} />
          </button>
          <a
            href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#11161F]/30 hover:border-[#11161F] text-[#11161F] text-[13px] font-medium tracking-widest uppercase transition-colors"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
