"use client";

import { GraduationCap, FlaskConical, Award, Building, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function WorkThatBecameReal() {
  const initiatives = [
    {
      name: "MANTHAN",
      badge: "Graduate Development Initiative",
      icon: <GraduationCap className="w-6 h-6 text-[#8C7A62]" />,
      whatItIs:
        "A structured, multi-week onboarding and capability-building program tailored specifically for fresh science and pharmacy graduates entering the pharmaceutical workforce.",
      whyItMatters:
        "Accelerates the transition from theoretical academic knowledge to regulated pharmaceutical operations, establishing compliance discipline, work culture, and practical confidence.",
      connection:
        "Dr. Anand Reddy architected the behavioral induction modules, competency mapping, and structured mentorship frameworks.",
      metrics: "Structured Graduate Onboarding & Shopfloor Readiness",
    },
    {
      name: "QC TRAINING LAB",
      badge: "Hands-On Technical Infrastructure",
      icon: <FlaskConical className="w-6 h-6 text-[#8C7A62]" />,
      whatItIs:
        "A dedicated physical simulation laboratory where young quality-control analysts practice analytical instrumentation, wet chemistry, and Good Laboratory Practices (cGLP) in a guided environment.",
      whyItMatters:
        "Eliminates trial-and-error in live production environments, safeguarding data integrity and accelerating technical competency through realistic simulations.",
      connection:
        "Designed the experiential learning curriculum and simulation workflows bridging university education with industrial standards.",
      metrics: "Experiential Simulation Infrastructure",
    },
    {
      name: "NIPUNA",
      badge: "Hetero Learning Academy",
      icon: <Award className="w-6 h-6 text-[#8C7A62]" />,
      whatItIs:
        "Hetero’s comprehensive corporate learning academy, unifying digital micro-learning, technical domain tracks, managerial academies, and compliance training.",
      whyItMatters:
        "Institutionalizes continuous capability building across thousands of employees across research, manufacturing, and commercial units.",
      connection:
        "Leads the enterprise-wide vision, platform digitalization, and academy roadmap as Head of Learning & Development at Hetero.",
      metrics: "Enterprise Learning Ecosystem",
    },
  ];

  return (
    <section id="real-work" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              06 / Real-World Execution
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Work that became real
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Concrete training infrastructure, graduate onboarding academies, and digital ecosystems built at Hetero.
          </p>
        </div>

        {/* 3 Real Initiatives Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E8E2D6] p-8 rounded-sm hover:border-[#C5A880] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE1]">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#8C7A62] font-semibold">
                    {item.badge}
                  </span>
                  <div className="p-2 bg-[#FAF8F5] rounded-full text-[#8C7A62]">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-serif-luxury font-normal text-[#141820]">
                  {item.name}
                </h3>

                {/* What It Is */}
                <div>
                  <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8A8072] mb-1">
                    What It Is
                  </div>
                  <p className="text-[14px] text-[#4A443B] leading-relaxed">
                    {item.whatItIs}
                  </p>
                </div>

                {/* Why It Matters */}
                <div>
                  <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8A8072] mb-1">
                    Why It Matters
                  </div>
                  <p className="text-[14px] text-[#4A443B] leading-relaxed">
                    {item.whyItMatters}
                  </p>
                </div>

                {/* Connection */}
                <div className="p-4 bg-[#F9F6F0] rounded-xs border-l-2 border-[#C5A880]">
                  <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8C7A62] mb-1">
                    Dr. Anand Reddy&apos;s Connection
                  </div>
                  <p className="text-xs text-[#5A5246] leading-relaxed font-sans">
                    {item.connection}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-mono text-[#8C7A62]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#8C7A62]" />
                  <span>{item.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
