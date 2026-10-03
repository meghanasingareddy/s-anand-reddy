"use client";

import { Building2, GraduationCap, MapPin, Briefcase, Award, BookOpen } from "lucide-react";

export default function ExecutiveProfile() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              01 / About &amp; Professional Profile
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Professional profile
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Developing people, building leadership capabilities, and creating cultures of continuous learning.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[15px] sm:text-[16px] text-[#4A443B] leading-[1.8]">
            <p>
              Dr. S. Anand Reddy is a seasoned HR and Learning &amp; Development professional with over 18 years
              of experience in Learning and Organizational Development across diverse industries.
            </p>
            <p>
              Currently serving as the <strong>Head of Learning &amp; Development at Hetero</strong>, he is
              responsible for driving learning strategies and organizational development initiatives that foster
              a culture of continuous growth, capability enhancement, and transformative leadership.
            </p>
            <p>
              His work focuses on employee development, leadership capability building, executive coaching,
              talent upskilling, and architecting modern learning frameworks that enable organizations to thrive
              in dynamic business environments.
            </p>
            <p>
              Dr. Reddy is actively engaged in the human resources and training ecosystem, serving as an
              <strong> Executive Committee Member and Chairman of the Indian Society for Training and Development (ISTD), Hyderabad Chapter</strong>,
              and as an <strong>Executive Committee Member of the National Institute of Personnel Management (NIPM)</strong>.
              He is also an alumnus of the <strong>Management Development Program at XLRI Jamshedpur (2020–2021)</strong>.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#EFE8DA] border border-[#DFD5C2] rounded-sm p-8 shadow-sm">
              <h3 className="text-xs font-mono tracking-[0.25em] text-[#8C7A62] uppercase mb-6 font-semibold pb-3 border-b border-[#DFD5C2]">
                Profile Snapshot
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <Briefcase size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Current Organization &amp; Role
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      Head of Learning &amp; Development
                    </div>
                    <div className="text-xs text-[#6B6357]">Hetero</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <GraduationCap size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Executive Education &amp; Doctoral Studies
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      XLRI Jamshedpur (MDP, 2020–2021)
                    </div>
                    <div className="text-xs text-[#6B6357]">Doctoral Studies in Management / Leadership</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <Award size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Professional Associations
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      ISTD Hyderabad Chapter (Chairman &amp; EC)
                    </div>
                    <div className="text-xs text-[#6B6357]">
                      NIPM (Executive Committee Member)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Location
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      Hyderabad, Telangana, India
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
