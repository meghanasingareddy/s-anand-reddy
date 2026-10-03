"use client";

import { Compass, LineChart, Leaf } from "lucide-react";

export default function LeadershipFocus() {
  const pillars = [
    {
      num: "01",
      icon: <LineChart className="w-5 h-5 text-[#8C7A62]" />,
      title: "Long-horizon business thinking",
      description:
        "Navigating cyclical industry dynamics with patient capital allocation, disciplined debt management, and future-ready capacity planning.",
      points: [
        "Counter-cyclical capacity expansion",
        "Prudent balance-sheet governance",
        "Asset modernization & cost leadership",
      ],
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-[#8C7A62]" />,
      title: "Market & business development",
      description:
        "Building resilient distribution channels, nurturing multi-decade dealer partnerships, and reinforcing high brand trust across key South and Central Indian states.",
      points: [
        "Multi-tier dealer & distributor networks",
        "Institutional infrastructure partnerships",
        "Direct-to-market logistical efficiency",
      ],
    },
    {
      num: "03",
      icon: <Leaf className="w-5 h-5 text-[#8C7A62]" />,
      title: "Corporate leadership & ESG",
      description:
        "Pioneering clean energy adoption through captive waste-heat recovery (WHR), green power farms, alternative fuel consumption, and proactive community development.",
      points: [
        "Captive green energy & solar integration",
        "Eco-friendly blended cement portfolios",
        "Grassroots health and education initiatives",
      ],
    },
  ];

  return (
    <section id="focus" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              03 / Strategic Pillars
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Leadership focus
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Core strategic tenets driving sustainable industrial expansion and long-term shareholder value.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-[#FFFFFF] border border-[#E8E2D6] rounded-sm p-8 hover:border-[#C5A880] transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0EBE1]">
                  <span className="text-xs font-mono tracking-[0.25em] text-[#8C7A62] font-semibold">
                    {pillar.num}
                  </span>
                  <div className="p-2 bg-[#FAF8F5] rounded-full group-hover:bg-[#EFE8DA] transition-colors">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-serif-luxury font-normal text-[#141820] mb-4 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-[14.5px] text-[#554E44] leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1] space-y-2">
                {pillar.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#736A5E]">
                    <span className="w-1 h-1 rounded-full bg-[#8C7A62]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
