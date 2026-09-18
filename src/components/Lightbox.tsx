import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-all focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter Tag */}
      <div className="absolute top-5 left-5 z-50 bg-stone-900/80 text-stone-300 px-3 py-1.5 rounded-full text-xs font-mono border border-stone-800">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-stone-800/70 hover:bg-[#C5A880] text-white transition-all shadow-lg"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-stone-800/70 hover:bg-[#C5A880] text-white transition-all shadow-lg"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[82vh] flex flex-col items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="mt-4 text-center">
          <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30 text-xs px-3 py-0.5 rounded-full uppercase font-medium mb-1">
            {currentItem.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {currentItem.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
