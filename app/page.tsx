"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheJourney from "@/components/TheJourney";
import ThoughtsOverTime from "@/components/ThoughtsOverTime";
import FromTheArchive from "@/components/FromTheArchive";
import IdeasExplored from "@/components/IdeasExplored";
import WorkThatBecameReal from "@/components/WorkThatBecameReal";
import Writings from "@/components/Writings";
import InConversation from "@/components/InConversation";
import Credentials from "@/components/Credentials";
import CallToAction from "@/components/CallToAction";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#FAF8F5]">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* 01 — Hero */}
      <Hero onOpenContact={() => setContactOpen(true)} />

      {/* 02 — The Journey */}
      <TheJourney />

      {/* 03 — Thoughts Over Time (Chronological Evolution) */}
      <ThoughtsOverTime />

      {/* 04 — From the Archive (2014 "Chips" & Early Observations) */}
      <FromTheArchive />

      {/* 05 — Ideas He Has Explored (Gap Theory, Psychic Income, Personality, People Skills) */}
      <IdeasExplored />

      {/* 06 — Work That Became Real (MANTHAN, QC Training Lab, NIPUNA) */}
      <WorkThatBecameReal />

      {/* 07 — Published Writings & Book */}
      <Writings />

      {/* 08 — In Conversation (The Economic Times & Public Dialogues) */}
      <InConversation />

      {/* 09 — Professional Credentials & Governance */}
      <Credentials />

      {/* 10 — Editorial Call to Action */}
      <CallToAction onOpenContact={() => setContactOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Contact & Dialogue Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
