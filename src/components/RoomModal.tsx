import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Users, Bed, Wifi, Tv, Coffee, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!isOpen || !room) return null;

  const mainPhoto = selectedImage || room.image;

  const handleBookNow = () => {
    onClose();
    navigate(`/contact?room=${encodeURIComponent(room.name)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#FAF8F5] text-[#1A1A1A] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-stone-300 relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          
          {/* Main Photo & Thumbnails */}
          <div className="space-y-3">
            <div className="h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-inner relative bg-stone-900">
              <img
                src={mainPhoto}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A]/80 text-[#C5A880] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                {room.category}
              </div>
            </div>

            {room.gallery && room.gallery.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {room.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      mainPhoto === imgUrl ? 'border-[#C5A880] ring-2 ring-[#C5A880]/50' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`${room.name} preview ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Details Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs uppercase font-semibold text-[#C5A880] tracking-widest">New Islamabad Hotel</span>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">{room.name}</h2>
              <div className="flex items-center gap-4 mt-2 text-sm text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-[#C5A880]" />
                  <span>{room.bedInfo}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C5A880]" />
                  <span>{room.guestCapacity}</span>
                </span>
                <span>•</span>
                <span>{room.sizeSqFt} sq ft</span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-stone-500 uppercase tracking-wider">Starting From</span>
              <div className="font-serif text-2xl font-bold text-[#C5A880]">{room.pricePerNight}</div>
              <span className="text-xs text-stone-500">per night (taxes incl.)</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">About This Accommodation</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{room.fullDescription}</p>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Room Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700 bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/60">
                  <Check className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call / Book Bar */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-stone-700 hover:text-[#C5A880] font-semibold text-sm py-2.5 px-4 rounded-xl border border-stone-300 hover:border-[#C5A880] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call Reception: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={handleBookNow}
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#A88B63] text-white font-semibold text-sm px-8 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Book This Room</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
