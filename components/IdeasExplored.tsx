"use client";

import { Sparkles, BrainCircuit, HeartHandshake, Eye, ArrowUpRight } from "lucide-react";

export default function IdeasExplored() {
  const ideas = [
    {
      num: "01",
      icon: <BrainCircuit className="w-5 h-5 text-[#C5A880]" />,
      concept: "Gap Theory",
      subtitle: "Bridging Knowledge and Behavioral Execution",
      coreIdea:
        "Investigating the persistent divide between what people conceptually understand and what they actually execute on the ground. Real capability building is not about information delivery, but about closing this behavioral gap through guided practice and feedback loops.",
      evidence: "Explored across his writing and training frameworks on execution excellence.",
    },
    {
      num: "02",
      icon: <HeartHandshake className="w-5 h-5 text-[#C5A880]" />,
      concept: "Psychic Income",
      subtitle: "The Intangible Currency of Motivation",
      coreIdea:
        "The recognition, respect, psychological safety, and sense of purpose that employees derive from their workplace. Long-term loyalty and organizational citizenship behavior flourish when psychic income is treated as vital as financial compensation.",
      evidence: "Central theme in his articles on employee engagement and servant leadership.",
    },
    {
      num: "03",
      icon: <Eye className="w-5 h-5 text-[#C5A880]" />,
      concept: "Personality: Inherited vs. Developed",
      subtitle: "The Lens That Shapes Professional Effectiveness",
      coreIdea:
        "Deconstructing whether personality is fixed by genetics or malleable through conscious habit and training. He advocates that while disposition provides the raw starting point, disciplined self-awareness enables people to continually evolve.",
      evidence: "Featured prominently in his published LinkedIn series on personality development.",
    },
    {
      num: "04",
      icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />,
      concept: "People Skills & Empathetic Inquiry",
      subtitle: "The Subtle Craft of Interpersonal Harmony",
      coreIdea:
        "Human interactions in high-stakes operational environments require emotional attunement, de-escalation capability, and attentive listening. People skills are practical competencies that determine whether teams collaborate or fracture.",
      evidence: "Derived from his counseling psychology background and leadership workshops.",
    },
  ];

  return (
    <section id="ideas" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              05 / Distinct Themes
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Ideas he has explored
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Core intellectual concepts and behavioral frameworks drawn directly from his writings, research, and workshops.
          </p>
        </div>

        {/* 4 Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((idea) => (
            <div
              key={idea.num}
              className="bg-[#121620] border border-[#222B3B] p-8 sm:p-10 rounded-sm flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#202735]">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#C5A880] font-semibold">
                    {idea.num} // CONCEPT
                  </span>
                  <div className="p-2 bg-[#1A2230] rounded-full group-hover:bg-[#C5A880]/20 transition-colors">
                    {idea.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#FAF8F5] mb-2">
                  {idea.concept}
                </h3>

                <div className="text-xs font-mono text-[#C5A880] tracking-wide mb-5">
                  {idea.subtitle}
                </div>

                <p className="text-[14px] text-[#A6ADB8] leading-relaxed mb-6">
                  {idea.coreIdea}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C2330] flex items-center justify-between text-xs text-[#8E97A6]">
                <span className="font-serif-luxury italic">{idea.evidence}</span>
                <a
                  href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A880] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
