import React from 'react';
import { PhoneCall, ShieldCheck, HelpCircle, ArrowUpRight, School } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';
import { IAMHLogo } from './InstitutionalBadges';

interface ContactSectionProps {
  onRegisterClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="contact" className="py-20 bg-[#FFF8E8] text-[#17203A] relative overflow-hidden bg-gold-glow-corner scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B8871F] text-sm font-bold uppercase tracking-wider mb-4 border border-[#D6A72C]/30 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5 text-[#B8871F]" />
            <span>Official Event Inquiries</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-rainbow">
            Contact IAMH
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#596174] leading-relaxed">
            Have questions regarding school delegation nominations, program modules, or institutional participation? Reach out directly to the organizers.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Card 1: Official Helpline */}
          <div className="bg-white rounded-3xl p-7 border border-[#D6A72C]/20 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D6A72C]/15 text-[#B8871F] flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#B8871F]">
                Official Conclave Helpline
              </span>
              <h3 className="font-display text-xl font-bold text-[#17203A] mt-2 mb-1">
                Direct Phone Contact
              </h3>
              <p className="text-sm sm:text-base text-[#596174] leading-relaxed">
                Connect with the conclave organizing coordinator for registration and inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6A72C]/15">
              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-b from-[#E7C76A] to-[#D6A72C] hover:brightness-105 text-[#17203A] font-bold text-base shadow-sm transition-all w-full justify-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span className="tabular-nums font-mono">{EVENT_DETAILS.contactPhone}</span>
              </a>
              <span className="text-sm text-[#596174] block text-center mt-2">
                Click to dial directly from your device
              </span>
            </div>
          </div>

          {/* Card 2: Register Your School */}
          <div className="bg-white rounded-3xl p-7 border border-[#D6A72C]/20 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <School className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Institutional Enrolment
              </span>
              <h3 className="font-display text-xl font-bold text-[#17203A] mt-2 mb-1">
                Register Your School
              </h3>
              <p className="text-sm sm:text-base text-[#596174] leading-relaxed">
                Reserve delegation passes for 50-80 students, 10-20 teachers, and Principal.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6A72C]/15">
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17203A] hover:bg-[#232d4d] text-white font-bold text-base transition-all w-full justify-center"
              >
                <span>Complete Registration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="text-sm text-[#596174] block text-center mt-2">
                Fee: {EVENT_DETAILS.participationFee} Per School
              </span>
            </div>
          </div>

          {/* Card 3: General Program Enquiries */}
          <div className="bg-white rounded-3xl p-7 border border-[#D6A72C]/20 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Program Information
              </span>
              <h3 className="font-display text-xl font-bold text-[#17203A] mt-2 mb-1">
                General Program Enquiries
              </h3>
              <p className="text-sm sm:text-base text-[#596174] leading-relaxed">
                Inquiries regarding World Mental Health Day 2026 scheduling, certifications, or syllabus.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6A72C]/15">
              <div className="p-2.5 rounded-xl bg-[#FFF8E8] border border-[#D6A72C]/20 text-center">
                <span className="text-sm font-semibold text-[#596174] block">Call Helpline</span>
                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="font-mono text-base font-bold text-[#B8871F] hover:underline"
                >
                  {EVENT_DETAILS.contactPhone}
                </a>
              </div>
              <span className="text-sm text-[#596174] block text-center mt-2">
                Monday to Saturday, 10:00 AM – 6:00 PM
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
