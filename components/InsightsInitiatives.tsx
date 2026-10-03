"use client";

import { ArrowUpRight, Zap, Target, Factory } from "lucide-react";

export default function InsightsInitiatives() {
  const initiatives = [
    {
      category: "Capacity & Scale",
      theme: "light",
      icon: <Factory className="w-5 h-5 text-[#8C7A62]" />,
      title: "Expanding production horizons to 10+ MTPA",
      description:
        "Accelerating strategic greenfield and brownfield capacity additions across Telangana, Andhra Pradesh, Madhya Pradesh, and Karnataka. Modern automated clinker lines enable Sagar Cements to reliably fulfill landmark infrastructure orders.",
      metrics: "10+ MTPA Target Consolidated Scale",
    },
    {
      category: "Sustainability & ESG",
      theme: "dark",
      icon: <Zap className="w-5 h-5 text-[#C5A880]" />,
      title: "Green energy & circular manufacturing",
      description:
        "Commissioning captive Waste Heat Recovery Systems (WHRS) and massive solar installations. These initiatives generate clean, green power directly on-site, lowering carbon intensity and specific energy consumption.",
      metrics: "Substantial Renewable Power Substitution",
    },
  ];

  return (
    <section id="initiatives" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              05 / Initiatives &amp; Impact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Insights &amp; initiatives
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Strategic milestones and progressive initiatives led across the Sagar Group ecosystem.
          </p>
        </div>

        {/* 2 Feature Cards matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
