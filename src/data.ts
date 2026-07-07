import { Discipline, MissionItem, BenefitItem, FeatureItem, ValueItem, MattersItem } from './types';

export const disciplinesData: Discipline[] = [
  {
    id: 'psychiatry',
    name: 'Psychiatry',
    iconName: 'Stethoscope',
    description: 'Medical evaluation, clinical diagnosis, and pharmacological management of complex psychiatric disorders.',
    bgClass: 'bg-blue-50/50 border-blue-100 text-blue-700'
  },
  {
    id: 'psychology',
    name: 'Psychology',
    iconName: 'Brain',
    description: 'Scientific study of cognitive, emotional, and social processes through behavioral assessment and intervention.',
    bgClass: 'bg-emerald-50/50 border-emerald-100 text-emerald-700'
  },
  {
    id: 'counselling',
    name: 'Counselling',
    iconName: 'MessageSquare',
    description: 'Guidance and therapeutic support to help individuals navigate personal, social, and emotional challenges.',
    bgClass: 'bg-indigo-50/50 border-indigo-100 text-indigo-700'
  },
  {
    id: 'social-work',
    name: 'Social Work',
    iconName: 'HeartHandshake',
    description: 'Community-based interventions, social welfare facilitation, and psychosocial support systems.',
    bgClass: 'bg-amber-50/50 border-amber-100 text-amber-700'
  },
  {
    id: 'occupational-therapy',
    name: 'Occupational Therapy',
    iconName: 'Accessibility',
    description: 'Functional rehabilitation promoting independence in daily activities for individuals with physical or mental challenges.',
    bgClass: 'bg-teal-50/50 border-teal-100 text-teal-700'
  },
  {
    id: 'psychiatric-nursing',
    name: 'Psychiatric Nursing',
    iconName: 'ShieldAlert',
    description: 'Specialized psychiatric care, continuous monitoring, and empathetic patient support within clinical environments.',
    bgClass: 'bg-rose-50/50 border-rose-100 text-rose-700'
  },
  {
    id: 'rehabilitation',
    name: 'Rehabilitation',
    iconName: 'Activity',
    description: 'Comprehensive restorative therapies helping patients reintegrate into social, vocational, and personal life.',
    bgClass: 'bg-cyan-50/50 border-cyan-100 text-cyan-700'
  },
  {
    id: 'special-education',
    name: 'Special Education',
    iconName: 'GraduationCap',
    description: 'Individualized instructional programs tailored for students with diverse cognitive or learning needs.',
    bgClass: 'bg-violet-50/50 border-violet-100 text-violet-700'
  },
  {
    id: 'neurosciences',
    name: 'Neurosciences',
    iconName: 'Workflow',
    description: 'Academic and scientific research into neural pathways, brain architecture, and physiological behavior.',
    bgClass: 'bg-sky-50/50 border-sky-100 text-sky-700'
  },
  {
    id: 'holistic-therapies',
    name: 'Holistic Therapies',
    iconName: 'Leaf',
    description: 'Evidence-based complementary practices focusing on the integration of mind, body, and spirit wellness.',
    bgClass: 'bg-emerald-50/50 border-emerald-100 text-emerald-700'
  },
  {
    id: 'allied-mental-health',
    name: 'Allied Mental Health Fields',
    iconName: 'Network',
    description: 'Diverse supporting disciplines collaborating on prevention, diagnostic support, and systemic health.',
    bgClass: 'bg-slate-50/50 border-slate-100 text-slate-700'
  }
];

export const missionData: MissionItem[] = [
  {
    id: 'm1',
    title: 'Promote Mental Health Awareness',
    description: 'De-stigmatize mental illnesses across rural and urban communities through robust public outreach campaigns, educational materials, and scientific seminars.',
    iconName: 'Sparkles'
  },
  {
    id: 'm2',
    title: 'Encourage Research',
    description: 'Sponsor, design, and facilitate collaborative research projects that explore sociocultural contexts of mental health in India to build homegrown solutions.',
    iconName: 'TrendingUp'
  },
  {
    id: 'm3',
    title: 'Advance Mental Health Education',
    description: 'Set academic standards, formulate clinical training curricula, and organize accredited continuing education programs for licensed practitioners.',
    iconName: 'BookOpen'
  },
  {
    id: 'm4',
    title: 'Support Advocacy',
    description: 'Engage with policymakers and legislative bodies to advocate for ethical mental health regulations, equal rights, and inclusive national frameworks.',
    iconName: 'Megaphone'
  },
  {
    id: 'm5',
    title: 'Promote Evidence-Based Practices',
    description: 'Establish comprehensive clinical guidelines and protocols based on rigorous peer-reviewed scientific studies and practical field evaluations.',
    iconName: 'FileText'
  },
  {
    id: 'm6',
    title: 'Foster Professional Collaboration',
    description: 'Unite practitioners from psychiatry, psychology, nursing, and social work under a cohesive national umbrella to break academic silos.',
    iconName: 'Users'
  },
  {
    id: 'm7',
    title: 'Enhance Community Well-being',
    description: 'Deploy community mental health drives, mobile clinics, and psychological rehabilitation networks to serve vulnerable and marginalized populations.',
    iconName: 'Globe'
  }
];

export const membershipBenefitsData: BenefitItem[] = [
  {
    id: 'b1',
    title: 'National Network Access',
    text: 'Be a part of a prestigious national network of mental health professionals from diverse disciplines, united under a common vision.',
    iconName: 'Award'
  },
  {
    id: 'b2',
    title: 'Interdisciplinary Collaboration',
    text: 'Access opportunities for inter-disciplinary collaboration, clinical referrals, and structured professional growth across specialties.',
    iconName: 'Network'
  },
  {
    id: 'b3',
    title: 'Workshops & Conferences',
    text: 'Gain discounted access to national workshops, hands-on training programs, and annual academic conferences organized by IAMH.',
    iconName: 'Ticket'
  },
  {
    id: 'b4',
    title: 'Research & Publications',
    text: 'Stay updated with the latest research, publications, and mental health resources curated by our scientific committee.',
    iconName: 'Newspaper'
  },
  {
    id: 'b5',
    title: 'Community Impact Initiatives',
    text: 'Leverage our national platform to contribute towards meaningful community wellness and mental rehabilitation initiatives across India.',
    iconName: 'Heart'
  },
  {
    id: 'b6',
    title: 'Professional Recognition',
    text: 'Earn formal professional recognition, national academy backing, and elevated clinical credibility as a registered IAMH member.',
    iconName: 'UserCheck'
  },
  {
    id: 'b7',
    title: 'Advocacy & Policy Reform',
    text: 'Participate actively in organized national advocacy, public mental health awareness campaigns, and policy reform programs.',
    iconName: 'Coins'
  }
];

export const whyJoinData: FeatureItem[] = [
  {
    id: 'w1',
    title: 'Unparalleled Network Expansion',
    description: 'Connect with senior scholars, peer practitioners, and rising professionals across the mental health spectrum to enrich your network.',
    iconName: 'Share2'
  },
  {
    id: 'w2',
    title: 'Impactful Community Programs',
    description: 'Directly translate your research and clinical skills into real-world change through our grass-roots rehabilitation campaigns.',
    iconName: 'Home'
  },
  {
    id: 'w3',
    title: 'Continuous Professional Learning',
    description: 'Acquire continuing education credits and build niche skills in specialized clinical modules supervised by senior experts.',
    iconName: 'Milestone'
  },
  {
    id: 'w4',
    title: 'Evidence-Based Frameworks',
    description: 'Utilize and contribute to clinical guidelines that elevate the overall standards of safety and efficacy in practice.',
    iconName: 'Shield'
  },
  {
    id: 'w5',
    title: 'Advocacy for Systematic Reform',
    description: 'Represent the mental health fraternity in national conversations regarding mental healthcare delivery, insurance, and ethics.',
    iconName: 'Scale'
  },
  {
    id: 'w6',
    title: 'Inclusive and Supportive Society',
    description: 'Be part of a collaborative force shaping public attitude, ending discrimination, and promoting rehabilitation-oriented care.',
    iconName: 'Layers'
  }
];

export const coreValuesData: ValueItem[] = [
  {
    id: 'v1',
    title: 'Compassion',
    description: 'Placing empathy and human dignity at the absolute center of all diagnostic and community-based care.',
    iconName: 'Heart'
  },
  {
    id: 'v2',
    title: 'Collaboration',
    description: 'Breaking disciplinary barriers to foster multi-sector synergy among all mental health sciences.',
    iconName: 'GitPullRequest'
  },
  {
    id: 'v3',
    title: 'Inclusion',
    description: 'Ensuring that everyone, regardless of socioeconomic, neurodivergent, or geographic status, has equal mental healthcare access.',
    iconName: 'Compass'
  },
  {
    id: 'v4',
    title: 'Ethics',
    description: 'Upholding strict professional guidelines, research integrity, clinical confidentiality, and patient-first values.',
    iconName: 'Bookmark'
  },
  {
    id: 'v5',
    title: 'Scientific Practice',
    description: 'Relying exclusively on objective, evidence-based methodologies, empirical research, and rigorous clinical safety.',
    iconName: 'Atom'
  },
  {
    id: 'v6',
    title: 'Excellence',
    description: 'Striving for peak standards in psychiatric education, psychological training, clinical services, and public advocacy.',
    iconName: 'Star'
  }
];

export const mentalHealthMattersData: MattersItem[] = [
  {
    id: 'mat1',
    title: 'Mental Health Awareness',
    description: 'Eradicating cultural taboos and providing vocabulary to discuss psychiatric illness. Educational advocacy enables individuals to seek care early.',
    iconName: 'Lightbulb',
    details: 'Through regional seminars and pamphlets, we reach schools, corporate spaces, and rural regions to make mental hygiene a mainstream conversation.'
  },
  {
    id: 'mat2',
    title: 'Early Intervention',
    description: 'Identifying mental and neurological difficulties in their nascent stages, which substantially lowers secondary complications and improves long-term prognosis.',
    iconName: 'Clock',
    details: 'Screening models in primary schools and community centers help identify neurodevelopmental delays and early mood disorders.'
  },
  {
    id: 'mat3',
    title: 'Community Support',
    description: 'Constructing robust, localized support systems to ease the burden on clinical facilities. Safe peer environments promote persistent recovery.',
    iconName: 'Users',
    details: 'We support the establishment of self-help groups, community-based daycares, and local helplines to provide round-the-clock safety nets.'
  },
  {
    id: 'mat4',
    title: 'Inclusive Society',
    description: 'Advocating for structural accessibility and workplace equality. A society that accommodates neurodiversity is stronger and more humane.',
    iconName: 'Accessibility',
    details: 'Lobbying for reasonable accommodations in schools and competitive workspaces helps people with mental health challenges live independently.'
  },
  {
    id: 'mat5',
    title: 'Rehabilitation',
    description: 'Providing comprehensive vocational, social, and psychological therapies to rebuild independent lives following severe mental illnesses.',
    iconName: 'Activity',
    details: 'Transitional housing, occupational coaching, and neuro-cognitive exercises guide patients systematically back into society.'
  },
  {
    id: 'mat6',
    title: 'Professional Collaboration',
    description: 'Aligning psychiatrists, counselors, and educators on singular treatment plans. A unified front guarantees the highest patient safety.',
    iconName: 'Workflow',
    details: 'Our case discussion programs allow various clinical professionals to review treatment plans and provide optimal holistic solutions.'
  }
];
