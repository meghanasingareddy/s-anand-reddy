"use client";

export default function LeadershipJourney() {
  const milestones = [
    {
      period: "18+ Years Experience",
      title: "Learning & Organizational Development",
      role: "Cross-Industry HR & L&OD Practitioner",
      description:
        "Over 18 years of experience designing and executing comprehensive Learning and Organizational Development frameworks, competency mapping, training needs analysis, and employee capability architectures across diverse industry sectors.",
      highlights: ["L&OD Frameworks", "Training Needs Analysis", "Employee Development"],
    },
    {
      period: "Leadership & Capability",
      title: "Leadership Development & Coaching",
      role: "Talent & Organizational Strategist",
      description:
        "Specializing in transformative leadership, managerial coaching, and organizational behavior. Dedicated to building leadership pipelines, mentoring high-potential talent, and fostering continuous learning environments.",
      highlights: ["Leadership Capability", "Executive Coaching", "Continuous Learning Culture"],
    },
    {
      period: "Current Role",
      title: "Head of Learning & Development",
      role: "Hetero",
      description:
        "Leading organizational learning strategies and talent development initiatives at Hetero, driving large-scale upskilling, behavioral interventions, and learning ecosystems that empower workforce potential.",
      highlights: ["Hetero L&D Leadership", "Enterprise Upskilling", "Transformative Culture"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              02 / Professional Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Professional journey
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Over 18 years of dedicated focus on human capability building, leadership transformation, and organizational learning.
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
                {/* Period tag */}
                <div className="text-sm font-mono tracking-[0.2em] text-[#C5A880] font-semibold mb-3">
                  {item.period}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-normal text-[#FAF8F5] mb-1">
                  {item.title}
                </h3>

                <div className="text-xs text-[#8E97A6] font-medium tracking-wide mb-5">
                  {item.role}
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
