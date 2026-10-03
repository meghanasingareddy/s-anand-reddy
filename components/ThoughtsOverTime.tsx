"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, Sparkles, Layers, Award } from "lucide-react";

export default function ThoughtsOverTime() {
  const [activeYear, setActiveYear] = useState(0);

  const timelineData = [
    {
      year: "2014",
      tag: "Everyday Observations",
      title: "Human Perception & Everyday Metaphors",
      description:
        'Early LinkedIn reflections and analogies using everyday situations—such as the "Chips" post—illustrating how human perception, packaging versus substance, and small habits reveal deeper truths about workplace culture.',
      whatItShows: "Shows an eye for finding profound organizational psychology in ordinary human experiences.",
    },
    {
      year: "2017",
      tag: "Personality & Psychology",
      title: "Personality: Inherited vs. Developed",
      description:
        "Deep exploration into personality frameworks, counseling methods, and the science of behavioral change. Examining how self-awareness enables professionals to transcend inherited traits.",
      whatItShows: "Demonstrates a shift into structured psychological research and self-mastery frameworks.",
    },
    {
      year: "2020",
      tag: "Executive Strategy",
      title: "Leadership & Executive Rigor (XLRI Jamshedpur)",
      description:
        "Participation in the Management Development Program at XLRI Jamshedpur (2020–2021) and doctoral inquiry into Servant Leadership and Organizational Citizenship Behavior (OCB).",
      whatItShows: "Bridges behavioral theory with high-level corporate governance and strategic leadership.",
    },
    {
      year: "2023",
      tag: "Academic Advisory",
      title: "Industry-Academia Mentoring & ISTD Leadership",
      description:
        "Active chairmanship of the Indian Society for Training and Development (ISTD) Hyderabad Chapter and advisory dialogues on making college curricula directly relevant to industrial employability.",
      whatItShows: "Advocates for systemic changes in how educational institutions prepare talent for the real world.",
    },
    {
      year: "2024",
      tag: "Enterprise Initiative",
      title: "MANTHAN — Graduate Development Initiative",
      description:
        "Spearheading MANTHAN at Hetero, a structured capability and onboarding program transforming fresh science and pharmacy graduates into operational professionals.",
      whatItShows: "Translates talent development principles into large-scale graduate readiness programs.",
    },
    {
      year: "2025",
      tag: "Physical Infrastructure",
      title: "QC Training Lab — Hands-On Technical Readiness",
      description:
        "Establishing a dedicated simulation laboratory for young quality-control professionals to practice real-world testing procedures in a safe, guided learning environment.",
      whatItShows: "Replaces passive classroom lectures with immersive, hands-on simulation infrastructure.",
    },
    {
      year: "2025+",
      tag: "Enterprise Academy",
      title: "NIPUNA — Hetero Learning Academy",
      description:
        "Driving the enterprise-wide NIPUNA Academy, integrating digital micro-learning, competency diagnostics, and structured career development tracks across Hetero's global workforce.",
      whatItShows: "Creates a permanent, institutionalized ecosystem of continuous growth across the enterprise.",
    },
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              03 / Thoughts Over Time
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Chronicle of ideas &amp; milestones
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            A chronological progression showing how early behavioral observations evolved into enterprise training academies.
          </p>
        </div>

        {/* Timeline Navigation Bar for Desktops */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 border-b border-[#202735] pb-6">
          {timelineData.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(idx)}
              className={`text-left p-3 rounded-xs transition-all duration-200 ${
                activeYear === idx
                  ? "bg-[#18202C] border-b-2 border-[#C5A880] shadow-sm"
                  : "hover:bg-[#12161F] text-[#8E97A6]"
              }`}
            >
              <div className={`text-lg font-serif-luxury font-medium ${activeYear === idx ? "text-[#FAF8F5]" : "text-[#717A8A]"}`}>
                {item.year}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] mt-0.5 truncate">
                {item.tag}
              </div>
            </button>
          ))}
        </div>

        {/* Active Timeline Feature Card (Desktop & Tablet) */}
        <div className="hidden lg:block bg-[#121620] border border-[#222B3B] p-8 sm:p-12 rounded-sm relative shadow-xl">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2230] text-[#C5A880] text-[11px] font-mono uppercase tracking-widest">
                <Calendar size={13} />
                <span>{timelineData[activeYear].year} • {timelineData[activeYear].tag}</span>
              </div>
              <h3 className="text-3xl font-serif-luxury font-normal text-[#FAF8F5]">
                {timelineData[activeYear].title}
              </h3>
              <p className="text-[15px] text-[#A6ADB8] leading-relaxed">
                {timelineData[activeYear].description}
              </p>
            </div>

            <div className="col-span-4 bg-[#0B0E14] border border-[#1E2636] p-6 rounded-xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block">
                What It Shows
              </span>
              <p className="text-[13.5px] font-serif-luxury italic text-[#FAF8F5] leading-snug">
                &ldquo;{timelineData[activeYear].whatItShows}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121620] border border-[#222B3B] p-6 rounded-sm space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1A2230] text-[#C5A880] text-[10.5px] font-mono uppercase tracking-wider">
                <span>{item.year}</span>
                <span>•</span>
                <span>{item.tag}</span>
              </div>
              <h3 className="text-xl font-serif-luxury font-normal text-[#FAF8F5]">
                {item.title}
              </h3>
              <p className="text-xs text-[#A6ADB8] leading-relaxed">
                {item.description}
              </p>
              <div className="pt-3 border-t border-[#1D2534] text-[11.5px] font-serif-luxury italic text-[#C5A880]">
                &ldquo;{item.whatItShows}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
