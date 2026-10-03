"use client";

import { Building2, GraduationCap, Award, BookOpen, CheckCircle, ArrowUpRight } from "lucide-react";

export default function Credentials() {
  const credentialsList = [
    {
      category: "Current Enterprise Role",
      title: "Head of Learning & Development",
      organization: "Hetero",
      detail: "Leading enterprise learning strategy, digital capability academies (NIPUNA), and graduate onboarding (MANTHAN).",
      icon: <Building2 className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      category: "Executive Education",
      title: "Management Development Program (MDP)",
      organization: "XLRI Jamshedpur (2020–2021)",
      detail: "Executive management development specializing in strategic leadership and organizational transformation.",
      icon: <GraduationCap className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      category: "Professional Body Leadership",
      title: "Executive Committee Member & Chairman",
      organization: "Indian Society for Training and Development (ISTD), Hyderabad",
      detail: "Fostering collaboration, organizing talent development summits, and mentoring emerging training professionals.",
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      category: "Professional Governance",
      title: "Executive Committee Member",
      organization: "National Institute of Personnel Management (NIPM)",
      detail: "Contributing to HR professional governance, workforce policies, and regional talent development dialogues.",
      icon: <CheckCircle className="w-5 h-5 text-[#C5A880]" />,
    },
  ];

  return (
    <section id="credentials" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              09 / Professional Credentials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Governance &amp; credentials
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Verified institutional roles, executive development, and professional committee leadership.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentialsList.map((cred, idx) => (
            <div
              key={idx}
              className="bg-[#121620] border border-[#222B3B] p-8 rounded-sm hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#202735]">
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#C5A880]">
                    {cred.category}
                  </span>
                  <div className="p-2 bg-[#18202C] rounded-full text-[#C5A880] group-hover:bg-[#C5A880]/20 transition-colors">
                    {cred.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-serif-luxury font-normal text-[#FAF8F5] mb-1">
                  {cred.title}
                </h3>

                <div className="text-xs font-mono text-[#C5A880] mb-4">
                  {cred.organization}
                </div>

                <p className="text-[13.5px] text-[#A6ADB8] leading-relaxed mb-6">
                  {cred.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C2330] flex items-center justify-between text-xs text-[#8E97A6]">
                <span>Verified Public Record</span>
                <a
                  href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A880] hover:underline inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
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
