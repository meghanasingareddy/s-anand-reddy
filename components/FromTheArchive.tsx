"use client";

import { ArrowUpRight, Sparkles, BookOpen, Quote, Archive } from "lucide-react";

export default function FromTheArchive() {
  const archivePosts = [
    {
      year: "2014",
      highlight: true,
      title: 'Everyday Observation: The "Chips" Metaphor',
      hook: "Packaging vs. Substance in Human Perception",
      context:
        'One of Dr. Anand Reddy’s most memorable early observations used the everyday imagery of a packet of chips to explore human perception and workplace authenticity. Just as inflated packaging often hides meager substance inside, he reflected on how superficial corporate posturing contrasts with genuine competence, deep capability, and honest communication.',
      whyInteresting:
        "Illustrates his unique communicative approach: using simple, relatable daily objects to spark profound self-reflection on authenticity and personal substance.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
    },
    {
      year: "2015",
      highlight: false,
      title: "The Discipline of Active Listening",
      hook: "Listening Beyond the Words in Executive Meetings",
      context:
        "An early post reflecting on why the quietest people in the room often hold the most crucial perspectives, urging managers to cultivate the patience to listen before directing.",
      whyInteresting: "Early seeds of his research into servant leadership and psychological safety.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
    },
    {
      year: "2016",
      highlight: false,
      title: "Psychological Ownership vs. Compliance",
      hook: "Why People Support What They Help Create",
      context:
        "Reflections on workplace motivation—arguing that employees only take true ownership of processes when their ideas and dignity are woven into the solution from day one.",
      whyInteresting: "Precursor to his exploration of 'Psychic Income' and organizational citizenship.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
    },
    {
      year: "2018",
      highlight: false,
      title: "Mentoring the Quiet High-Performer",
      hook: "Spotting Latent Capability in Frontline Teams",
      context:
        "A note on mentorship emphasizing that true talent development is not about selecting the loudest speakers, but about identifying and nurturing steady, conscientious problem-solvers.",
      whyInteresting: "Directly influenced the design of subsequent graduate onboarding programs like MANTHAN.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
    },
  ];

  return (
    <section id="archive" className="py-24 md:py-32 bg-[#FAF8F5] text-[#141820] border-t border-[#ECE6DB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#8C7A62] uppercase font-semibold">
              04 / From the Archive
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#141820]">
            From the archive
          </h2>
          <p className="text-[17px] text-[#736A5E] font-serif-luxury italic mt-2 max-w-2xl">
            Selected historical observations, metaphors, and thought pieces from his early LinkedIn writing.
          </p>
        </div>

        {/* Featured 2014 "CHIPS" Spotlight Card */}
        <div className="mb-12 bg-[#0B0E14] text-[#FAF8F5] border border-[#232B3A] p-8 sm:p-12 rounded-sm relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C5A880] text-[#0B0E14] text-xs font-mono font-bold uppercase tracking-widest">
                  Featured 2014 Archive
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E97A6]">
                  Everyday Metaphor
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#FAF8F5]">
                {archivePosts[0].title}
              </h3>

              <div className="text-sm font-mono text-[#C5A880] tracking-wide">
                &ldquo;{archivePosts[0].hook}&rdquo;
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#A6ADB8] leading-relaxed">
                {archivePosts[0].context}
              </p>

              <div className="p-4 bg-[#141923] border-l-2 border-[#C5A880] rounded-xs text-xs text-[#DFD6C7] font-serif-luxury italic">
                {archivePosts[0].whyInteresting}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={archivePosts[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A2230] hover:bg-[#C5A880] text-[#FAF8F5] hover:text-[#0B0E14] text-xs font-mono tracking-widest uppercase transition-colors"
              >
                <span>Read on LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Supporting Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archivePosts.slice(1).map((post, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E8E2D6] p-8 rounded-sm hover:border-[#C5A880] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#F0EBE1]">
                  <span className="text-sm font-mono font-bold text-[#8C7A62]">
                    {post.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#A89F91]">
                    Archive Post
                  </span>
                </div>

                <h4 className="text-xl font-serif-luxury font-normal text-[#141820] mb-2 leading-snug">
                  {post.title}
                </h4>

                <div className="text-xs font-mono text-[#8C7A62] mb-4">
                  {post.hook}
                </div>

                <p className="text-[13.5px] text-[#554E44] leading-relaxed mb-6">
                  {post.context}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1]">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#8C7A62] hover:text-[#141820] uppercase tracking-wider transition-colors"
                >
                  <span>Explore LinkedIn Post</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
