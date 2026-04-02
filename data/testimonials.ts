export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Property Manager',
    avatar: '/assets/images/Ellipse 21.png',
    content: 'This service has transformed how I manage my Airbnb properties. The assistant is incredibly efficient and professional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Host',
    avatar: '/assets/images/Ellipse 21 (2).png',
    content: 'Outstanding support and attention to detail. My bookings have increased significantly since using this service.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Real Estate Investor',
    avatar: '/assets/images/8cac66edac7e9cc006e377a554341d67f0d9b385.png',
    content: 'The best investment I\'ve made for my property management business. Saves me hours every single day.',
    rating: 5
  }
];
