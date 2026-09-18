import { Room, Amenity, Service, GalleryItem } from '../types';

export const HOTEL_INFO = {
  name: 'New Islamabad Hotel',
  tagline: 'Experience Comfort, Elegance & Warm Pakistani Hospitality in Islamabad',
  phone: '+92 332 5261359',
  phoneRaw: '+923325261359',
  address: 'Plot No. 50, Sachal Sarmast Rd, G-7 Markaz, G-7, Islamabad, 44000, Pakistan',
  email: 'info@newislamabadhotel.com',
  bookingEmail: 'reservations@newislamabadhotel.com',
  locationCoordinates: {
    lat: 33.7003,
    lng: 73.0617
  },
  googleMapsUrl: 'https://maps.google.com/?q=Plot+No.+50,+Sachal+Sarmast+Rd,+G-7+Markaz,+G-7,+Islamabad'
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'deluxe',
    shortDescription: 'Comfortable accommodation with a refined interior and essential guest amenities.',
    fullDescription: 'Our Deluxe Room offers an ideal sanctuary of modern comfort with elegant furniture, plush bedding, and serene views. Perfectly appointed for solo travelers or couples seeking a relaxing stay in the heart of Islamabad.',
    bedInfo: '1 King Bed or 2 Twin Beds',
    guestCapacity: '2 Adults + 1 Child',
    pricePerNight: 'PKR 14,500',
    sizeSqFt: 320,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'High-Speed Free Wi-Fi',
      '32" Smart LED TV',
      'Individual Air Conditioning',
      'En-Suite Bathroom with Hot Shower',
      'In-Room Tea & Coffee Maker',
      'Work Desk with Task Lighting',
      'Daily Housekeeping Service'
    ]
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    category: 'executive',
    shortDescription: 'A spacious and elegant option suitable for business and leisure travelers.',
    fullDescription: 'Tailored for corporate travelers and guests desiring elevated luxury, the Executive Room features an expansive floor plan with an ergonomic workstation, cozy seating corner, premium linen, and complimentary welcome refreshments.',
    bedInfo: '1 Super King Bed',
    guestCapacity: '2 Adults',
    pricePerNight: 'PKR 19,500',
    sizeSqFt: 420,
    popularTag: 'Most Popular for Business',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'Ultra-Fast Wi-Fi & Workstation',
      '43" 4K Smart TV',
      'Mini Bar & Complimentary Water',
      'Executive Sitting Lounge Corner',
      'Marble Bathroom with Rain Shower',
      'In-Room Electronic Safe',
      'Express Laundry Service'
    ]
  },
  {
    id: 'family-room',
    name: 'Family Room',
    category: 'family',
    shortDescription: 'Designed to provide comfortable accommodation for families and groups.',
    fullDescription: 'Generously proportioned to ensure every family member relaxes in comfort. Equipped with multiple beds, connected lounge space, extra storage wardrobes, and child-safe amenities right in G-7 Markaz.',
    bedInfo: '2 King Beds or 1 King + 2 Single Beds',
    guestCapacity: '4 - 5 Guests',
    pricePerNight: 'PKR 24,000',
    sizeSqFt: 580,
    specialFeatures: ['Kid-Friendly Amenities', 'Extra Spacious', 'Connected Seating Area'],
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'Dual Bed Setup for Families',
      '50" Smart TV with Family Channels',
      'Spacious Wardrobe & Luggage Rack',
      '24/7 Room Service & Dining On Call',
      'Large Family Bathroom with Amenities',
      'Complimentary Extra Bedding upon Request'
    ]
  },
  {
    id: 'premium-room',
    name: 'Premium Room',
    category: 'premium',
    shortDescription: 'A stylish room experience with a more luxurious atmosphere.',
    fullDescription: 'Our flagship room offer crafted with bespoke wood finishes, ambient warm lighting, panoramic view windows facing Islamabad green avenues, luxurious vanity counter, and fine thread-count Egyptian cotton linens.',
    bedInfo: '1 Master King Bed',
    guestCapacity: '2 - 3 Adults',
    pricePerNight: 'PKR 28,000',
    sizeSqFt: 500,
    popularTag: 'Luxury Flagship Suite',
    specialFeatures: ['City & Margalla Views', 'Bespoke Interior', 'Luxury Toiletries Set'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'Panoramic City & Margalla View Window',
      'Bespoke Wood Design & Ambient Lighting',
      'Nespresso Coffee Machine',
      'Luxury Marble Bathroom & Plush Bathrobes',
      'VIP Welcome Amenities Tray',
      'Priority Reception Assistance'
    ]
  }
];

export const HOME_AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    title: 'Free Wi-Fi',
    description: 'High-speed fiber internet coverage across all guest rooms, lobby, and dining areas.',
    icon: 'Wifi',
    image: 'https://i.pinimg.com/736x/f7/d1/d9/f7d1d95071175d731be6877770c0dd71.jpg'
  },
  {
    id: 'reception',
    title: '24/7 Reception',
    description: 'Round-the-clock front desk team dedicated to check-in, concierge, and guest care.',
    icon: 'Clock',
    image: 'https://i.pinimg.com/736x/49/80/a4/4980a44a4dabf9baa2344784ac5b0483.jpg'
  },
  {
    id: 'room-service',
    title: 'Room Service',
    description: 'Delicious local Pakistani specialties and international cuisine delivered right to your bed.',
    icon: 'UtensilsCrossed',
    image: 'https://i.pinimg.com/736x/02/a1/0c/02a10c401ce979942ad37124dc4a70c1.jpg'
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    description: 'Daily thorough cleaning, fresh linen replenishment, and immaculate hygiene protocols.',
    icon: 'Sparkles',
    image: 'https://i.pinimg.com/736x/28/6c/66/286c668031577942d9fc814460078e92.jpg'
  },
  {
    id: 'parking',
    title: 'Parking',
    description: 'Secure on-site parking space with 24/7 security surveillance for hotel guests.',
    icon: 'Car',
    image: 'https://i.pinimg.com/736x/2b/f9/b3/2bf9b3d52c0bd1ae7bd6eb1d28a42e32.jpg'
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Freshly prepared breakfast, authentic Pakistani dishes, tea lounge, and evening dining.',
    icon: 'Coffee',
    image: 'https://i.pinimg.com/1200x/d6/a2/24/d6a224951a9cb49691183976cf20695c.jpg'
  },
  {
    id: 'assistance',
    title: 'Guest Assistance',
    description: 'Travel advice, local taxi bookings, luggage storage, and personalized guest support.',
    icon: 'Headphones',
    image: 'https://i.pinimg.com/736x/f5/c6/66/f5c6669110b5acf18a4dc31513663e9c.jpg'
  },
  {
    id: 'business',
    title: 'Business Support',
    description: 'Quiet work corners, printing/scanning facility, and assistance for corporate visitors.',
    icon: 'Briefcase',
    image: 'https://i.pinimg.com/1200x/d8/ca/14/d8ca14f91517779d34207f3a46d06bd5.jpg'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-ext-1',
    title: 'Modern Hotel Exterior',
    category: 'Exterior',
    image: 'https://i.pinimg.com/736x/24/86/1c/24861c1736052302efa2d695d4ca2989.jpg'
  },
  {
    id: 'g-lobby-1',
    title: 'Elegant Hotel Lobby',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-rec-1',
    title: '24/7 Guest Reception',
    category: 'Reception',
    image: 'https://i.pinimg.com/736x/49/80/a4/4980a44a4dabf9baa2344784ac5b0483.jpg'
  },
  {
    id: 'g-room-1',
    title: 'Executive Suite Interior',
    category: 'Guest Rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-bed-1',
    title: 'Plush King Bed Setup',
    category: 'Beds',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-bath-1',
    title: 'Marble Bathroom & Rain Shower',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-dine-1',
    title: 'Hotel Dining Lounge',
    category: 'Dining Area',
    image: 'https://i.pinimg.com/1200x/d6/a2/24/d6a224951a9cb49691183976cf20695c.jpg'
  },
  {
    id: 'g-int-1',
    title: 'Lounge Interior Details',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-isb-1',
    title: 'Islamabad Surroundings & Faisal Mosque View',
    category: 'Islamabad Surroundings',
    image: 'https://i.pinimg.com/736x/90/2f/5b/902f5ba0bd1ffc5f0f9998e0f1887a34.jpg'
  }
];

export const SERVICES_PAGE_DATA: Service[] = [
  {
    id: 's-desk',
    title: '24/7 Front Desk',
    description: 'Our reception team is ready at any hour of the day or night to greet you, assist with late check-ins, or resolve any inquiry.',
    detailedPoints: [
      'Express Check-In & Check-Out',
      'Multilingual Staff Assistance',
      'Luggage Storage & Safe Keeping',
      'Currency & Local Transport Concierge'
    ],
    image: 'https://i.pinimg.com/736x/49/80/a4/4980a44a4dabf9baa2344784ac5b0483.jpg',
    icon: 'Clock'
  },
  {
    id: 's-roomservice',
    title: 'Room Service',
    description: 'Enjoy freshly prepared traditional Pakistani specialties, hearty breakfasts, and international dishes served directly to your room.',
    detailedPoints: [
      'All-Day In-Room Dining Menu',
      'Traditional Pakistani Breakfast & Chai',
      'Late Night Meal Options',
      'Hygienic Temperature-Controlled Serving'
    ],
    image: 'https://i.pinimg.com/736x/02/a1/0c/02a10c401ce979942ad37124dc4a70c1.jpg',
    icon: 'UtensilsCrossed'
  },
  {
    id: 's-housekeeping',
    title: 'Daily Housekeeping',
    description: 'Immaculate cleanliness standards maintained daily with fresh crisp linens, sanitization, and meticulous attention to detail.',
    detailedPoints: [
      'Daily Linen & Towel Replenishment',
      'Eco-Friendly Room Sanitization',
      'Turndown Service Upon Request',
      'Laundry & Pressing Services'
    ],
    image: 'https://i.pinimg.com/736x/28/6c/66/286c668031577942d9fc814460078e92.jpg',
    icon: 'Sparkles'
  },
  {
    id: 's-wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Stay connected seamlessly with high-speed fiber internet designed for streaming, video conferencing, and browsing across the property.',
    detailedPoints: [
      'Dedicated Optical Fiber Line',
      'High Bandwidth for Video Calls',
      'Unrestricted Multi-Device Connectivity',
      'Secure Protected Guest Network'
    ],
    image: 'https://i.pinimg.com/736x/f7/d1/d9/f7d1d95071175d731be6877770c0dd71.jpg',
    icon: 'Wifi'
  },
  {
    id: 's-parking',
    title: 'On-Site Secure Parking',
    description: 'Convenient and safe parking premises located right at Plot No. 50, G-7 Markaz, monitored around the clock.',
    detailedPoints: [
      'Complimentary Guest Vehicle Parking',
      '24/7 Security CCTV & Guards',
      'Easy Drive-In Access from Sachal Sarmast Rd',
      'Driver Assistance Available'
    ],
    image: 'https://i.pinimg.com/736x/2b/f9/b3/2bf9b3d52c0bd1ae7bd6eb1d28a42e32.jpg',
    icon: 'Car'
  },
  {
    id: 's-dining',
    title: 'Hotel Dining Lounge',
    description: 'Start your day with a rich breakfast buffet and sample authentic Pakistani delicacies cooked with premium local spices and ingredients.',
    detailedPoints: [
      'Daily Breakfast Buffet',
      'Authentic Pakistani Karahi & Biryani Options',
      'Fresh Juices & Specialty Teas',
      'Cozy Ambient Dining Atmosphere'
    ],
    image: 'https://i.pinimg.com/1200x/d6/a2/24/d6a224951a9cb49691183976cf20695c.jpg',
    icon: 'Coffee'
  },
  {
    id: 's-assistance',
    title: 'Guest Assistance & Tour Guide',
    description: 'Discover the beauty of Islamabad with our friendly recommendations for visiting Faisal Mosque, Daman-e-Koh, and Lok Virsa Heritage Museum.',
    detailedPoints: [
      'Airport Pick-up & Drop Coordination',
      'Islamabad Sightseeing Assistance',
      'Car Rental & Taxi Arrangements',
      'Local Shopping & Dining Guidance in G-7 / F-7'
    ],
    image: 'https://i.pinimg.com/736x/f5/c6/66/f5c6669110b5acf18a4dc31513663e9c.jpg',
    icon: 'Headphones'
  },
  {
    id: 's-business',
    title: 'Business Services',
    description: 'Comprehensive amenities for executives and corporate visitors to ensure productive work sessions during their stay in Islamabad.',
    detailedPoints: [
      'High-Speed Printing & Document Scanning',
      'Quiet Working Corners & Desk Setup',
      'Early Morning Wake-Up Calls',
      'Invoice & Corporate Billing Facility'
    ],
    image: 'https://i.pinimg.com/1200x/d8/ca/14/d8ca14f91517779d34207f3a46d06bd5.jpg',
    icon: 'Briefcase'
  }
];

export const GUEST_EXPERIENCE_PILLARS = [
  {
    title: 'Uncompromised Comfort',
    description: 'Orthopedic mattresses, quiet air conditioning, and soft Egyptian cotton linens engineered for restful sleep after a day of travel or meetings.'
  },
  {
    title: 'Pristine Cleanliness',
    description: 'Rigorous hotel sanitation protocols and daily deep housekeeping to guarantee a spotless and hygienic sanctuary in every room.'
  },
  {
    title: 'Prime G-7 Location',
    description: 'Situated at Plot No. 50, Sachal Sarmast Rd in G-7 Markaz — minutes away from government centers, commercial hubs, and Islamabad tourist landmarks.'
  },
  {
    title: 'Warm Pakistani Hospitality',
    description: 'Our courteous staff greets every guest with genuine warmth, honoring Pakistan’s renowned tradition of generous hospitality.'
  },
  {
    title: 'Relaxation & Tranquility',
    description: 'A peaceful indoor atmosphere designed to help you recharge, whether traveling solo, with family, or for corporate affairs.'
  },
  {
    title: 'Seamless Business & Leisure',
    description: 'Balanced amenities catering equally to business executives requiring fast Wi-Fi and families seeking commodious living spaces.'
  }
];
