import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Services & Amenities', path: '/services' },
    { name: 'Contact & Booking', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#1A1A1A] text-white text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-stone-300">
            <a 
              href={`tel:${HOTEL_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <div className="hidden sm:flex items-center gap-1.5 truncate text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span className="truncate">G-7 Markaz, Islamabad, Pakistan</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#C5A880] font-medium tracking-wide">5-Star Luxury Experience</span>
            <a 
              href={HOTEL_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white underline text-[11px]"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-header py-3 shadow-md border-b border-stone-200/80' 
            : 'bg-[#FAF8F5]/95 py-5 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] text-[#C5A880] flex items-center justify-center font-serif text-xl font-bold border border-[#C5A880]/30 shadow-sm group-hover:bg-[#C5A880] group-hover:text-white transition-all">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                New Islamabad <span className="text-[#C5A880]">Hotel</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                G-7 Markaz • Islamabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#C5A880] font-semibold' 
                      : 'text-stone-700 hover:text-[#1A1A1A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2 tracking-wide uppercase"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-[#1A1A1A] hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#1A1A1A]/95 backdrop-blur-xl text-white transition-opacity">
          <div className="flex items-center justify-between p-5 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C5A880] text-white flex items-center justify-center font-serif text-lg font-bold">
                N
              </div>
              <span className="font-serif text-lg font-bold text-white">
                New Islamabad Hotel
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-stone-400 hover:text-white rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xl font-serif tracking-wide py-2 border-b border-stone-800 flex items-center justify-between ${
                      isActive ? 'text-[#C5A880] font-bold' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-stone-800 space-y-4">
              <div className="text-stone-400 text-xs">
                <p className="font-semibold text-stone-300 mb-1">Direct Contact & Reservations:</p>
                <p>{HOTEL_INFO.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-stone-700"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call Now</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
