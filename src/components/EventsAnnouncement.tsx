import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function EventsAnnouncement() {
  return (
    <section id="events" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="h-[2px] w-8 bg-iamh-emerald" />
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            Upcoming IAMH Event
          </span>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/events/schoolconclave/hero.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 p-8 sm:p-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 mb-5 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-mono font-semibold tracking-wider text-amber-300 uppercase">
                  World Mental Health Day 2026
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 tracking-tight leading-tight mb-4">
                School Mental Health Conclave 2026
              </h2>

              <p className="text-slate-300 leading-relaxed font-normal text-sm sm:text-base mb-6 max-w-2xl">
                IAMH, in collaboration with the Department of Psychiatry, Centre of Excellence, IMS-BHU, is
                bringing schools, teachers, and students together for a landmark national summit on building
                mentally healthy and supportive school ecosystems.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-8 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-iamh-emerald" />
                  <span className="font-semibold">6 October 2026 &bull; 10:30 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-iamh-emerald" />
                  <span className="font-semibold">Banaras Hindu University (BHU), Varanasi</span>
                </div>
              </div>

              <div>
                <Link
                  to="/events/school-mental-health-conclave"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  Explore the Conclave
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
