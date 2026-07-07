import React from 'react';
import { Mail, Phone, ArrowUp, Award } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t-4 border-iamh-emerald relative">
      {/* Scroll to Top Circle Button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-iamh-emerald text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer group"
          title="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Section 1: Logo & Vision Quote (5 Cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="IAMH Logo"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base leading-tight text-white tracking-tight">
                  Indian Academy of Mental Health
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  National NGO Academy • Reg No: 00589
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              A multidisciplinary national academy committed to advancing psychiatric sciences, clinical psychology, and community rehabilitation across rural and urban India.
            </p>

            {/* Official Motto Box */}
            <div className="border-l-2 border-iamh-emerald pl-3.5 pt-1">
              <p className="text-xs font-serif italic text-slate-300 leading-relaxed">
                "Together for Awareness. Together for Care. Together for a Mentally Healthy Society."
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-iamh-emerald transition-colors" />
                  About Profile
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-iamh-emerald transition-colors" />
                  Membership Affiliate
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-iamh-emerald transition-colors" />
                  Academy Core Values
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-iamh-emerald transition-colors" />
                  Contact Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Official Coordinates (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Official Coordinates
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-iamh-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">Secretary hotline</span>
                  <a href="tel:+917007687896" className="text-slate-300 hover:text-white transition-colors">+91 70076 87896</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-iamh-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">Administrative Email</span>
                  <a href="mailto:info@iamh.in" className="text-slate-300 hover:text-white transition-colors">info@iamh.in</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Indian Academy of Mental Health (IAMH).</span>
            <span className="hidden md:inline-block">•</span>
            <span>Registration Code: 00589</span>
          </div>
          <div className="mt-3 sm:mt-0 flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Credential Security</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Legal Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
