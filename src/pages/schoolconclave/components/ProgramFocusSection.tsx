import React, { useState } from 'react';
import { Sparkles, Eye, ShieldAlert, BookOpen, Layers } from 'lucide-react';
import { PROGRAM_FOCUS_AREAS } from '../data/conclaveData';
import { FocusArea } from '../types';

export const ProgramFocusSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Emotional & Psychological', 'Academic & Cognitive', 'Behavioural & Social'];

  const filteredAreas = activeCategory === 'All'
    ? PROGRAM_FOCUS_AREAS
    : PROGRAM_FOCUS_AREAS.filter(area => area.category === activeCategory);

  return (
    <section id="program-focus" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-sm font-bold uppercase tracking-wider mb-3 border border-sky-100">
            <Eye className="w-3.5 h-3.5 text-sky-700" />
            <span>Clinical &amp; Classroom Insights</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-rainbow">
            Understanding the Child Behind the Behaviour
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            The emphasis will be on recognition, early support, appropriate communication and timely professional intervention.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80 flex-wrap justify-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Focus Areas — Compact Tag Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAreas.map((item: FocusArea) => (
            <div
              key={item.id}
              className="bg-[#fcfdfe] rounded-xl px-5 py-4 border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all duration-200 flex items-start gap-3"
            >
              {/* Colour dot accent */}
              <span className={`mt-2 w-2.5 h-2.5 rounded-full shrink-0 ${item.category === 'Emotional & Psychological'
                  ? 'bg-blue-500'
                  : item.category === 'Academic & Cognitive'
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`} />
              <div className="min-w-0">
                <span className={`text-sm font-bold uppercase tracking-wider ${item.category === 'Emotional & Psychological'
                    ? 'text-blue-600'
                    : item.category === 'Academic & Cognitive'
                      ? 'text-amber-700'
                      : 'text-emerald-700'
                  }`}>
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Summary Box */}
        <div className="mt-12 p-6 rounded-2xl panel-editorial text-[#17203A] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-[#17203A]">
              Holistic Recognition Over Disciplinary Punishment
            </h4>
            <p className="text-base text-[#596174] max-w-2xl">
              By reframing overt behavioural challenges as signals of unspoken emotional or cognitive strain, educators can intervene constructively before problems intensify.
            </p>
          </div>
          <a
            href="#registration"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#E7C76A] to-[#D6A72C] hover:brightness-105 text-[#17203A] text-base font-bold shadow transition-all whitespace-nowrap shrink-0"
          >
            Nominate Your School
          </a>
        </div>

      </div>
    </section>
  );
};
