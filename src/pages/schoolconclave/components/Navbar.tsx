import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { IAMHLogo } from './InstitutionalBadges';
import { EVENT_DETAILS } from '../data/conclaveData';

interface NavbarProps {
  onOpenRegister: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Program Focus', href: '#program-focus' },
  { label: 'Participation', href: '#participation' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlights the nav item for whichever section currently sits in the
  // viewport's middle band, so the active state tracks scroll position.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 160);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    if (isOpen) closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div className="mx-auto max-w-7xl flex flex-col items-stretch">
        {/* Floating premium navbar card */}
        <div
          className={`conclave-nav pointer-events-auto w-full rounded-2xl border transition-[padding,box-shadow,background-color] duration-300 ease-out ${
            scrolled
              ? 'border-[#D6A72C]/20 bg-gradient-to-b from-white/95 to-[#FFF8E8]/95 backdrop-blur-xl shadow-[0_16px_44px_-18px_rgba(107,84,25,0.25)] py-2'
              : 'border-[#D6A72C]/15 bg-gradient-to-b from-white/85 to-[#FFF8E8]/85 backdrop-blur-lg shadow-[0_10px_36px_-16px_rgba(107,84,25,0.18)] py-2.5'
          } px-3 sm:px-5 lg:px-6 flex items-center justify-between gap-2 sm:gap-4`}
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="group flex items-center gap-2 sm:gap-3 shrink-0 min-w-0 rounded-xl py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60"
            aria-label="School Mental Health Conclave — go to top"
          >
            <span className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#17203A]/[0.04] ring-1 ring-[#D6A72C]/20 transition-all duration-300 group-hover:ring-[var(--nav-gold)]/60 group-hover:shadow-[0_0_18px_-2px_var(--nav-gold)] shrink-0">
              <IAMHLogo size={20} className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-105" />
            </span>

            <span className="flex flex-col leading-none min-w-0">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-semibold uppercase text-[#17203A] text-[11.5px] sm:text-[15.5px] tracking-[0.01em] leading-none whitespace-nowrap truncate">
                  IAMH Conclave
                </span>
                <span className="hidden sm:inline-flex items-center rounded-full bg-[var(--nav-gold)]/15 px-1.5 py-[2px] text-[11px] font-bold text-[var(--nav-gold-dark)] ring-1 ring-[var(--nav-gold)]/30 leading-none">
                  2026
                </span>
              </span>
              <span className="hidden sm:block mt-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#596174] leading-none whitespace-nowrap">
                BHU Varanasi &bull; 6 Oct
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Conclave sections" className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60 ${
                    isActive ? 'text-[#17203A]' : 'text-[#596174] hover:text-[#17203A]'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-3 -bottom-px h-px origin-left bg-[var(--nav-gold)] transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Secondary actions + primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-1 mr-1 pr-3 border-r border-[#D6A72C]/20">
              <Link
                to="/"
                title="Back to IAMH.org"
                aria-label="Back to IAMH main website"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#596174] transition-colors duration-200 hover:text-[var(--nav-gold-dark)] hover:bg-[#17203A]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60"
              >
                <IAMHLogo size={16} className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                title={`Call Helpline: ${EVENT_DETAILS.contactPhone}`}
                aria-label={`Call helpline ${EVENT_DETAILS.contactPhone}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#596174] transition-colors duration-200 hover:text-[var(--nav-gold-dark)] hover:bg-[#17203A]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>

            {/* Primary Register CTA */}
            <button
              type="button"
              onClick={onOpenRegister}
              className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-b from-[var(--nav-gold-light)] to-[var(--nav-gold)] px-3 sm:px-5 py-2 sm:py-2.5 text-[13.5px] sm:text-sm font-semibold text-[#161005] shadow-[0_8px_20px_-8px_rgba(208,169,50,0.55)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_26px_-8px_rgba(208,169,50,0.7)] active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="whitespace-nowrap">
                Register<span className="hidden sm:inline"> School</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile / tablet menu toggle */}
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
              className="xl:hidden flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg text-[#17203A] bg-[#17203A]/[0.05] hover:bg-[#17203A]/[0.09] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="conclave-mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet dropdown menu */}
        {isOpen && (
          <div
            id="conclave-mobile-menu"
            className={`conclave-nav pointer-events-auto mt-2 w-full max-w-md self-end xl:hidden rounded-2xl border border-[#D6A72C]/20 bg-gradient-to-b from-white/98 to-[#FFF8E8]/98 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgba(107,84,25,0.3)] p-3 ${
              isClosing ? 'conclave-menu-exit' : 'conclave-menu-enter'
            }`}
          >
            <div className="flex items-center justify-between rounded-xl bg-[#17203A]/[0.04] px-3.5 py-2.5 mb-2">
              <span className="text-[13px] font-semibold text-[#17203A]">School Mental Health Conclave</span>
              <span className="text-[12px] font-bold text-[var(--nav-gold-dark)]">{EVENT_DETAILS.date}</span>
            </div>

            <nav aria-label="Conclave sections" className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3.5 py-3 text-left text-[14.5px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-gold)]/60 ${
                      isActive ? 'text-[#17203A] bg-[#17203A]/[0.06]' : 'text-[#596174] hover:text-[#17203A] hover:bg-[#17203A]/[0.04]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                        isActive ? 'bg-[var(--nav-gold)]' : 'bg-slate-300'
                      }`}
                    />
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-2 pt-3 border-t border-[#D6A72C]/20 grid grid-cols-2 gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-lg py-2.5 text-[13.5px] font-medium text-[#596174] bg-[#17203A]/[0.04] hover:bg-[#17203A]/[0.08] hover:text-[#17203A] transition-colors duration-200"
              >
                <IAMHLogo size={14} className="h-3.5 w-3.5" />
                IAMH.org
              </Link>
              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                className="flex items-center justify-center gap-2 rounded-lg py-2.5 text-[13.5px] font-medium text-[#596174] bg-[#17203A]/[0.04] hover:bg-[#17203A]/[0.08] hover:text-[#17203A] transition-colors duration-200"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Helpline
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenRegister();
              }}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[var(--nav-gold-light)] to-[var(--nav-gold)] py-3 text-[14.5px] font-semibold text-[#161005] shadow-[0_8px_20px_-8px_rgba(208,169,50,0.55)] active:scale-[0.98] transition-all duration-200"
            >
              Register Your School
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
