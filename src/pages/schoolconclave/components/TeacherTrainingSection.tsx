import React from 'react';
import { GraduationCap, CheckCircle2, ShieldAlert, HeartHandshake, UserPlus, Sparkles } from 'lucide-react';
import { TEACHER_LEARNING_OUTCOMES } from '../data/conclaveData';

export const TeacherTrainingSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8E8] text-[#17203A] relative overflow-hidden bg-lotus-motif" style={{ backgroundPosition: 'right -120px top -80px, left -140px bottom -100px' }}>
      {/* Background ambient morning-light glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6A72C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E7C76A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B8871F] text-sm font-bold uppercase tracking-wider mb-4 border border-[#D6A72C]/30 shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#B8871F]" />
            <span>Dedicated Teacher Development</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight heading-rainbow">
            Understanding Behaviour. <br className="hidden sm:inline" />
            Managing Emotions. <br className="hidden sm:inline" />
            Building Connections.
          </h2>

          <div className="divider-gold w-40 mx-auto my-6" />

          <div className="mt-2 p-4 rounded-xl bg-white/80 border border-[#D6A72C]/25 shadow-sm max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#596174] leading-relaxed font-medium">
              Teachers are often the first adults to observe changes in a child's behaviour, emotions and classroom functioning.
            </p>
          </div>
        </div>

        {/* 8 Core Learning Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {TEACHER_LEARNING_OUTCOMES.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:bg-[#FFFDF7] rounded-2xl p-6 border border-[#D6A72C]/20 hover:border-[#D6A72C]/50 transition-all duration-200 flex items-start gap-4 shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-blue-700" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono font-bold text-[#8a8f9c]">Module {item.id}</span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#17203A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#596174] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delegation Badge Callout */}
        <div className="mt-12 p-6 rounded-2xl panel-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D6A72C]/15 text-[#B8871F] rounded-xl shrink-0">
              <Sparkles className="w-6 h-6 text-[#B8871F]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#17203A]">Teacher Delegation Per School</h4>
              <p className="text-sm text-[#596174]">10 to 20 teachers nominated per participating school for certified training</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Official Training &amp; Participation Certificate Awarded
          </div>
        </div>

      </div>
    </section>
  );
};
