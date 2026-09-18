export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'executive' | 'family' | 'premium';
  shortDescription: string;
  fullDescription: string;
  bedInfo: string;
  guestCapacity: string;
  pricePerNight: string;
  sizeSqFt: number;
  image: string;
  gallery: string[];
  amenities: string[];
  specialFeatures?: string[];
  popularTag?: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedPoints: string[];
  image: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Lobby' | 'Reception' | 'Guest Rooms' | 'Beds' | 'Bathroom' | 'Dining Area' | 'Interiors' | 'Islamabad Surroundings';
  image: string;
  aspectRatio?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}
