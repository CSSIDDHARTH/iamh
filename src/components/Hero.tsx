import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Users, Compass } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const targetText = "Building a Mentally Healthy and Inclusive Society...";
    let isDeleting = false;
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!isDeleting) {
        setText(targetText.slice(0, index + 1));
        index++;
        if (index === targetText.length) {
          isDeleting = true;
          timer = setTimeout(tick, 3000);
          return;
        }
        timer = setTimeout(tick, 60);
      } else {
        setText(targetText.slice(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
          timer = setTimeout(tick, 1000);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };

    timer = setTimeout(tick, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);

  const renderTypedHeading = () => {
    const part1 = "Building a Mentally ";
    const part2 = "Healthy";
    const part3 = " and ";
    const part4 = "Inclusive";

    const len = text.length;

    return (
      <>
        {text.slice(0, part1.length)}
        {len > part1.length && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-iamh-navy to-blue-700">
            {text.slice(part1.length, part1.length + part2.length)}
          </span>
        )}
        {len > part1.length + part2.length && (
          text.slice(part1.length + part2.length, part1.length + part2.length + part3.length)
        )}
        {len > part1.length + part2.length + part3.length && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-iamh-emerald to-green-700">
            {text.slice(part1.length + part2.length + part3.length, part1.length + part2.length + part3.length + part4.length)}
          </span>
        )}
        {len > part1.length + part2.length + part3.length + part4.length && (
          text.slice(part1.length + part2.length + part3.length + part4.length)
        )}
        <span className={`inline-block w-[3px] h-[0.9em] bg-iamh-emerald ml-1.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      </>
    );
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Hero background image — no overlay, fully visible */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* National Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-300 shadow-sm mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-700 uppercase">
                Indian Academy of Mental Health • Registration No: 00589
              </span>
            </div>

            {/* Main Headline — dark text */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6 relative">
              {/* Invisible placeholder to reserve layout height */}
              <span className="opacity-0 select-none pointer-events-none block">
                Building a Mentally{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-iamh-navy to-blue-700">Healthy</span>
                {' '}and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-iamh-emerald to-green-700">Inclusive</span>
                {' '}Society...
              </span>
              {/* Typing overlay container */}
              <span className="absolute inset-0 block text-left">
                {renderTypedHeading()}
              </span>
            </h1>

            {/* Subtitle — dark text */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-8 max-w-2xl">
              A multidisciplinary community of mental health professionals working together to promote awareness,
              education, research, advocacy, rehabilitation, and evidence-based mental health practices across India.
            </p>

            {/* Tagline */}
            <div className="border-l-4 border-iamh-emerald pl-4 mb-8">
              <span className="text-sm font-display font-medium text-slate-500 uppercase tracking-widest block mb-1">
                Our Institutional Philosophy
              </span>
              <span className="font-display font-bold text-slate-800 text-lg sm:text-xl">
                Uniting Minds • Healing Lives • Building a Healthier Society
              </span>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTM0Nc_0KlOJbkEs_-r3OYV9Pp1CFNCeYtFMLldaZyDboSNQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-iamh-navy hover:bg-iamh-navy/85 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Become a Member
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-iamh-emerald hover:bg-iamh-emerald/85 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Institutional Info Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Background accent block */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-iamh-emerald/20 to-iamh-navy/20 rounded-3xl blur-xl opacity-75" />

              {/* Professional Card Panel */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8">
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
