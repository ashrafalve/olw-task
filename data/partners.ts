export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: '1', name: 'Airbnb', logo: '/assets/logos/airbnb.png' },
  { id: '2', name: 'Booking.com', logo: '/assets/logos/booking.png' },
  { id: '3', name: 'Vrbo', logo: '/assets/logos/vrbo.png' },
  { id: '4', name: 'Expedia', logo: '/assets/logos/expedia.png' },
  { id: '5', name: 'TripAdvisor', logo: '/assets/logos/tripadvisor.png' },
  { id: '6', name: 'Guesty', logo: '/assets/logos/guesty.png' },
];
