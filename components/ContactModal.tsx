"use client";

import { useState } from "react";
import { X, Mail, MapPin, Check, Send, Building2, ArrowUpRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0F131A] border border-[#232B3A] text-[#FAF8F5] rounded-sm shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8E97A6] hover:text-[#FAF8F5] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
            Professional Dialogue
          </span>
          <h3 className="text-3xl font-serif-luxury font-light text-[#FAF8F5] mt-1">
            Connect with Dr. S. Anand Reddy
          </h3>
          <p className="text-xs text-[#8E97A6] mt-2">
            Head of Learning &amp; Development • Hetero
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3 bg-[#131822] border border-[#232B3A] rounded-sm p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C5A880]/20 text-[#C5A880] mb-2">
              <Check size={24} />
            </div>
            <h4 className="text-xl font-serif-luxury text-[#FAF8F5]">Message Received</h4>
            <p className="text-xs text-[#8E97A6] max-w-sm mx-auto">
              Thank you for reaching out. Dr. S. Anand Reddy will review your inquiry and connect with you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8E97A6] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#151B26] border border-[#222B3B] focus:border-[#C5A880] rounded-xs px-3.5 py-2.5 text-xs text-[#FAF8F5] outline-none transition-colors placeholder:text-[#4A5260]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8E97A6] mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Organization Name"
                    className="w-full bg-[#151B26] border border-[#222B3B] focus:border-[#C5A880] rounded-xs px-3.5 py-2.5 text-xs text-[#FAF8F5] outline-none transition-colors placeholder:text-[#4A5260]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8E97A6] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-[#151B26] border border-[#222B3B] focus:border-[#C5A880] rounded-xs px-3.5 py-2.5 text-xs text-[#FAF8F5] outline-none transition-colors placeholder:text-[#4A5260]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8E97A6] mb-1.5">
                    Purpose of Connection *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full bg-[#151B26] border border-[#222B3B] focus:border-[#C5A880] rounded-xs px-3.5 py-2.5 text-xs text-[#FAF8F5] outline-none transition-colors"
                  >
                    <option value="">Select purpose...</option>
                    <option value="coaching">Leadership Coaching &amp; Mentorship</option>
                    <option value="speaking">Keynote / HR Summit Panel</option>
                    <option value="training">L&amp;OD Workshop / Capability Building</option>
                    <option value="academic">Guest Lecture / Professional Discussion</option>
                    <option value="collaboration">General Professional Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8E97A6] mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe the context of your inquiry..."
                  className="w-full bg-[#151B26] border border-[#222B3B] focus:border-[#C5A880] rounded-xs px-3.5 py-2.5 text-xs text-[#FAF8F5] outline-none transition-colors placeholder:text-[#4A5260] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xs bg-[#C5A880] hover:bg-[#B59870] text-[#0B0E14] text-xs font-semibold tracking-widest uppercase transition-all duration-200"
              >
                <Send size={14} />
                <span>Submit Inquiry</span>
              </button>
            </form>

            {/* Direct Verified Connection Info */}
            <div className="pt-6 border-t border-[#202735] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#8E97A6]">
              <div className="flex items-start gap-3">
                <Building2 size={16} className="text-[#C5A880] mt-0.5" />
                <div>
                  <div className="text-[#FAF8F5] font-medium">Organization &amp; Location</div>
                  <div className="text-[11px] leading-relaxed">
                    Hetero • Hyderabad, Telangana, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowUpRight size={16} className="text-[#C5A880] mt-0.5" />
                <div>
                  <div className="text-[#FAF8F5] font-medium">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/dr-s-anand-reddy-b1385712/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#C5A880] hover:underline block"
                  >
                    linkedin.com/in/dr-s-anand-reddy-b1385712 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
