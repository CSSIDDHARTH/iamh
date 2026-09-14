import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Award, 
  Home, 
  Shield, 
  ArrowRight, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { ECOSYSTEM_STAKEHOLDERS, CONTINUUM_PROGRESSION, EVENT_DETAILS } from '../data/conclaveData';
import { IndianLotusDivider } from './InstitutionalBadges';

export const SchoolEcosystemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-blue-700" };
    switch (iconName) {
      case 'Users': return <Users {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Shield': return <Shield {...props} />;
      default: return <Users {...props} />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Premium Vision Banner: Every Child Deserves a Mentally Healthy School. */}
        <div className="mb-20">
          <div
            className="relative rounded-3xl panel-editorial p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden text-center"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'%3E%3Cg fill='none' stroke='%23D6A72C' stroke-width='1' opacity='0.10'%3E%3Ccircle cx='260' cy='260' r='210'/%3E%3Ccircle cx='260' cy='260' r='170'/%3E%3Ccircle cx='260' cy='260' r='130'/%3E%3Cpath d='M260 130 C230 190 190 220 190 270 C190 310 222 340 260 340 C298 340 330 310 330 270 C330 220 290 190 260 130Z'/%3E%3Cpath d='M260 160 C238 205 210 228 210 268 C210 298 232 320 260 320 C288 320 310 298 310 268 C310 228 282 205 260 160Z'/%3E%3Cpath d='M130 260 C190 230 220 190 270 190 C310 190 340 222 340 260 C340 298 310 330 270 330 C220 330 190 290 130 260Z' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(160deg, #FFFDF7 0%, #FFF8E8 55%, #FFF1C7 100%)",
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundPosition: 'center, center',
            }}
          >

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6A72C]/15 text-[#B8871F] text-sm font-bold uppercase tracking-widest border border-[#D6A72C]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Core Conclave Vision</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight heading-rainbow">
                "{EVENT_DETAILS.visionStatement}"
              </h2>

              <p className="text-base sm:text-lg text-[#596174] leading-relaxed font-medium pt-2">
                Mental health cannot be addressed by focusing on the child alone.
              </p>

              <div className="pt-2">
                <IndianLotusDivider className="w-48 h-6 mx-auto opacity-90 text-[#B8871F]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholder Collaboration Breakdown */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <HeartHandshake className="w-3.5 h-3.5 text-blue-700" />
            <span>Multi-Tiered Collaboration</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold heading-rainbow">
            A Collaborative School Ecosystem
          </h3>
          <p className="mt-3 text-base text-slate-600">
            A resilient school climate unites all five vital community stakeholders in proactive dialogue and shared responsibility.
          </p>

          <div className="mt-4 flex items-center justify-center flex-wrap gap-2 text-sm sm:text-base font-bold text-blue-950 bg-blue-50/70 p-3 rounded-xl border border-blue-100 max-w-xl mx-auto">
            <span>Students</span>
            <span className="text-blue-400">+</span>
            <span>Teachers</span>
            <span className="text-blue-400">+</span>
            <span>Principals</span>
            <span className="text-blue-400">+</span>
            <span>Parents</span>
            <span className="text-blue-400">+</span>
            <span>School Leadership</span>
          </div>
        </div>

        {/* 5 Compact Stakeholder Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
          {ECOSYSTEM_STAKEHOLDERS.map((stakeholder) => (
            <div
              key={stakeholder.role}
              className="bg-[#fcfdfe] rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {getIcon(stakeholder.iconName)}
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 leading-tight">
                {stakeholder.role}
              </h4>
              <p className="text-base text-slate-500 leading-snug">
                {stakeholder.responsibility}
              </p>
            </div>
          ))}
        </div>

        {/* Concept Note Progression Flow */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm uppercase tracking-widest font-bold text-blue-800">
              Continuum of Comprehensive Care
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              The 6-Stage Institutional Pathway
            </h4>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              From early awareness to sustained student recovery and lifelong thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {CONTINUUM_PROGRESSION.map((step, idx) => (
              <div
                key={step.stage}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-mono font-bold text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    {idx < CONTINUUM_PROGRESSION.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-300 absolute -right-2 top-6 z-10 bg-white" />
                    )}
                  </div>
                  <h5 className="font-display text-base font-bold text-slate-900">
                    {step.stage}
                  </h5>
                  <p className="mt-1.5 text-base text-slate-600 leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
