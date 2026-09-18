import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A880] text-white flex items-center justify-center font-serif text-xl font-bold">
                N
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                New Islamabad <span className="text-[#C5A880]">Hotel</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Experience modern comfort, understated elegance, and warm Pakistani hospitality in the serene heart of Islamabad’s G-7 Markaz.
            </p>
            <div className="pt-2 flex items-center gap-2 text-stone-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Verified 5-Star Luxury Standards</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C5A880]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/" className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] group-hover:scale-125 transition-transform"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] group-hover:scale-125 transition-transform"></span>
                  <span>Rooms & Suites</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] group-hover:scale-125 transition-transform"></span>
                  <span>Services & Amenities</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] group-hover:scale-125 transition-transform"></span>
                  <span>Contact & Booking</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C5A880]/30 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <a 
                  href={`tel:${HOTEL_INFO.phoneRaw}`} 
                  className="flex items-start gap-3 hover:text-[#C5A880] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="font-medium text-white">{HOTEL_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-snug">{HOTEL_INFO.address}</span>
              </li>
              <li>
                <a 
                  href={`mailto:${HOTEL_INFO.email}`} 
                  className="flex items-start gap-3 hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{HOTEL_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-xs">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Front Desk: 24 Hours / 7 Days a Week</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Map CTA */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C5A880]/30 pb-2 inline-block">
              Hotel Location
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              Prime location in G-7 Markaz, Islamabad. Easy access from Islamabad International Airport, Blue Area, and Faisal Mosque.
            </p>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-[#C5A880] text-stone-200 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-stone-700 transition-all group"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} New Islamabad Hotel. All rights reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted for excellence & comfort in Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
