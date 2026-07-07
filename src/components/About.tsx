import React from 'react';
import { 
  Stethoscope, Brain, MessageSquare, HeartHandshake, Accessibility, 
  ShieldAlert, Activity, GraduationCap, Workflow, Leaf, Network, 
  Sparkles, TrendingUp, BookOpen, Megaphone, FileText, Users, Globe,
  Eye, Compass, Bookmark, ArrowRight
} from 'lucide-react';
import { disciplinesData, missionData } from '../data';

// Explicitly map icon strings to Lucide components for absolute safety and type support
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, Brain, MessageSquare, HeartHandshake, Accessibility, 
  ShieldAlert, Activity, GraduationCap, Workflow, Leaf, Network, 
  Sparkles, TrendingUp, BookOpen, Megaphone, FileText, Users, Globe,
  Compass, Bookmark
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Two-Column Core Profile Section --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Column 1: Academic Branding Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-8 bg-iamh-emerald" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                Institutional Profile
              </span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight leading-tight">
              Indian Academy of <br />Mental Health
            </h2>
            
            <p className="text-slate-600 leading-relaxed font-normal text-base">
              Indian Academy of Mental Health (IAMH) is a multidisciplinary community of mental health professionals from
              diverse disciplines, united by a shared mission to promote mental well-being and enhance the quality of life
              across communities.
            </p>
            
            <p className="text-slate-600 leading-relaxed font-normal text-base">
              We bring together experts from psychiatry, psychology, counselling, social work, occupational therapy, psychiatric
              nursing, rehabilitation, special education, neurosciences, holistic therapies and allied fields to work
              collaboratively towards a mentally healthier society.
            </p>

            <p className="text-slate-600 leading-relaxed font-normal text-base">
              IAMH is committed to the rehabilitation of individuals and the upliftment of society through awareness,
              research, education, advocacy, publications and evidence-based practices. We believe that a mentally healthy
              society is a strong and progressive society.
            </p>
          </div>

          {/* Column 2: Vision Card with Academic Graphics */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Soft decorative blur circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl z-0" />
              
              <div className="relative z-10 bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 text-iamh-emerald rounded-xl mb-6">
                  <Eye className="w-6 h-6 stroke-[1.8]" />
                </div>
                
                <h3 className="font-display font-extrabold text-2xl text-iamh-navy tracking-tight mb-4">
                  Our Vision
                </h3>
                
                <p className="text-slate-700 font-medium text-lg leading-relaxed mb-6">
                  "To build a mentally healthy, inclusive and compassionate India."
                </p>

                <div className="border-t border-slate-200/60 pt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 bg-iamh-navy rounded-full" />
                    <span>Focus on Evidence-Based Care</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 bg-iamh-navy rounded-full" />
                    <span>Advancing Psychiatric Science</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 bg-iamh-navy rounded-full" />
                    <span>Nationwide Professional Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Mission Section --- */}
        <div id="mission" className="border-t border-slate-200/50 pt-20 mb-24 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100/80 px-3 py-1 rounded-full uppercase">
              Core Mission
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight mt-4">
              Our Core Mission Areas
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              The strategic pillars defining the daily practices, academic projects, and advocacy initiatives of the Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {missionData.map((item) => {
              const IconComp = IconMap[item.iconName] || Compass;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.035)] hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 text-iamh-emerald rounded-lg border border-slate-200/50 group-hover:bg-iamh-emerald group-hover:text-white group-hover:border-iamh-emerald transition-all duration-300 mb-5">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="font-display font-bold text-slate-900 text-base leading-snug mb-2.5 group-hover:text-iamh-navy transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wide uppercase text-slate-400 group-hover:text-iamh-emerald transition-colors">
                    <span>Explore Strategy</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Multidisciplinary Network Section --- */}
        <div id="network" className="border-t border-slate-200/50 pt-20 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full uppercase">
              Collaborative Core
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight mt-4">
              Our Multidisciplinary Network
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Bringing together licensed healthcare practitioners from eleven critical disciplines under a unified institutional standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {disciplinesData.map((discipline) => {
              const IconComp = IconMap[discipline.iconName] || Brain;
              return (
                <div
                  key={discipline.id}
                  className="bg-white border border-slate-200/60 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.035)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4.5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-350 group-hover:scale-105 ${discipline.bgClass} shrink-0`}>
                        <IconComp className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-tight group-hover:text-iamh-navy transition-colors">
                        {discipline.name}
                      </h4>
                    </div>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                      {discipline.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono tracking-wide uppercase text-slate-400">
                    <span>Clinical Field</span>
                    <span className="text-iamh-navy font-bold">Specialty Division</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
