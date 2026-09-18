import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bed, Users, Check, Phone, Calendar, ArrowRight, ShieldCheck, Sparkles, Maximize } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { RoomModal } from '../components/RoomModal';
import { Room } from '../types';

export const RoomsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleBookRoom = (roomName: string) => {
    navigate(`/contact?room=${encodeURIComponent(roomName)}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      
      {/* Rooms Hero */}
      <section className="relative py-24 sm:py-32 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
            alt="New Islamabad Hotel Rooms & Suites"
            className="w-full h-full object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Accommodations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Rooms Designed for Comfort
          </h1>

          <p className="text-stone-300 text-lg sm:text-2xl max-w-2xl mx-auto font-light">
            Relax, refresh, and enjoy a comfortable stay in Islamabad.
          </p>
        </div>
      </section>

      {/* Room Collection Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {ROOMS_DATA.map((room, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-7 relative h-80 sm:h-96 lg:h-auto bg-stone-900 ${isEven ? '' : 'lg:order-2'}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {room.popularTag && (
                  <div className="absolute top-4 left-4 bg-[#C5A880] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {room.popularTag}
                  </div>
                )}

                <div className="absolute bottom-4 right-4 bg-black/80 text-[#C5A880] text-sm font-serif font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  {room.pricePerNight} / night
                </div>
              </div>

              {/* Info Side */}
              <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#C5A880] tracking-widest">
                      New Islamabad Hotel
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mt-1">
                      {room.name}
                    </h2>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {room.fullDescription}
                  </p>

                  {/* Room Specs Badges */}
                  <div className="flex flex-wrap items-center gap-4 py-2 border-y border-stone-100 text-xs text-stone-700">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Bed className="w-4 h-4 text-[#C5A880]" />
                      <span>{room.bedInfo}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-[#C5A880]" />
                      <span>{room.guestCapacity}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Maximize className="w-4 h-4 text-[#C5A880]" />
                      <span>{room.sizeSqFt} sq ft</span>
                    </div>
                  </div>

                  {/* Special Features if Family/Premium */}
                  {room.specialFeatures && room.specialFeatures.length > 0 && (
                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/60 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A880]">Highlights:</span>
                      <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                        {room.specialFeatures.map((feat, fIdx) => (
                          <span key={fIdx} className="bg-white px-2.5 py-0.5 rounded-md border border-stone-200 font-medium">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Amenities */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-800">Key Amenities:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {room.amenities.map((amenity, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleBookRoom(room.name)}
                    className="w-full sm:w-auto flex-1 bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Room</span>
                  </button>

                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>Inspect Details</span>
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}

      </section>

      {/* Final Reserve Your Room CTA */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Reserve Your Room Today
          </h2>
          <p className="text-stone-300 text-base max-w-xl mx-auto">
            Our reservation staff is standing by 24/7 to confirm your stay at New Islamabad Hotel in G-7 Markaz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#A88B63] text-white font-bold text-xs px-8 py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Room Now</span>
            </Link>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs px-8 py-4 rounded-xl border border-stone-700 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </section>

      {/* Room Inspection Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />

    </div>
  );
};
