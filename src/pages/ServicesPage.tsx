import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Clock, UtensilsCrossed, Sparkles, Wifi, Car, Coffee, 
  Headphones, Briefcase, Calendar, CheckCircle2, ShieldCheck, Heart, ArrowRight
} from 'lucide-react';
import { SERVICES_PAGE_DATA, GUEST_EXPERIENCE_PILLARS, HOTEL_INFO } from '../data/hotelData';

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-[#C5A880]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#C5A880]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#C5A880]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#C5A880]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#C5A880]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#C5A880]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C5A880]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      
      {/* Services Hero */}
      <section className="relative py-24 sm:py-32 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="New Islamabad Hotel Services & Hospitality"
            className="w-full h-full object-cover object-center opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Amenities & Services</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hospitality Designed Around You
          </h1>

          <p className="text-stone-300 text-lg sm:text-2xl max-w-2xl mx-auto font-light">
            Every detail at New Islamabad Hotel is crafted to deliver comfort, convenience, and attentive service.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Our Key Services</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
            Comprehensive Hotel Facilities
          </h2>
          <p className="text-stone-600 text-base">
            From 24-hour reception to authentic dining and business assistance, we cater to every aspect of your stay in Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_PAGE_DATA.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#C5A880] shadow-sm">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-stone-100">
                    {service.detailedPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-[11px] font-semibold text-[#C5A880] uppercase tracking-wider block">
                  Included for all guests
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guest Experience Section */}
      <section className="py-20 bg-[#F3EFE6] border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">The Hotel Standard</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              The Guest Experience
            </h2>
            <p className="text-stone-600 text-base">
              At New Islamabad Hotel, our primary mandate is providing a welcoming environment where guests feel cared for at every turn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUEST_EXPERIENCE_PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Experience Our Hospitality</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Plan Your Stay in Islamabad
          </h2>
          <p className="text-stone-300 text-base max-w-xl mx-auto">
            Book directly online or get in touch with our front desk to customize your room preferences and special arrangements.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold px-8 py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
