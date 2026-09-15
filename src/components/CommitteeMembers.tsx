import React, { useState } from 'react';
import { Crown, Award, Shield, Star } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  photo: string;
  badge: React.ReactNode;
  tier: 'leadership' | 'executive';
}

const members: Member[] = [
  {
    name: 'Prof. JS Tripathi',
    role: 'President',
    photo: '/JS Tripati.jpeg',
    badge: <Crown className="w-3.5 h-3.5" />,
    tier: 'leadership',
  },
  {
    name: 'Prof. KN Murthy',
    role: 'Vice President',
    photo: '/KN Murthy (1).jpeg',
    badge: <Award className="w-3.5 h-3.5" />,
    tier: 'leadership',
  },
  {
    name: 'Prof. Richa Rani Yadav',
    role: 'Secretary',
    photo: '/Richa Rani Yadav.jpeg',
    badge: <Shield className="w-3.5 h-3.5" />,
    tier: 'leadership',
  },
  {
    name: 'Dr. Laxman Yadav',
    role: 'Treasurer',
    photo: '/Laxman Yadav.jpeg',
    badge: <Star className="w-3.5 h-3.5" />,
    tier: 'leadership',
  },
  {
    name: 'Dr. Shraddha Chaudhary',
    role: 'Executive Member',
    photo: '/Shraddha Chaudhary.jpeg',
    badge: <Star className="w-3.5 h-3.5" />,
    tier: 'executive',
  },
  {
    name: 'Dr. Rajesh Jain',
    role: 'Executive Member',
    photo: '/Rajesh Jain.jpeg',
    badge: <Star className="w-3.5 h-3.5" />,
    tier: 'executive',
  },
  {
    name: 'Dr. Sunil Sharma',
    role: 'Executive Member',
    photo: '/Sunil Sharma.jpeg',
    badge: <Star className="w-3.5 h-3.5" />,
    tier: 'executive',
  },
];

const roleBadgeStyle: Record<string, string> = {
  President: 'bg-amber-50 text-amber-800 border border-amber-200',
  'Vice President': 'bg-blue-50 text-blue-800 border border-blue-200',
  Secretary: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  Treasurer: 'bg-violet-50 text-violet-800 border border-violet-200',
  'Executive Member': 'bg-slate-50 text-slate-700 border border-slate-200',
};

const ringStyle: Record<string, string> = {
  President: 'ring-2 ring-amber-400/60 ring-offset-2',
  'Vice President': 'ring-2 ring-blue-400/60 ring-offset-2',
  Secretary: 'ring-2 ring-emerald-400/60 ring-offset-2',
  Treasurer: 'ring-2 ring-violet-400/60 ring-offset-2',
  'Executive Member': 'ring-2 ring-slate-300/60 ring-offset-2',
};

function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-slate-100
        hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      {/* Subtle top gradient shimmer on hover */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-iamh-navy via-iamh-gold to-iamh-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Photo */}
      <div className={`relative w-28 h-28 rounded-full overflow-hidden mb-4 ${ringStyle[member.role]} bg-slate-100`}>
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-iamh-navy/10 to-iamh-emerald/10 text-iamh-navy font-bold text-3xl">
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Role badge */}
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide mb-2 ${roleBadgeStyle[member.role]}`}>
        {member.badge}
        {member.role}
      </span>

      {/* Name */}
      <h3 className="font-display font-bold text-base text-iamh-navy leading-snug group-hover:text-iamh-emerald transition-colors duration-200">
        {member.name}
      </h3>
    </div>
  );
}

export default function CommitteeMembers() {
  const leadership = members.filter(m => m.tier === 'leadership');
  const executive = members.filter(m => m.tier === 'executive');

  return (
    <section id="committee" className="py-20 bg-pattern-waves scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-iamh-emerald" />
            <span className="text-sm font-mono font-bold tracking-widest text-slate-500 uppercase">
              Our Leadership
            </span>
            <span className="h-[2px] w-8 bg-iamh-emerald" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight leading-tight mb-4">
            Executive Committee
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Meet the dedicated professionals steering the Indian Academy of Mental Health towards a healthier nation.
          </p>
        </div>

        {/* Leadership Row — 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {leadership.map(member => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold my-8 mx-auto max-w-xs opacity-60" />

        {/* Executive Members Row — 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {executive.map(member => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}
