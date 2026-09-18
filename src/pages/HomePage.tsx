import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Phone, Calendar, ArrowRight, Wifi, Clock, UtensilsCrossed, 
  Sparkles, Car, Coffee, Headphones, Briefcase, MapPin, CheckCircle2,
  Maximize2, Eye
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, HOME_AMENITIES, GALLERY_IMAGES } from '../data/hotelData';
import { Lightbox } from '../components/Lightbox';
import { RoomModal } from '../components/RoomModal';
import { Room } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Gallery Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Selected Room Modal State
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Helper map for lucide icons in Section 4
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#C5A880]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#C5A880]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#C5A880]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#C5A880]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#C5A880]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#C5A880]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C5A880]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  const openGalleryAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      
      {/* ========================================================================= */}
      {/* SECTION 1 — LUXURY HERO                                                  */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
        {/* Background Image with High Quality & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/24/86/1c/24861c1736052302efa2d695d4ca2989.jpg"
            alt="New Islamabad Hotel Cinematic Exterior & Lobby"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[10000ms]"
            referrerPolicy="no-referrer"
          />
          {/* Sophisticated Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 my-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Top Star Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>5-Star Luxury Experience in G-7 Markaz</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-[#C5A880]">New Islamabad Hotel</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
              Experience Comfort, Elegance & Warm Pakistani Hospitality in Islamabad
            </p>

            {/* Direct Phone Display */}
            <div className="pt-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-stone-200 hover:text-[#C5A880] text-sm sm:text-base font-semibold transition-colors bg-black/40 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Direct Line: {HOTEL_INFO.phone}</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#A88B63] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 text-sm tracking-wide uppercase group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/rooms"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-sm tracking-wide uppercase"
              >
                <Eye className="w-4 h-4 text-[#C5A880]" />
                <span>Explore Rooms</span>
              </Link>
            </div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-stone-400 text-xs flex flex-col items-center gap-2 animate-bounce hidden sm:flex">
          <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-stone-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C5A880] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — ABOUT THE HOTEL                                               */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8F5] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Professional Hotel Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-[#C5A880]/15 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
                About New Islamabad Hotel
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
                Your Comfortable Stay in Islamabad
              </h2>

              <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                Nestled prominently at Plot No. 50, Sachal Sarmast Road in G-7 Markaz, <strong>New Islamabad Hotel</strong> offers guests an exceptional blend of modern boutique refinement, soothing quietude, and classic Pakistani hospitality.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Whether you are visiting the capital city for business conferences, diplomatic engagements, or family holidays, our hotel provides an unmatched location near major commercial hubs, diplomatic enclaves, and historic sights such as the iconic Faisal Mosque and the lush Margalla Hills.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <span className="text-sm font-medium text-stone-800">Prime G-7 Location</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <span className="text-sm font-medium text-stone-800">24/7 Guest Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <span className="text-sm font-medium text-stone-800">High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <span className="text-sm font-medium text-stone-800">Secure Parking</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#C5A880] text-white text-xs font-semibold px-6 py-3 rounded-lg transition-all shadow-md group uppercase tracking-wider"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Large Premium Hotel/Lobby/Interior Photograph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom-container border-4 border-white bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                  alt="New Islamabad Hotel Interior Lounge & Lobby"
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <span className="text-[#C5A880] text-xs uppercase tracking-widest font-bold">Lobby & Reception</span>
                  <h3 className="font-serif text-lg font-semibold text-white">Welcoming ambiance tailored for absolute guest peace</h3>
                </div>
              </div>

              {/* Decorative Accent Box */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#C5A880] text-white p-5 rounded-xl shadow-xl max-w-[200px] border border-white/20">
                <div className="font-serif text-3xl font-bold">100%</div>
                <div className="text-xs font-medium uppercase tracking-wider">Guest Satisfaction & Comfort Focus</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — FEATURED ROOMS                                                */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F3EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Our Accommodations</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              Stay in Comfort & Style
            </h2>
            <p className="text-stone-600 text-base">
              Choose from our carefully appointed rooms designed to provide an uncompromised night of relaxation in Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROOMS_DATA.map((room) => (
              <motion.div
                key={room.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-stone-200/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden bg-stone-900">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/75 text-[#C5A880] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {room.pricePerNight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#C5A880] tracking-wider">{room.bedInfo}</span>
                      <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors">
                        {room.name}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {room.shortDescription}
                    </p>

                    {/* Amenities list */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      {room.amenities.slice(0, 3).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Room Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full bg-stone-100 hover:bg-[#C5A880] text-[#1A1A1A] hover:text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>View Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-md uppercase tracking-wider"
            >
              <span>Explore All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — PREMIUM AMENITIES                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Guest Conveniences</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              Everything You Need for a Comfortable Stay
            </h2>
            <p className="text-stone-600 text-base">
              Thoughtfully curated guest services and features to ensure your experience in Islamabad is frictionless and refreshing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_AMENITIES.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col"
              >
                {item.image ? (
                  <div className="h-40 relative w-full overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#C5A880] flex items-center justify-center shadow-md">
                      {getAmenityIcon(item.icon)}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] group-hover:bg-[#C5A880] text-[#C5A880] group-hover:text-white flex items-center justify-center border border-stone-200/60 transition-colors">
                      {getAmenityIcon(item.icon)}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-1.5 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-stone-800 hover:text-[#C5A880] font-semibold text-xs tracking-wider uppercase underline underline-offset-4"
            >
              <span>View All Services & Amenities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — HOTEL GALLERY                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Photo Gallery</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Explore New Islamabad Hotel
            </h2>
            <p className="text-stone-400 text-base">
              Take a visual tour through our hotel exterior, reception, rooms, beds, bathrooms, dining lounge, and the captivating surroundings of Islamabad.
            </p>
          </div>

          {/* Masonry / Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openGalleryAt(index)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group h-64 sm:h-72 border border-stone-800 bg-stone-900 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://i.pinimg.com/736x/90/2f/5b/902f5ba0bd1ffc5f0f9998e0f1887a34.jpg';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-[#C5A880] text-[11px] font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-[#C5A880] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 text-xs text-stone-400">
            <span>Click any photograph to launch full-screen high-resolution gallery viewer</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — FINAL BOOKING CTA                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8F5] relative overflow-hidden border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Your Trip to Islamabad?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Your Comfortable Stay Starts Here
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Plan your visit to Islamabad and experience the comfort, sophistication, and warm Pakistani hospitality of New Islamabad Hotel.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-md max-w-3xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-stone-700">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#C5A880] font-bold text-base transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C5A880]" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline text-stone-300">•</span>
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-left">{HOTEL_INFO.address}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </Link>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-stone-800 text-white text-xs font-bold px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Room Detail Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />

    </div>
  );
};
