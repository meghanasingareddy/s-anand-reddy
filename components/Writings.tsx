"use client";

import { BookOpen, ArrowUpRight, FileText } from "lucide-react";

export default function Writings() {
  const articles = [
    {
      title: "Is Personality Inherited or Developed?",
      theme: "Behavioral Genetics & Self-Transformation",
      description:
        "Deconstructing the debate between innate biological temperament and conscious behavioral training, illustrating how self-awareness allows professionals to cultivate new strengths.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Article",
    },
    {
      title: "Understanding Personality: The Lens That Shapes Our Lives",
      theme: "Psychological Frameworks & Perception",
      description:
        "Examining how underlying psychological lenses determine how individuals interpret workplace feedback, manage conflict, and navigate organizational uncertainty.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Article",
    },
    {
      title: "Gap Theory: Bridging Knowledge and Action",
      theme: "Learning Transfer & Operational Execution",
      description:
        "Analyzing why theoretical understanding frequently fails to translate into on-the-ground performance, offering actionable methods to ensure training creates permanent habits.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Article",
    },
    {
      title: "People Skills in the Modern Workplace",
      theme: "Interpersonal Mastery & Empathy",
      description:
        "A practical inquiry into active listening, emotional attunement, and psychological safety as essential competencies for leaders in collaborative environments.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Article",
    },
    {
      title: "Psychic Income: The Intangible Currency of Motivation",
      theme: "Intrinsic Motivation & Organizational Citizenship",
      description:
        "Exploring how non-monetary elements—such as recognition, dignity, autonomy, and shared purpose—drive sustained discretionary effort far beyond transactional wages.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Article",
    },
    {
      title: "6 Seasons of Success (Published Book)",
      theme: "Life Stages, Personal Mastery & Goal Setting",
      description:
        "A comprehensive published book offering practical frameworks, reflective worksheets, and behavioral strategies to navigate the shifting seasons of career and personal life.",
      link: "https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/",
      type: "Book",
    },
  ];

  return (
    <section id="writings" className="py-24 md:py-32 bg-[#0B0E14] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11.5px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              07 / Published Writings
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury font-light tracking-tight text-[#FAF8F5]">
            Articles &amp; publications
          </h2>
          <p className="text-[17px] text-[#8E97A6] font-serif-luxury italic mt-2 max-w-2xl">
            Selected LinkedIn articles, research papers, and published book exploring human behavior, personality, and motivation.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121620] border border-[#222B3B] p-8 rounded-sm hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#202735]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                    {item.type}
                  </span>
                  <div className="p-1.5 bg-[#18202C] rounded-xs text-[#8E97A6] group-hover:text-[#C5A880] transition-colors">
                    {item.type === "Book" ? <BookOpen size={15} /> : <FileText size={15} />}
                  </div>
                </div>

                <h3 className="text-xl font-serif-luxury font-normal text-[#FAF8F5] mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-[#8E97A6] mb-4">
                  {item.theme}
                </div>

                <p className="text-[13.5px] text-[#A6ADB8] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C2330]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C5A880] hover:text-[#FAF8F5] uppercase tracking-wider transition-colors"
                >
                  <span>Read on LinkedIn</span>
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
