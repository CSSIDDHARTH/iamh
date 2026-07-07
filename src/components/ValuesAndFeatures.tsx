import React from 'react';
import { Heart, GitPullRequest, Compass, Bookmark, Atom, Star } from 'lucide-react';
import { coreValuesData } from '../data';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  GitPullRequest,
  Compass,
  Bookmark,
  Atom,
  Star
};

export default function ValuesAndFeatures() {
  return (
    <section id="values" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase">
            Institutional Pillars
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight mt-4">
            Our Core Values
          </h2>
          <p className="text-slate-500 mt-3 text-sm">
            The ethical and scientific framework that guides all research, clinical interventions, and advocacy by IAMH.
          </p>
        </div>

        {/* --- Six Values Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValuesData.map((val) => {
            const IconComp = IconMap[val.iconName] || Star;
            return (
              <div
                key={val.id}
                className="bg-white border border-[#E9EDF2] p-6 sm:p-8 rounded-[20px] shadow-[0_2px_12px_rgba(40,78,156,0.04)] hover:shadow-[0_12px_36px_rgba(40,78,156,0.09)] hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4.5">
                  {/* Icon Shield */}
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-iamh-emerald rounded-lg border border-emerald-100/50 group-hover:bg-iamh-emerald group-hover:text-white transition-all duration-300 shadow-2xs">
                    <IconComp className="w-5.5 h-5.5 stroke-[1.5]" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2.5">
                    <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight group-hover:text-iamh-navy transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  <span>Ethical Guideline</span>
                  <span className="text-iamh-navy font-bold">Secured</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
