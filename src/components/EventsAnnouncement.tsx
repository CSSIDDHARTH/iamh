import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function EventsAnnouncement() {
  return (
    <section
      id="events"
      className="py-20 scroll-mt-16"
      style={{
        background:
          'radial-gradient(circle at 15% 10%, rgba(218,178,78,0.10), transparent 45%), linear-gradient(135deg, #FFFDF7, #FFF8E8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="h-[2px] w-8 bg-[#D6A72C]" />
          <span className="text-sm font-mono font-bold tracking-widest text-[#596174] uppercase">
            Upcoming IAMH Event
          </span>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: '1px solid rgba(180, 145, 65, 0.22)',
            boxShadow: '0 20px 50px rgba(50, 40, 20, 0.10)',
          }}
        >
          {/* Heritage paisley/lotus artwork background — kept, no dark overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/events/schoolconclave/hero.png')" }}
          />

          {/* Ivory scrim: near-opaque over the text column, letting the artwork
              breathe on the right and along the edges, plus a soft golden glow
              top-right — warm sunlight on paper, not a dark overlay. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 88% 12%, rgba(224,184,84,0.28), transparent 42%), linear-gradient(100deg, rgba(255,253,247,0.97) 0%, rgba(255,253,247,0.95) 38%, rgba(255,248,232,0.72) 58%, rgba(255,248,232,0.32) 78%, rgba(255,248,232,0.14) 100%)',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 p-8 sm:p-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 w-fit shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, #F4E7BE 0%, #E7C76A 100%)',
                  border: '1px solid rgba(180, 145, 65, 0.35)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#17203A]" />
                <span className="text-sm font-mono font-semibold tracking-wider text-[#17203A] uppercase">
                  World Mental Health Day 2026
                </span>
              </div>

              <h2 className="font-display font-extrabold tracking-tight leading-[1.08] mb-2 text-4xl sm:text-5xl lg:text-6xl">
                <span className="block text-[#17203A]">School Mental Health</span>
                <span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(100deg, #17203A 0%, #B8871F 85%)' }}
                >
                  Conclave 2026
                </span>
              </h2>

              <span className="block h-px w-16 my-5" style={{ background: 'linear-gradient(90deg, #D6A72C, transparent)' }} />

              <p className="text-[#3d4760] leading-[1.65] font-normal text-base sm:text-lg mb-6 max-w-2xl">
                IAMH, in collaboration with the Department of Psychiatry, Centre of Excellence, IMS-BHU, is
                bringing schools, teachers, and students together for a landmark national summit on building
                mentally healthy and supportive school ecosystems.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-8 text-sm sm:text-base text-[#17203A]">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-[#B8871F]" />
                  <span className="font-semibold">6 October 2026 &bull; 10:30 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B8871F]" />
                  <span className="font-semibold">Banaras Hindu University (BHU), Varanasi</span>
                </div>
              </div>

              <div>
                <Link
                  to="/events/school-mental-health-conclave"
                  className="group inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#17203A] rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-[0_10px_24px_-8px_rgba(180,145,65,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(180,145,65,0.6)]"
                  style={{
                    background: 'linear-gradient(135deg, #F4D77A, #D9AE3D)',
                  }}
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
