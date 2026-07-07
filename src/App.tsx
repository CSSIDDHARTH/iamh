/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValuesAndFeatures from './components/ValuesAndFeatures';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />
        
        {/* Profile, Vision, Mission & Specialties */}
        <About />
        
        {/* Core Values */}
        <ValuesAndFeatures />
        
        {/* Membership benefits, "Why Join" & Live Card Generator */}
        <Membership />
        
        {/* Coordinate details, contact form & Interactive SVG Maps */}
        <Contact />
      </main>
      
      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

