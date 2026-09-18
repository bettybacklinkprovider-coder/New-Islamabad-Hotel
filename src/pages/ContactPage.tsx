import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Phone, MapPin, Mail, Calendar, Clock, Send, CheckCircle, 
  ArrowUpRight, AlertCircle, MessageSquare, ShieldCheck, Sparkles, User, Users
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { BookingFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get('room') || '';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: preselectedRoom || 'Executive Room',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedRoom) {
      setFormData(prev => ({ ...prev, roomType: preselectedRoom }));
    }
  }, [preselectedRoom]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.phone || !formData.checkIn || !formData.checkOut) {
      setErrorMessage('Please fill in all required fields (Full Name, Phone Number, Check-In, Check-Out).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'NIH-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(randomRef);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      
      {/* Contact Hero */}
      <section className="relative py-24 sm:py-32 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
            alt="New Islamabad Hotel Reception & Contact"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Desk & Direct Reservations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Contact New Islamabad Hotel
          </h1>

          <p className="text-stone-300 text-lg sm:text-2xl max-w-2xl mx-auto font-light">
            We’re here to help make your stay comfortable and convenient.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info + Booking Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left 5 Cols: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Direct Assistance</span>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mt-1">
                Reach Out to Us
              </h2>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Whether you need room rate information, airport pick-up coordination, or group bookings, our team in G-7 Markaz is ready to assist.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#C5A880] flex items-center justify-center shrink-0 border border-stone-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Phone & WhatsApp</span>
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="block font-serif text-xl font-bold text-[#1A1A1A] hover:text-[#C5A880] transition-colors"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-stone-500 text-xs mt-1">Available 24/7 for urgent calls & inquiries</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#C5A880] flex items-center justify-center shrink-0 border border-stone-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Address</span>
                  <p className="font-medium text-stone-900 text-sm leading-snug mt-1">
                    {HOTEL_INFO.address}
                  </p>
                  <a
                    href={HOTEL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C5A880] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#C5A880] flex items-center justify-center shrink-0 border border-stone-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Email Reservations</span>
                  <p className="font-medium text-stone-900 text-sm mt-0.5">{HOTEL_INFO.bookingEmail}</p>
                  <p className="text-stone-500 text-xs mt-1">Check-In: 02:00 PM | Check-Out: 12:00 PM</p>
                </div>
              </div>

            </div>

            {/* Quick Guarantees */}
            <div className="bg-[#F3EFE6] p-6 rounded-2xl border border-stone-300/60 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">Guest Guarantees</span>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>Instant Confirmation & Flexible Modification</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>No Hidden Charges — Transparent Local Billing</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right 7 Cols: Premium Booking / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xl space-y-6">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">Online Inquiry</span>
                <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mt-1">
                  Send Booking Inquiry
                </h2>
                <p className="text-stone-600 text-sm mt-1">
                  Fill out your travel details below. Our reservation manager will contact you promptly to confirm availability and lock in your stay.
                </p>
              </div>

              {submittedRef ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#FAF8F5] p-8 rounded-2xl border-2 border-[#C5A880] text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5A880] text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Inquiry Submitted Successfully!</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your reservation inquiry for <strong>{formData.roomType}</strong> has been logged.
                  </p>

                  <div className="bg-white py-3 px-5 rounded-xl border border-stone-200 inline-block">
                    <span className="text-xs text-stone-500 uppercase font-bold block">Inquiry Reference Number:</span>
                    <span className="font-mono text-xl font-bold text-[#C5A880]">{submittedRef}</span>
                  </div>

                  <p className="text-stone-500 text-xs">
                    Our desk officer will call or email you shortly at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmittedRef(null)}
                      className="bg-[#1A1A1A] hover:bg-[#C5A880] text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Muhammad Ali"
                          className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Phone / Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Family / Group</option>
                      </select>
                    </div>
                  </div>

                  {/* Dates: Check-in & Check-out */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Check-in Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        required
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Check-out Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        required
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>
                  </div>

                  {/* Room Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Preferred Room Category
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                    >
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name} — ({r.pricePerNight} / night)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Special Requests / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention any flight timing, extra bed requirements, or late check-in notes..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C5A880] hover:bg-[#A88B63] text-white font-bold text-sm py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-stone-400 text-xs pt-1">
                    Or call immediately at <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-[#C5A880] underline font-semibold">{HOTEL_INFO.phone}</a>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-20 bg-[#F3EFE6] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">G-7 Markaz Location</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Hotel Map & Directions
            </h2>
            <p className="text-stone-600 text-sm">
              Plot No. 50, Sachal Sarmast Rd, G-7 Markaz, G-7, Islamabad, 44000, Pakistan
            </p>
          </div>

          {/* Interactive Map Display */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-300 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Custom Map Graphic / Embed */}
            <div className="lg:col-span-8 h-96 lg:h-auto relative bg-stone-900 overflow-hidden min-h-[380px]">
              <iframe
                title="New Islamabad Hotel Map"
                src="https://maps.google.com/maps?q=33.7003,73.0617&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full grayscale-[20%] contrast-[1.1]"
              ></iframe>
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                G-7 Markaz • Islamabad
              </div>
            </div>

            {/* Location Details Panel */}
            <div className="lg:col-span-4 p-8 bg-[#1A1A1A] text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase font-bold tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Landmark Proximity</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Convenient Accessibility
                </h3>

                <ul className="space-y-3 text-xs text-stone-300">
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span>Faisal Mosque</span>
                    <span className="text-[#C5A880] font-semibold">10 Mins Drive</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span>Centaurus Mall & F-7</span>
                    <span className="text-[#C5A880] font-semibold">5 Mins Drive</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span>Islamabad Intl Airport</span>
                    <span className="text-[#C5A880] font-semibold">30 Mins Drive</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span>Daman-e-Koh & Margalla Hills</span>
                    <span className="text-[#C5A880] font-semibold">15 Mins Drive</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#C5A880] hover:bg-[#A88B63] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
