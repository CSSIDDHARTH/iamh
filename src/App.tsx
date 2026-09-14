/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsAnnouncement from './components/EventsAnnouncement';
import About from './components/About';
import ValuesAndFeatures from './components/ValuesAndFeatures';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SchoolConclavePage from './pages/schoolconclave/SchoolConclavePage';

// React Router doesn't reset scroll position on navigation, so without this
// a click on an internal link (e.g. "Explore the Conclave") lands on the new
// page wherever the previous page happened to be scrolled to.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Explicit 'instant' so this doesn't inherit the site's smooth-scroll
    // CSS, which is meant for in-page anchor links, not page navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Upcoming Event: School Mental Health Conclave 2026 */}
        <EventsAnnouncement />

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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/school-mental-health-conclave" element={<SchoolConclavePage />} />
      </Routes>
    </>
  );
}
