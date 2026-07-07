import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, Award, Network, Ticket, Newspaper, Heart, UserCheck, 
  Coins, Share2, Home, Milestone, Shield, Scale, Layers, 
  QrCode, Mail, Phone, ArrowRight, UserPlus, FileText, 
  Download, Sparkles, Upload, X, ShieldAlert, CheckCircle
} from 'lucide-react';
import { membershipBenefitsData, whyJoinData } from '../data';

// Icons mapping for safe dynamic rendering
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Network, Ticket, Newspaper, Heart, UserCheck, Coins,
  Share2, Home, Milestone, Shield, Scale, Layers
};

// ─── Scroll-triggered fade-in hook ─────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Premium Membership Benefits Section ───────────────────────────────────
function MembershipBenefitsSection() {
  const { ref: headingRef, inView: headingInView } = useInView(0.2);

  return (
    <div className="mb-20 border-t border-slate-200/60 pt-20">
      {/* Section Header */}
      <div
        ref={headingRef}
        className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
          headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block text-xs font-mono font-bold tracking-widest text-iamh-emerald bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full uppercase mb-4">
          Member Privileges
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight leading-tight">
          Membership Benefits
        </h2>
        <p className="text-slate-500 mt-4 text-base leading-relaxed">
          Become a part of a national network dedicated to advancing mental health awareness, professional excellence, collaboration, and community impact.
        </p>
        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[1px] w-12 bg-slate-200" />
          <span className="w-2 h-2 rounded-full bg-iamh-emerald" />
          <span className="h-[1px] w-12 bg-slate-200" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membershipBenefitsData.map((benefit, index) => (
          <BenefitCard key={benefit.id} benefit={benefit} index={index} />
        ))}
      </div>
    </div>
  );
}

// ─── Individual Benefit Card ────────────────────────────────────────────────
function BenefitCard({ benefit, index }: { benefit: (typeof membershipBenefitsData)[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const delay = Math.min(index * 80, 400); // stagger up to 400ms

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white rounded-[20px] shadow-[0_4px_20px_rgba(40,78,156,0.05)] border border-[#E9EDF2] p-8 flex flex-col gap-5 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(40,78,156,0.10)] cursor-default ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Circular emerald check icon */}
      <div className="w-12 h-12 rounded-full bg-iamh-emerald flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Check className="w-5 h-5 text-white stroke-[2.5]" />
      </div>

      {/* Content */}
      <div className="space-y-2.5">
        <h4 className="font-display font-bold text-iamh-navy text-lg tracking-tight leading-snug">
          {benefit.title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed font-normal">
          {benefit.text}
        </p>
      </div>

      {/* Bottom accent line — grows on hover */}
      <div className="mt-auto pt-5 border-t border-slate-100">
        <span className="inline-block h-0.5 w-8 bg-iamh-emerald rounded-full group-hover:w-16 transition-all duration-300 ease-out" />
      </div>
    </div>
  );
}

export default function Membership() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    discipline: 'Psychology',
    degree: '',
    licenseNumber: '',
    email: '',
    phone: '',
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [generatedMemberID, setGeneratedMemberID] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorVal, setErrorVal] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorVal) setErrorVal('');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.degree || !formData.email || !formData.phone) {
      setErrorVal('Please fill out all required academic and contact fields.');
      return;
    }
    
    setErrorVal('');
    setIsLoading(true);
    
    // Simulate short network delay for clinical credential verification
    setTimeout(() => {
      // Generate unique National Registration ID
      const randomId = Math.floor(10000 + Math.random() * 90000);
      const generatedCode = `IAMH-M-${randomId}`;
      setGeneratedMemberID(generatedCode);
      setIsLoading(false);
      setRegistrationSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      discipline: 'Psychology',
      degree: '',
      licenseNumber: '',
      email: '',
      phone: '',
    });
    setPhotoPreview(null);
    setRegistrationSuccess(false);
    setGeneratedMemberID('');
    setErrorVal('');
  };

  return (
    <section id="membership" className="scroll-mt-16">
      {/* --- Part A: Header (Neural Pattern) --- */}
      <div className="py-20 bg-pattern-neural border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase">
              National Directory Setup
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-iamh-navy tracking-tight mt-4">
              Become a Member of IAMH
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Join a national network of mental health professionals working together for awareness, education, collaboration and community impact.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-iamh-navy hover:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Join Membership
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Part B: Why Join (White Alternate) --- */}
      <div className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-iamh-navy text-2xl tracking-tight">
              Why Join the Academy
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Elevate your clinical practice, lead community programs, and access exclusive research assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinData.map((feature) => {
              const IconComp = IconMap[feature.iconName] || Shield;
              return (
                <div
                  key={feature.id}
                  className="bg-white border border-[#E9EDF2] p-6 rounded-[20px] shadow-[0_2px_12px_rgba(40,78,156,0.04)] hover:shadow-[0_8px_28px_rgba(40,78,156,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-iamh-navy rounded-xl shrink-0">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-base mb-1 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- Part C: Benefits & Enrollment (Neural Pattern) --- */}
      <div className="py-20 bg-pattern-neural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MembershipBenefitsSection />

          <div id="membership-join" className="bg-white border border-slate-200/60 rounded-2xl shadow-md p-8 sm:p-12 max-w-4xl mx-auto scroll-mt-20">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Info */}
              <div className="md:col-span-7 space-y-5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase">
                  Secure Enrollment Gateway
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-iamh-navy tracking-tight">
                  Become a Member by Scanning the QR
                </h3>
                
                <div className="space-y-3.5 pt-1">
                  <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                    How to complete your enrollment:
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-500">
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4.5 h-4.5 text-iamh-emerald shrink-0 mt-0.5" />
                      <span>
                        <strong>Scan & Subscribe:</strong> Open any UPI application (GPay, PhonePe, Paytm, or BHIM) and scan the official Academy QR code on the right to register instantly.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* QR Area */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200/50 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="relative w-44 h-44 bg-white border border-slate-200/60 rounded-xl p-3.5 flex items-center justify-center shadow-sm group">
                  <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-iamh-emerald" />
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-iamh-emerald" />
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-iamh-emerald" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-iamh-emerald" />
                  
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
                    <rect x="0" y="0" width="28" height="28" className="text-slate-900" />
                    <rect x="4" y="4" width="20" height="20" fill="white" />
                    <rect x="8" y="8" width="12" height="12" className="text-slate-900" />
                    
                    <rect x="72" y="0" width="28" height="28" className="text-slate-900" />
                    <rect x="76" y="4" width="20" height="20" fill="white" />
                    <rect x="80" y="8" width="12" height="12" className="text-slate-900" />
                    
                    <rect x="0" y="72" width="28" height="28" className="text-slate-900" />
                    <rect x="4" y="76" width="20" height="20" fill="white" />
                    <rect x="8" y="80" width="12" height="12" className="text-slate-900" />
                    
                    <rect x="80" y="80" width="12" height="12" className="text-slate-900" />
                    <rect x="82" y="82" width="8" height="8" fill="white" />
                    <rect x="84" y="84" width="4" height="4" className="text-slate-900" />

                    <rect x="36" y="10" width="4" height="4" className="text-slate-900" />
                    <rect x="44" y="10" width="4" height="4" className="text-slate-900" />
                    <rect x="52" y="10" width="4" height="4" className="text-slate-900" />
                    <rect x="60" y="10" width="4" height="4" className="text-slate-900" />

                    <rect x="10" y="36" width="4" height="4" className="text-slate-900" />
                    <rect x="10" y="44" width="4" height="4" className="text-slate-900" />
                    <rect x="10" y="52" width="4" height="4" className="text-slate-900" />
                    <rect x="10" y="60" width="4" height="4" className="text-slate-900" />

                    <g fill="currentColor" className="text-slate-900">
                      <rect x="36" y="20" width="8" height="4" />
                      <rect x="48" y="24" width="4" height="4" />
                      <rect x="60" y="20" width="4" height="8" />
                      <rect x="36" y="36" width="4" height="4" />
                      <rect x="44" y="36" width="8" height="4" />
                      <rect x="56" y="32" width="4" height="4" />
                      <rect x="32" y="44" width="4" height="8" />
                      <rect x="40" y="40" width="8" height="4" />
                      <rect x="52" y="44" width="8" height="4" />
                      <rect x="44" y="52" width="4" height="4" />
                      <rect x="48" y="56" width="8" height="4" />
                      <rect x="36" y="64" width="4" height="4" />
                      <rect x="44" y="68" width="12" height="4" />
                      <rect x="32" y="76" width="8" height="4" />
                      <rect x="44" y="84" width="4" height="4" />
                      <rect x="48" y="80" width="8" height="4" />
                      <rect x="60" y="72" width="4" height="12" />
                      <rect x="72" y="36" width="4" height="8" />
                      <rect x="80" y="40" width="8" height="4" />
                      <rect x="88" y="36" width="4" height="4" />
                      <rect x="76" y="48" width="12" height="4" />
                      <rect x="72" y="56" width="4" height="4" />
                      <rect x="80" y="56" width="8" height="4" />
                      <rect x="88" y="60" width="4" height="4" />
                      <rect x="72" y="68" width="8" height="4" />
                      <rect x="88" y="68" width="4" height="4" />
                    </g>
                  </svg>

                  <div className="absolute -bottom-2 bg-emerald-600 text-white font-mono text-[8px] font-bold tracking-widest px-2 py-0.5 rounded shadow border border-emerald-500 uppercase">
                    OFFICIAL QR
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xs mt-4">
                  National Council Gateway
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 max-w-[185px] leading-normal font-normal">
                  Scan using Google Pay, PhonePe, Paytm, or any BHIM UPI mobile application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MEMBERSHIP SIGNUP & CARD GENERATOR MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-3xl w-full overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-iamh-navy to-slate-900 p-5 text-white flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-lg">IAMH National Membership Portal</h3>
                <p className="text-xs text-slate-300 font-mono">Academic Session 2026 • Registration</p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {!registrationSuccess ? (
                /* Application Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex gap-4 p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-slate-600 text-xs">
                    <ShieldAlert className="w-5 h-5 text-iamh-navy shrink-0 mt-0.5" />
                    <p>
                      This is an academic registration form. Please input your authentic medical or psychological board licenses. Simulated credentials will generate an automated institutional mock card.
                    </p>
                  </div>

                  {errorVal && (
                    <div className="p-3.5 bg-red-50 border border-red-200/50 rounded-lg text-red-700 text-xs font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      {errorVal}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name (with honorific) *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Dr. Siddharth Sharma, PhD"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy"
                      />
                    </div>

                    {/* Primary Specialty */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Specialty Discipline *
                      </label>
                      <select
                        name="discipline"
                        value={formData.discipline}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy bg-white"
                      >
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Counselling">Counselling</option>
                        <option value="Social Work">Social Work</option>
                        <option value="Occupational Therapy">Occupational Therapy</option>
                        <option value="Psychiatric Nursing">Psychiatric Nursing</option>
                        <option value="Rehabilitation">Rehabilitation</option>
                        <option value="Special Education">Special Education</option>
                        <option value="Neurosciences">Neurosciences</option>
                        <option value="Holistic Therapies">Holistic Therapies</option>
                        <option value="Allied Fields">Allied Mental Health Fields</option>
                      </select>
                    </div>

                    {/* Degrees / Academics */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Academic Degrees *
                      </label>
                      <input
                        type="text"
                        name="degree"
                        required
                        value={formData.degree}
                        onChange={handleInputChange}
                        placeholder="MD, M.Phil, PhD in Clinical Psychology"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy"
                      />
                    </div>

                    {/* Medical / RCI License Code */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        State Council / RCI License No.
                      </label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        placeholder="RCI A84392 or MCI-94301"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="siddharth@iamh.in"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iamh-navy"
                      />
                    </div>
                  </div>

                  {/* Photo upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Professional Headshot (Passport format)
                    </label>
                    <div 
                      onClick={triggerFileInput}
                      className="border-2 border-dashed border-slate-200 hover:border-iamh-emerald p-4 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100/50 transition-all flex flex-col items-center justify-center text-center"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      
                      {photoPreview ? (
                        <div className="flex items-center gap-4">
                          <img 
                            src={photoPreview} 
                            alt="Headshot preview" 
                            className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                            referrerPolicy="no-referrer"
                          />
                          <div className="text-left">
                            <span className="text-xs font-semibold text-slate-700 block">Photo loaded successfully</span>
                            <span className="text-[10px] text-slate-400">Click to replace headshot image</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-slate-400 stroke-[1.5] mb-2" />
                          <span className="text-xs font-semibold text-slate-600">Drag & Drop or Click to Upload</span>
                          <span className="text-[10px] text-slate-400 mt-1">Supports PNG, JPG (Max 2MB)</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 border-t border-slate-100 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        resetForm();
                      }}
                      className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2.5 text-sm font-semibold text-white bg-iamh-navy hover:bg-slate-900 disabled:bg-slate-400 rounded-lg shadow-sm flex items-center gap-2 transition-all"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Verifying Credentials...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generate Digital Card</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Registration Success & Membership Card Layout */
                <div className="space-y-8 py-4">
                  <div className="text-center max-w-md mx-auto space-y-2">
                    <div className="w-12 h-12 bg-emerald-100 text-iamh-emerald rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                      Affiliation Form Approved
                    </h4>
                    <p className="text-xs text-slate-500">
                      Your credentials have been logged in the Academy Directory. Your digital membership card is generated below.
                    </p>
                  </div>

                  {/* Visual Premium Card representation */}
                  <div className="max-w-[420px] mx-auto bg-gradient-to-br from-slate-900 via-iamh-navy to-slate-900 rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden text-white">
                    {/* Watermark Logo */}
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl" />

                    {/* Card Header */}
                    <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/logo.png"
                          alt="IAMH Logo"
                          className="h-10 w-auto object-contain"
                        />
                        <div>
                          <h5 className="font-display font-bold text-xs leading-none tracking-tight">
                            Indian Academy of Mental Health
                          </h5>
                          <span className="text-[7.5px] font-mono tracking-widest text-slate-400 uppercase">
                            National Affiliation Card
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[8px] tracking-wider text-emerald-400 uppercase font-bold bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    </div>

                    {/* Card Content (User Photo & Primary Specs) */}
                    <div className="flex gap-4 items-center">
                      <div className="shrink-0">
                        {photoPreview ? (
                          <img 
                            src={photoPreview} 
                            alt="Member Photo" 
                            className="w-20 h-24 object-cover rounded-lg border border-white/10 shadow-md bg-slate-800"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-20 h-24 bg-slate-800 border border-white/5 rounded-lg flex flex-col items-center justify-center text-slate-500">
                            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase text-center leading-tight">
                              NO<br />PHOTO<br />UPLOAD
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1.5 text-left">
                        <div>
                          <span className="text-[7px] font-mono text-slate-400 uppercase tracking-widest block">Full Name</span>
                          <span className="font-display font-bold text-sm tracking-tight block truncate max-w-[240px]">
                            {formData.fullName || "Dr. Siddharth Sharma"}
                          </span>
                        </div>
                        
                        <div>
                          <span className="text-[7px] font-mono text-slate-400 uppercase tracking-widest block">Academic Credentials</span>
                          <span className="font-display text-[10px] text-slate-200 block truncate max-w-[240px]">
                            {formData.degree || "PhD, Clinical Neuropsychology"}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
                          <div>
                            <span className="text-[7px] font-mono text-slate-400 uppercase tracking-widest block">Discipline</span>
                            <span className="font-sans font-semibold text-[9px] text-emerald-300 block">
                              {formData.discipline}
                            </span>
                          </div>
                          <div>
                            <span className="text-[7px] font-mono text-slate-400 uppercase tracking-widest block">Member ID</span>
                            <span className="font-mono text-[9px] text-slate-100 block">
                              {generatedMemberID}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[7px] font-mono text-slate-400">
                      <div>
                        <span>ESTD: 2021 • REG NO: 00589</span>
                        <span className="block text-[6px] text-slate-500">ISSUED: 2026-07-06</span>
                      </div>
                      {/* Micro QR for scanning credentials */}
                      <div className="bg-white p-1 rounded-sm shrink-0">
                        <QrCode className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="text-center pt-2 space-y-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-all"
                      >
                        <Download className="w-4 h-4" />
                        Print Certificate
                      </button>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-iamh-navy text-white text-xs font-semibold hover:bg-slate-900 shadow-2xs transition-all"
                      >
                        <UserPlus className="w-4 h-4" />
                        Register Another
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        resetForm();
                      }}
                      className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline block mx-auto"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
