"use client";

import { Sparkles, Award, GraduationCap, Building2 } from "lucide-react";

export default function InsightsInitiatives() {
  const initiatives = [
    {
      category: "Enterprise Learning Strategy",
      theme: "light",
      icon: <Sparkles className="w-5 h-5 text-[#8C7A62]" />,
      title: "Driving Continuous Growth & Learning Initiatives at Hetero",
      description:
        "Responsible for driving learning strategies and organizational development initiatives at Hetero that foster a culture of continuous growth, capability building, and transformative leadership across the enterprise.",
      metrics: "Enterprise Learning & Capability",
    },
    {
      category: "Professional Community Leadership",
      theme: "dark",
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
      title: "Indian Society for Training and Development (ISTD)",
      description:
        "Actively contributing to the professional training and human resources community as an Executive Committee Member and Chairman of the Indian Society for Training and Development (ISTD), Hyderabad Chapter.",
      metrics: "ISTD Hyderabad Leadership",
    },
  ];

  const credentials = [
    {
      title: "Head of Learning & Development",
      institution: "Hetero",
      category: "Current Role",
    },
    {
      title: "Management Development Program (MDP)",
      institution: "XLRI Jamshedpur (2020–2021)",
      category: "Executive Education",
    },
    {
      title: "Executive Committee & Chairman",
      institution: "Indian Society for Training and Development (ISTD), Hyderabad",
      category: "Professional Association",
    },
    {
      title: "Executive Committee Member",
      institution: "National Institute of Personnel Management (NIPM)",
      category: "Professional Association",
    },
  ];

  return (
    <section id="initiatives" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              05 / Initiatives &amp; Affiliations
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Initiatives &amp; credentials
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Key professional initiatives, executive education, and leadership roles across recognized institutions.
          </p>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                item.theme === "light"
                  ? "bg-[#FAF8F5] text-[#141820] border-[#E8E2D6]"
                  : "bg-[#121620] text-[#FAF8F5] border-[#222B3B]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-current/10">
                  <span
                    className={`text-xs font-mono tracking-[0.2em] uppercase font-semibold ${
                      item.theme === "light" ? "text-[#8C7A62]" : "text-[#C5A880]"
                    }`}
                  >
                    {item.category}
                  </span>
                  <div>{item.icon}</div>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-serif-luxury font-normal mb-4 leading-snug ${
                    item.theme === "light" ? "text-[#141820]" : "text-[#FAF8F5]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-[14.5px] leading-relaxed mb-8 ${
                    item.theme === "light" ? "text-[#524B41]" : "text-[#A6ADB8]"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div
                className={`pt-5 border-t text-xs font-mono tracking-wider uppercase font-medium flex items-center justify-between ${
                  item.theme === "light"
                    ? "border-[#E8E2D6] text-[#8C7A62]"
                    : "border-[#1C2330] text-[#C5A880]"
                }`}
              >
                <span>{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials & Associations Grid */}
        <div className="bg-[#121620] border border-[#222B3B] rounded-sm p-8 sm:p-10">
          <h3 className="text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-8 font-semibold pb-4 border-b border-[#202735]">
            Verified Professional Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <div key={i} className="p-4 bg-[#0B0E14] border border-[#1E2533] rounded-xs flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                    {cred.category}
                  </div>
                  <h4 className="text-[14.5px] font-serif-luxury font-medium text-[#FAF8F5] leading-snug mb-2">
                    {cred.title}
                  </h4>
                </div>
                <div className="text-xs text-[#8E97A6] pt-2 border-t border-[#19202D]">
                  {cred.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
