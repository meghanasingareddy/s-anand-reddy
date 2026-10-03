"use client";

import { Building2, GraduationCap, MapPin, Briefcase } from "lucide-react";

export default function ExecutiveProfile() {
  return (
    <section id="profile" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              01 / Executive Profile
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            Executive profile
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Guiding enterprise scale, sustainable modern manufacturing, and strategic regional expansion.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[15px] sm:text-[16px] text-[#4A443B] leading-[1.8]">
            <p>
              Dr. S. Anand Reddy brings over three decades of visionary executive leadership to Sagar Cements
              Limited. With a foundational background in medicine paired with acute industrial strategy, he has
              guided the company&apos;s transition from a regional cement producer into a powerhouse of infrastructure
              manufacturing.
            </p>
            <p>
              Joining the board in 1992 as Director (Marketing &amp; Projects), Dr. Reddy led pioneering marketing
              frameworks and capacity addition initiatives. Under his joint and executive leadership, Sagar Cements
              has consistently modernized kilns, integrated waste-heat recovery systems, and executed transformative
              acquisitions—including the turnaround of Andhra Cements Limited and BMM Cements.
            </p>
            <p>
              As Managing Director, Dr. Reddy champions operational efficiency, green cement technologies,
              value-added blended products, and deep grassroots community empowerment across Andhra Pradesh,
              Telangana, Karnataka, and Central India.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#EFE8DA] border border-[#DFD5C2] rounded-sm p-8 shadow-sm">
              <h3 className="text-xs font-mono tracking-[0.25em] text-[#8C7A62] uppercase mb-6 font-semibold pb-3 border-b border-[#DFD5C2]">
                Executive Snapshot
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <Briefcase size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Current Role
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      Managing Director
                    </div>
                    <div className="text-xs text-[#6B6357]">Sagar Cements Limited</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <GraduationCap size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Education
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      MBBS (Bachelor of Medicine &amp; Surgery)
                    </div>
                    <div className="text-xs text-[#6B6357]">Nagarjuna University</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <Building2 size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Key Directorships
                    </div>
                    <div className="text-[15px] font-semibold text-[#141820] mt-0.5">
                      Andhra Cements Ltd., Sagar Power Ltd.
                    </div>
                    <div className="text-xs text-[#6B6357]">Promoter Group Entities</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FAF8F5] rounded-sm text-[#8C7A62] mt-0.5 shadow-2xs">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8072]">
                      Corporate Headquarters
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
