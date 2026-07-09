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
    <section id="values" className="py-20 scroll-mt-16" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 30%, #ecfdf5 60%, #f0fdf4 100%)' }}>
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
                className="bg-gradient-to-br from-blue-50/60 to-sky-50/30 border border-blue-100/70 p-6 sm:p-8 rounded-[20px] shadow-[0_2px_12px_rgba(37,99,235,0.03)] hover:shadow-[0_12px_36px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4.5">
                  {/* Icon Shield */}
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100/60 text-blue-700 rounded-lg border border-blue-200/50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
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

                <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-slate-400">
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
