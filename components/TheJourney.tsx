"use client";

import { Brain, Compass, Building, ArrowUpRight } from "lucide-react";

export default function TheJourney() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              02 / The Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            An evolution of ideas &amp; practice
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            From early behavioral observations to concrete enterprise learning infrastructure.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[15px] sm:text-[16px] text-[#4A443B] leading-[1.8]">
            <p>
              Dr. S. Anand Reddy&apos;s career is shaped by a distinct curiosity: how do human beings learn,
              interact, and find meaning within their workplace environments? Rather than treating organizational
              development as an abstract corporate function, his work has consistently connected everyday human
              habits with systemic organizational capability.
            </p>
            <p>
              His background combines business administration, counseling psychology, and doctoral inquiry into
              <em> Servant Leadership and Organizational Citizenship Behavior (OCB)</em>, alongside an executive
              <strong> Management Development Program at XLRI Jamshedpur (2020–2021)</strong>.
            </p>
            <p>
              At <strong>Hetero</strong>, this thinking translates directly into physical and digital learning
              ecosystems—spearheading initiatives such as <strong>MANTHAN</strong> (fresh graduate onboarding),
              the hands-on <strong>QC Training Lab</strong> for technical simulation, and the broader <strong>NIPUNA</strong> learning academy.
            </p>
            <p>
              Through his writing, research publications, and leadership as Chairman of the Indian Society for Training
              and Development (ISTD) Hyderabad Chapter, he continues to advocate for training models that build tangible capability rather than just checking attendance boxes.
            </p>
          </div>

          {/* Core Foundations Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#EFE8DA] border border-[#DFD5C2] rounded-sm p-8 shadow-sm">
              <h3 className="text-xs font-mono tracking-[0.25em] text-[#8C7A62] uppercase mb-6 font-semibold pb-3 border-b border-[#DFD5C2]">
                Key Dimensions
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5">
                    <Brain size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Psychological &amp; Behavioral Lens
                    </div>
                    <div className="text-[14.5px] font-semibold text-[#141820] mt-0.5">
                      Servant Leadership &amp; Counseling Psychology
                    </div>
                    <div className="text-xs text-[#6B6357] mt-1">
                      Exploring intrinsic motivation, psychic income, and interpersonal dynamics.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5">
                    <Compass size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Executive &amp; Academic Rigor
                    </div>
                    <div className="text-[14.5px] font-semibold text-[#141820] mt-0.5">
                      XLRI Jamshedpur MDP &amp; Doctoral Research
                    </div>
                    <div className="text-xs text-[#6B6357] mt-1">
                      Translating organizational research into measurable capability frameworks.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5">
                    <Building size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Enterprise Execution
                    </div>
                    <div className="text-[14.5px] font-semibold text-[#141820] mt-0.5">
                      Hetero L&amp;D Ecosystem (NIPUNA, MANTHAN, QC Lab)
                    </div>
                    <div className="text-xs text-[#6B6357] mt-1">
                      Building real training labs and graduate pathways for operational readiness.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
