"use client";

export default function LeadershipJourney() {
  const milestones = [
    {
      period: "1992",
      title: "Director — Marketing & Projects",
      company: "Sagar Cements Limited",
      description:
        "Inducted into the board of directors. Structured the foundational retail and institutional sales networks across Andhra Pradesh and oversaw early capacity additions.",
      highlights: ["Market Network Inception", "Capacity Debottlenecking", "Brand Building"],
    },
    {
      period: "2008 – 2018",
      title: "Joint Managing Director",
      company: "Sagar Cements Limited",
      description:
        "Spearheaded multi-plant operations, joint ventures, thermal power integrations, and geographical expansion into neighboring high-growth regional markets.",
      highlights: ["Multi-Plant Expansion", "Thermal & Power Integration", "Joint Venture Leadership"],
    },
    {
      period: "2018 – Present",
      title: "Managing Director",
      company: "Sagar Cements Limited",
      description:
        "Steering overall corporate strategy, sustainable green energy investments, technological modernization, and marquee acquisitions including Andhra Cements Limited.",
      highlights: ["Andhra Cements Acquisition", "ESG & Green Energy", "10+ MTPA Strategic Vision"],
    },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              02 / Leadership Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Leadership journey
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Milestones across three decades of industrial scaling, transformation, and governance.
          </p>
        </div>

        {/* 3-Column Timeline Cards with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {milestones.map((item, index) => (
            <div
              key={item.period}
              className={`flex flex-col justify-between pt-6 border-t md:border-t-0 md:pt-0 ${
                index !== 0 ? "md:border-l md:border-[#202735] md:pl-8 lg:pl-12" : ""
              } border-[#202735]`}
            >
              <div>
                {/* Year tag */}
                <div className="text-sm font-mono tracking-[0.2em] text-[#C5A880] font-semibold mb-3">
                  {item.period}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-normal text-[#FAF8F5] mb-1">
                  {item.title}
                </h3>

                <div className="text-xs text-[#8E97A6] font-medium tracking-wide mb-5">
                  {item.company}
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#A6ADB8] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1C222E]">
                {item.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-[#8E97A6] bg-[#12161F] px-2.5 py-1 rounded-xs border border-[#202735]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
