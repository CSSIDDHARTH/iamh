import React from 'react';
import { ArrowRight, BookOpen, Users, ShieldAlert, Award, Compass, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      {/* Overlay: dark gradient on the left for text legibility, transparent on the right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/88 via-slate-900/60 to-slate-900/20" />
      {/* Subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* National Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-600 uppercase">
                Indian Academy of Mental Health • Registration No: 00589
              </span>
            </div>            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              Building a Mentally <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">Healthy</span> and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-iamh-emerald to-emerald-300">Inclusive</span> Society
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              A multidisciplinary community of mental health professionals working together to promote awareness,
              education, research, advocacy, rehabilitation, and evidence-based mental health practices across India.
            </p>

            {/* Tagline */}
            <div className="border-l-4 border-iamh-emerald pl-4 mb-8">
              <span className="text-sm font-display font-medium text-slate-300 uppercase tracking-widest block mb-1">
                Our Institutional Philosophy
              </span>
              <span className="font-display font-bold text-white text-lg sm:text-xl">
                Uniting Minds • Healing Lives • Building a Healthier Society
              </span>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTM0Nc_0KlOJbkEs_-r3OYV9Pp1CFNCeYtFMLldaZyDboSNQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-iamh-navy hover:bg-iamh-navy/80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Become a Member
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-900 bg-white/90 hover:bg-white rounded-lg border border-white/30 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Institutional Info Card & Image Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Background accent block */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-iamh-emerald/20 to-iamh-navy/20 rounded-3xl blur-xl opacity-75" />
              
              {/* Professional Card Panel */}
              <div className="relative bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8">
                <div className="flex justify-between items-start border-b border-slate-100 pb-5 mb-5">
                  <div>
                    <h3 className="font-display font-bold text-iamh-navy text-lg leading-tight">
                      Academy Credentials
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      National Registration: No. 00589
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-100">
                    Established 2021
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Highlight 1 */}
                  <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-iamh-navy rounded-lg shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">Multidisciplinary Synergy</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Psychiatrists, psychologists, psychiatric nurses, counselors, and social workers.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 2 */}
                  <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-iamh-emerald rounded-lg shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">Evidence-Based Research</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Advancing psychological sciences through systematic trials, journals, and workshops.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 3 */}
                  <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">National Healthcare Advocacy</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Working in lockstep with policymakers for inclusive mental health guidelines.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      </div>
    </section>
  );
}
