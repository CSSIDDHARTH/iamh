import React from 'react';
import { Feather, Shield, Heart, SunMedium, Coffee, Activity, Sparkles } from 'lucide-react';
import { TEACHER_WELLBEING_TOPICS } from '../data/conclaveData';

export const TeacherWellbeingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-100/85 via-yellow-50/90 to-amber-100/70 border-t border-amber-200/70 relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute -right-20 top-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/70 text-amber-950 text-sm font-bold uppercase tracking-wider mb-4 border border-amber-300">
            <Feather className="w-3.5 h-3.5 text-amber-800" />
            <span>Nurturing the Caregivers</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight heading-rainbow">
            Healthy Teachers.<br className="hidden sm:inline" />
            Healthy Classrooms.<br className="hidden sm:inline" />
            Healthy Schools.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Educators cannot pour from an empty cup. The conclave dedicates specialized time to teacher emotional self-care, occupational decompression, and faculty solidarity.
          </p>
        </div>

        {/* 10 Teacher Well-being Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TEACHER_WELLBEING_TOPICS.map((topic, index) => (
            <div
              key={topic.title}
              className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 border border-amber-200/80 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-mono text-sm font-bold flex items-center justify-center mb-3">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-amber-100 flex items-center gap-1.5 text-sm font-semibold text-amber-800">
                <Sparkles className="w-3 h-3" />
                <span>Well-being Core</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supportive Visual Quote Banner */}
        <div className="mt-12 bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md font-bold">
              <SunMedium className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                Institutional Compassion in Practice
              </h4>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mt-0.5">
                When schools institutionalize mental health support for educators, teacher turnover decreases, classroom warmth improves, and student outcomes naturally rise.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-900 bg-amber-100/80 px-4 py-2 rounded-xl border border-amber-200 shrink-0">
            <span>Burnout Prevention Workshop</span>
          </div>
        </div>

      </div>
    </section>
  );
};
