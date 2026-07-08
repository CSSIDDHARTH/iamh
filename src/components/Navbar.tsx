import React, { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Network', href: '#network' },
    { name: 'Membership', href: '#membership' },
    { name: 'Core Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8"
    >
      <div 
        className={`mx-auto transition-all duration-300 rounded-full border ${
          scrolled 
            ? 'max-w-7xl bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-slate-200/60 px-6 py-2.5' 
            : 'max-w-7xl bg-white/55 backdrop-blur-md border-slate-200/30 px-6 py-3'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Institutional Logo */}
            <img
              src="/logo.png"
              alt="Indian Academy of Mental Health Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base leading-tight text-slate-950 tracking-tight group-hover:text-iamh-navy transition-colors">
                  Indian Academy of Mental Health
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[8.5px] font-mono font-bold tracking-wider bg-emerald-50 text-emerald-800 rounded border border-emerald-100/75 uppercase">
                  Est. 2021
                </span>
              </div>
              <span className="text-[9.5px] font-mono text-slate-500 font-semibold tracking-wide">
                National Academy • Registered Body • No: 00589
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono font-bold text-slate-600 hover:text-iamh-navy transition-colors duration-200 relative group tracking-wide uppercase"
              >
                {link.name}
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-iamh-emerald transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </a>
            ))}
            <div className="h-5 w-[1px] bg-slate-200 mx-3" />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTM0Nc_0KlOJbkEs_-r3OYV9Pp1CFNCeYtFMLldaZyDboSNQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-iamh-navy hover:bg-slate-950 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Join Academy
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-iamh-navy hover:bg-slate-50 border border-slate-200/50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5.5 w-5.5" /> : <Menu className="block h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen border-b border-slate-200/55 shadow-md mt-2 rounded-2xl mx-4' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl">
          <div className="px-3 py-1 mb-3 border-b border-slate-100 pb-2">
            <span className="block text-[10px] font-mono text-slate-500">REGISTRATION NUMBER: 00589</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-iamh-navy hover:bg-slate-50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTM0Nc_0KlOJbkEs_-r3OYV9Pp1CFNCeYtFMLldaZyDboSNQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-iamh-navy hover:bg-slate-900 rounded-full shadow-sm transition-all text-center"
            >
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
