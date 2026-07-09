import React, { useState } from 'react';
import { Phone, Mail, Shield } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("iamhindia2021@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ecfdf5 70%, #f0fdf4 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100/80 px-3 py-1 rounded-full uppercase">
            Inquiries Portal
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight mt-4">
            Connect with the Academy
          </h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            For academic collaborations, national program partnerships, and membership verification requests.
          </p>
        </div>

        {/* --- Unified Contact Info --- */}
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Quick Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-blue-50/80 to-sky-50/50 border border-blue-100/80 p-6 rounded-[20px] text-center space-y-3 flex flex-col items-center justify-between shadow-[0_2px_12px_rgba(37,99,235,0.05)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-iamh-navy rounded-lg border border-blue-100/50 group-hover:bg-iamh-navy group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-bold">Phone Support</span>
                <span className="text-sm font-semibold text-slate-800 font-sans block mt-1.5">+91 70076 87896</span>
              </div>
              <a
                href="tel:+917007687896"
                className="w-full text-center py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg font-mono text-[10px] font-bold tracking-wider transition-colors"
              >
                CALL NOW
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-blue-50/80 to-sky-50/50 border border-blue-100/80 p-6 rounded-[20px] text-center space-y-3 flex flex-col items-center justify-between shadow-[0_2px_12px_rgba(37,99,235,0.05)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-iamh-emerald rounded-lg border border-emerald-100/50 group-hover:bg-iamh-emerald group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-bold">Email Directory</span>
                <span className="text-sm font-semibold text-slate-800 font-sans block mt-1.5 truncate max-w-[220px]">iamhindia2021@gmail.com</span>
              </div>
              <a
                href="mailto:iamhindia2021@gmail.com"
                onClick={handleEmailClick}
                className={`w-full text-center py-2 border rounded-lg font-mono text-[10px] font-bold tracking-wider transition-all duration-200 ${
                  copied 
                    ? 'bg-emerald-600 border-emerald-600 text-white' 
                    : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {copied ? 'COPIED TO CLIPBOARD!' : 'EMAIL US'}
              </a>
            </div>
          </div>

          {/* Verification Shield */}
          <div className="bg-emerald-50/40 border border-emerald-100/70 rounded-xl p-5 flex gap-4 text-xs text-slate-600 shadow-[0_1px_4px_rgba(0,0,0,0.005)]">
            <Shield className="w-5.5 h-5.5 text-iamh-emerald shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <strong className="text-slate-800 font-semibold">ISO 9001:2015 Standards Certified</strong>
              <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed font-normal">
                The Indian Academy of Mental Health processes member data in strict accordance with national medical record security parameters and encryption codes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
