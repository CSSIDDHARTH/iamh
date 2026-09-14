import React, { useState } from 'react';
import { PhoneCall, MapPin, Calendar, Heart, ShieldCheck, Mail, ArrowUp, ExternalLink, Sparkles } from 'lucide-react';
import { IAMHLogo } from './InstitutionalBadges';
import { EVENT_DETAILS } from '../data/conclaveData';
import { PolicyModal } from './PolicyModals';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About IAMH', href: '#about' },
    { label: 'Conclave Objectives', href: '#objectives' },
    { label: 'Program Focus', href: '#program-focus' },
    { label: 'Delegate Participation', href: '#participation' },
    { label: 'Venue & Location', href: '#venue' },
    { label: 'Contact & Helpline', href: '#contact' },
  ];

  const focusThemes = [
    'Student Emotional Wellbeing',
    'Early Behavioral Identification',
    'Teacher Mental Health & Burnout',
    'School Counseling Infrastructure',
    'Safe & Inclusive Classrooms',
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        className="relative text-[#596174] overflow-hidden"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'%3E%3Cg fill='none' stroke='%23D6A72C' stroke-width='1' opacity='0.10'%3E%3Ccircle cx='260' cy='260' r='210'/%3E%3Ccircle cx='260' cy='260' r='170'/%3E%3Ccircle cx='260' cy='260' r='130'/%3E%3Cpath d='M260 130 C230 190 190 220 190 270 C190 310 222 340 260 340 C298 340 330 310 330 270 C330 220 290 190 260 130Z'/%3E%3Cpath d='M260 160 C238 205 210 228 210 268 C210 298 232 320 260 320 C288 320 310 298 310 268 C310 228 282 205 260 160Z'/%3E%3Cpath d='M130 260 C190 230 220 190 270 190 C310 190 340 222 340 260 C340 298 310 330 270 330 C220 330 190 290 130 260Z' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(to bottom, #FFF8E8 0%, rgba(255,241,199,0.7) 50%, #FFF8E8 100%)",
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right -100px top -60px, center',
          backgroundSize: 'auto, cover',
        }}
      >
        {/* Subtle Glowing Decorative Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D6A72C]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E7C76A]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Golden Indian Motif Accent Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D6A72C] to-transparent opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#D6A72C]/25">

            {/* Column 1: Organization & Identity (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-2xl bg-white border border-[#D6A72C]/20 shadow-sm shrink-0">
                  <IAMHLogo size={52} className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-black text-[#17203A] text-lg sm:text-xl tracking-tight leading-tight">
                      Indian Academy of Mental Health
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[#B8871F] mt-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#B8871F]" />
                    <span>School Mental Health Conclave 2026</span>
                  </p>
                  <p className="text-sm text-[#596174] mt-0.5">
                    In Academic Collaboration with Dept. of Psychiatry, IMS-BHU
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#596174] leading-relaxed pr-2">
                A landmark national summit bringing educators, school leaders, psychologists, and clinicians together to cultivate mentally healthy students, resilient teachers, and supportive classrooms across India.
              </p>

              {/* Verified Summit Badge */}

            </div>

            {/* Column 2: Quick Links (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-[#17203A] flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-[#D6A72C]"></span>
                <span>Conclave Navigation</span>
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="group flex items-center gap-2 text-[#596174] hover:text-[#17203A] transition-colors text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D6A72C] transition-colors"></span>
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event Overview & Venue Card (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-[#17203A] flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-blue-600"></span>
                <span>Event Quick Glance</span>
              </h4>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#D6A72C]/20 space-y-3 shadow-sm">
                {/* Date & Time */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#17203A]">{EVENT_DETAILS.date} ({EVENT_DETAILS.day})</p>
                    <p className="text-sm text-[#596174]">{EVENT_DETAILS.time}</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#D6A72C]/15 text-[#B8871F] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#17203A]">{EVENT_DETAILS.venueName}</p>
                    <p className="text-sm text-[#596174]">Banaras Hindu University, Varanasi</p>
                    <a
                      href="#venue"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#venue');
                      }}
                      className="inline-flex items-center gap-1 text-sm text-[#B8871F] font-semibold hover:underline mt-0.5"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Contact Helpline */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#D6A72C]/15">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#596174] tracking-wider">Helpline &amp; Inquiries:</span>
                    <a
                      href={`tel:${EVENT_DETAILS.contactPhone}`}
                      className="block font-mono text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      {EVENT_DETAILS.contactPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* Sub-footer: Policies, Copyright, Legal Notice */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#596174] border-t border-[#D6A72C]/20">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Indian Academy of Mental Health (IAMH). All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-[#596174]">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#B8871F] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-[#D6A72C]/40">•</span>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#B8871F] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Participation
              </button>
              <span className="text-[#D6A72C]/40">•</span>
              <span className="text-[#596174]">BHU Varanasi</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Policy & Terms Modal Dialog */}
      <PolicyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </>
  );
};
