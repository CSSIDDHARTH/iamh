import React from 'react';
import { Calendar, Clock, MapPin, Building2, Users2, AlertTriangle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

export const EventInfoStrip: React.FC = () => {
  return (
    <div className="bg-[#FFF8E8] text-[#17203A] border-y border-[#D6A72C]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">

          {/* Date & Day */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#596174] uppercase tracking-wider">Event Date</p>
              <p className="text-base font-bold text-[#17203A] tracking-tight">
                Tuesday, 6 October 2026
              </p>
              <p className="text-sm text-[#B8871F] font-medium">{EVENT_DETAILS.badge}</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#596174] uppercase tracking-wider">Conclave Hours</p>
              <p className="text-base font-bold text-[#17203A] tracking-tight">
                10:30 AM to 4:00 PM
              </p>
              <p className="text-sm text-[#596174]">Full-day Academic Program</p>
            </div>
          </div>

          {/* Venue with clear tentative notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#B8871F]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-[#596174] uppercase tracking-wider">Venue</p>
                <span className="text-xs px-1.5 py-0.2 bg-amber-100 text-[#8a651a] border border-amber-300/80 rounded font-semibold">
                  Tentative
                </span>
              </div>
              <p className="text-sm font-bold text-[#17203A] line-clamp-1">
                Swatantrata Bhawan
              </p>
              <p className="text-sm text-[#596174]">BHU, Varanasi</p>
            </div>
          </div>

          {/* Organizers */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-indigo-700" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#596174] uppercase tracking-wider">Organized &amp; Supported By</p>
              <p className="text-sm font-bold text-[#17203A]">
                IAMH &amp; Dept. of Psychiatry, IMS-BHU
              </p>
              <p className="text-sm text-emerald-700">Centre of Excellence</p>
            </div>
          </div>

        </div>

        {/* Explicit Tentative Disclaimer Sub-banner */}
        <div className="mt-4 pt-3 border-t border-[#D6A72C]/20 flex items-center justify-center gap-2 text-center text-sm text-[#8a651a] font-medium">
          <AlertTriangle className="w-4 h-4 text-[#B8871F] shrink-0" />
          <span>{EVENT_DETAILS.venueStatus}</span>
        </div>
      </div>
    </div>
  );
};
