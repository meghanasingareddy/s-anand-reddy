"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function IndustryPerspective() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: "01",
      title: "Building cultures of continuous learning",
      summary:
        "Cultivating environments where learning is integrated directly into daily work, empowering employees to continuously adapt, upskill, and thrive.",
      quote:
        "Building a culture of continuous learning is the most resilient foundation an organization can create for long-term growth.",
    },
    {
      id: "02",
      title: "Transformative leadership & capability",
      summary:
        "Developing leaders who inspire, coach, and elevate their teams, creating psychological safety and driving collective organizational success.",
      quote:
        "True leadership development goes beyond managing tasks—it is about empowering people and unlocking their fullest potential.",
    },
    {
      id: "03",
      title: "Strategic Learning & Organizational Development",
      summary:
        "Aligning learning frameworks and organizational development directly with business strategy to ensure measurable impact and workforce agility.",
      quote:
        "When capability development aligns with organizational vision, talent becomes the key catalyst for sustainable innovation.",
    },
    {
      id: "04",
      title: "Professional training & community leadership",
      summary:
        "Advancing the HR and learning community through active engagement with professional bodies like the Indian Society for Training and Development (ISTD) and NIPM.",
      quote:
        "Contributing to professional training forums strengthens the entire talent development and human resources ecosystem.",
    },
  ];

  return (
    <section id="perspective" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820] border-t border-[#ECE6DB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              04 / Leadership Perspective
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Philosophy &amp; insights
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Perspectives on human potential, transformative leadership, and continuous learning cultures.
          </p>
        </div>

        {/* 2-Column Spotlight + Interactive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Dark Spotlight Card */}
          <div className="lg:col-span-5 bg-[#0B0E14] text-[#FAF8F5] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-lg relative overflow-hidden border border-[#1E2430]">
            <div className="relative z-10">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold block mb-8">
                Professional Perspective
              </span>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-light leading-snug text-[#FAF8F5] mb-6">
                &ldquo;Fostering a culture of continuous learning and transformative leadership is at the heart of building resilient, future-ready organizations.&rdquo;
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#202735]">
              <div className="text-xs tracking-[0.2em] font-semibold text-[#FAF8F5] uppercase">
                Dr. S. Anand Reddy
              </div>
              <div className="text-[11px] text-[#C5A880] tracking-wide mt-0.5">
                Head of Learning &amp; Development, Hetero
              </div>
            </div>

            {/* Ambient gold glow */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {perspectives.map((item, index) => {
              const isOpen = activeTab === index;
              return (
                <div
                  key={item.id}
                  className={`border transition-all duration-200 rounded-sm ${
                    isOpen
                      ? "bg-[#FFFFFF] border-[#C5A880] shadow-sm"
                      : "bg-[#F7F3EB] border-[#E8E2D6] hover:border-[#D6CBBA]"
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(isOpen ? -1 : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#8C7A62] font-semibold">
                        {item.id}
                      </span>
                      <span className="text-[15.5px] sm:text-[17px] font-serif-luxury font-medium text-[#141820]">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C7A62] transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F0EBE1] space-y-3">
                      <p className="text-[14px] text-[#4A443B] leading-relaxed">
                        {item.summary}
                      </p>
                      <blockquote className="text-[13.5px] font-serif-luxury italic text-[#8C7A62] bg-[#FAF8F5] p-3 rounded-xs border-l-2 border-[#C5A880]">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
