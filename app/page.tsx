"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import LeadershipJourney from "@/components/LeadershipJourney";
import LeadershipFocus from "@/components/LeadershipFocus";
import IndustryPerspective from "@/components/IndustryPerspective";
import InsightsInitiatives from "@/components/InsightsInitiatives";
import CallToAction from "@/components/CallToAction";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#FAF8F5]">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenContact={() => setContactOpen(true)} />

      {/* 01: Executive Profile */}
      <ExecutiveProfile />

      {/* 02: Leadership Journey (Timeline) */}
      <LeadershipJourney />

      {/* 03: Leadership Focus (Core Pillars) */}
      <LeadershipFocus />

      {/* 04: Industry Perspective (Executive Insights & Accordion) */}
      <IndustryPerspective />

      {/* 05: Insights & Initiatives */}
      <InsightsInitiatives />

      {/* 06: Champagne / Gold Call to Action */}
      <CallToAction onOpenContact={() => setContactOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
