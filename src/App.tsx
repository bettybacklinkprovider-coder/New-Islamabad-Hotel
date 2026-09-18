import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from './data/hotelData';

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#C5A880] selection:text-white">
        
        {/* Sticky Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route back to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating Mobile Quick Call / Book Bar */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-[#1A1A1A]/95 text-white p-3 rounded-2xl shadow-2xl border border-stone-800 backdrop-blur-md flex items-center justify-between gap-3">
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="flex-1 bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 border border-stone-700"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>{HOTEL_INFO.phone}</span>
          </a>
          <a
            href="/contact"
            className="flex-1 bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
