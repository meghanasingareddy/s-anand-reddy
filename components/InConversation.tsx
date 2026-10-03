"use client";

import { MessageSquare, ArrowUpRight, Award, Mic } from "lucide-react";

export default function InConversation() {
  return (
    <section id="conversation" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820] border-t border-[#ECE6DB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              08 / In Conversation
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Public dialogues &amp; panels
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Selected public discussions, education leadership forums, and industry summits.
          </p>
        </div>

        {/* The Economic Times Feature Dialogue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Feature Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8E2D6] p-8 sm:p-12 rounded-sm shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#11161F] text-[#FAF8F5] text-[10.5px] font-mono uppercase tracking-widest">
                  The Economic Times
                </span>
                <span className="text-xs font-mono uppercase text-[#8C7A62]">
                  Education Leadership Discussion
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#141820] leading-snug">
                Bridging the Academia-Industry Employability Deficit
              </h3>

              <div className="p-4 bg-[#F9F6F0] rounded-xs border-l-2 border-[#8C7A62] font-serif-luxury italic text-[#4A443B] text-[15px] leading-relaxed">
                &ldquo;Identified as Head of Learning and Development at Hetero and Chairman of the Indian Society for Training and Development (ISTD) Hyderabad Chapter, emphasizing the urgent need for academic curricula to incorporate practical, real-world simulation and behavioral adaptability.&rdquo;
              </div>

              <p className="text-[14px] text-[#554E44] leading-relaxed">
                Dr. Anand Reddy highlighted that technical knowledge is merely the entry ticket. For fresh
                graduates to succeed in demanding industries, higher education must actively cultivate critical thinking,
                workplace communication, and emotional resilience through continuous industry collaboration.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0EBE1] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8C7A62]">
                Keynote Dialogue • Higher Education &amp; Talent
              </span>
              <a
                href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#11161F] hover:text-[#8C7A62] uppercase tracking-wider transition-colors"
              >
                <span>View LinkedIn Reference</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Supporting Dialogues Card */}
          <div className="lg:col-span-5 bg-[#EFE8DA] border border-[#DFD5C2] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-[0.2em] text-[#8C7A62] uppercase font-semibold block pb-3 border-b border-[#DFD5C2]">
                Core Discussion Themes
              </span>

              <div className="space-y-4">
                <div className="p-4 bg-[#FAF8F5] rounded-xs shadow-2xs">
                  <h4 className="text-[15px] font-semibold text-[#141820] font-sans">
                    Servant Leadership in Practice
                  </h4>
                  <p className="text-xs text-[#6B6357] mt-1 leading-relaxed">
                    How shifting management from coercion to stewardship fosters psychological ownership and proactive citizenship in teams.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xs shadow-2xs">
                  <h4 className="text-[15px] font-semibold text-[#141820] font-sans">
                    Experiential Learning vs. Passive Instruction
                  </h4>
                  <p className="text-xs text-[#6B6357] mt-1 leading-relaxed">
                    Advocating for laboratory sandboxes, live simulations, and feedback loops over traditional lecture-heavy training sessions.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xs shadow-2xs">
                  <h4 className="text-[15px] font-semibold text-[#141820] font-sans">
                    Industry-Academia Board Advisory
                  </h4>
                  <p className="text-xs text-[#6B6357] mt-1 leading-relaxed">
                    Serving on institutional advisory councils to ensure management and technical programs align directly with real industrial standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DFD5C2]">
              <div className="text-[11px] font-mono text-[#8C7A62] uppercase">
                Panelist • Keynote Speaker • Board Advisor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
