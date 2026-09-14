import React from 'react';
import { ArrowRight, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

interface ParticipationFeeSectionProps {
  onRegisterClick: () => void;
}

export const ParticipationFeeSection: React.FC<ParticipationFeeSectionProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl panel-editorial text-[#17203A] p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden">

            {/* Background ambient glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D6A72C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* Left Column: Heading, Supporting Text and Inclusions */}
              <div className="space-y-5 text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#B8871F] text-sm font-bold uppercase tracking-widest border border-[#D6A72C]/30 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8871F]" />
                  <span>Transparent Institutional Fee</span>
                </div>

                <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold tracking-tight heading-rainbow">
                  Participation Fee
                </h2>

                <p className="text-base text-[#596174] leading-relaxed max-w-xl">
                  {EVENT_DETAILS.feeScope}
                </p>

                {/* Included deliverables checklist */}
                <div className="pt-2 space-y-2.5 text-left inline-block lg:block">
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#17203A]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Full delegation pass for <strong>50 to 80 Students</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#17203A]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Professional training cohort for <strong>10 to 20 Teachers</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#17203A]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Institutional Leadership registration for <strong>1 Principal</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#17203A]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Official certificates, training materials &amp; Conclave Participation Report</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing Display & CTA */}
              <div className="w-full lg:w-80 shrink-0">
                <div className="bg-white rounded-2xl p-7 border border-[#D6A72C]/25 text-center shadow-md">
                  <span className="text-sm font-semibold text-[#596174] uppercase tracking-wider block mb-1">
                    Total All-Inclusive Investment
                  </span>

                  <div className="my-4">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#B8871F] tracking-tight block">
                      {EVENT_DETAILS.participationFee}
                    </span>
                    <span className="text-base font-semibold text-[#596174] mt-1 block">
                      Per School
                    </span>
                  </div>

                  <p className="text-sm text-[#596174] mb-6">
                    Covers the designated participation of students, teachers and school leadership as per the official structure.
                  </p>

                  <button
                    onClick={onRegisterClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#17203A] bg-gradient-to-r from-[#E7C76A] to-[#D6A72C] hover:brightness-105 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
                  >
                    <span>Register Your School</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-4 pt-3 border-t border-[#D6A72C]/20 text-sm text-[#596174]">
                    Official IAMH Organizers Helpline: <strong className="text-[#17203A]">{EVENT_DETAILS.contactPhone}</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
