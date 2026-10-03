"use client";

import { BrainCircuit, Compass, Users2 } from "lucide-react";

export default function LeadershipFocus() {
  const pillars = [
    {
      num: "01",
      icon: <BrainCircuit className="w-5 h-5 text-[#8C7A62]" />,
      title: "Learning & Organizational Development",
      description:
        "Architecting comprehensive employee learning frameworks, diagnostics, training needs assessments, and organizational development programs that align workforce capabilities with strategic goals.",
      points: [
        "Learning & Organizational Development",
        "Training Needs Analysis (TNA)",
        "Building continuous learning cultures",
      ],
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-[#8C7A62]" />,
      title: "Leadership Development & Coaching",
      description:
        "Developing managerial and leadership excellence through structured executive coaching, transformative leadership frameworks, and behavioral capability interventions.",
      points: [
        "Leadership development programs",
        "Executive & managerial coaching",
        "Transformative leadership practices",
      ],
    },
    {
      num: "03",
      icon: <Users2 className="w-5 h-5 text-[#8C7A62]" />,
      title: "Talent Development & Upskilling",
      description:
        "Designing sustainable talent development pipelines, employee capability enhancement initiatives, upskilling programs, and fostering workforce engagement.",
      points: [
        "Talent development strategies",
        "Employee upskilling & training",
        "Continuous growth & empowerment",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              03 / Areas of Focus
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Expertise &amp; focus areas
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Core HR, learning, and talent practices dedicated to developing people and driving continuous learning.
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
