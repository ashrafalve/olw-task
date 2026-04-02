export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Manage Property Listings',
    description: 'Optimize your property listings with professional descriptions, photos, and pricing strategies.',
    icon: '/assets/icons/manageproperty.png'
  },
  {
    id: '2',
    title: 'Manage Customer Bookings',
    description: 'Handle all booking inquiries, confirmations, and calendar management seamlessly.',
    icon: '/assets/icons/managebooking.png'
  },
  {
    id: '3',
    title: 'Schedule House Cleaning',
    description: 'Coordinate cleaning schedules between guests to maintain property standards.',
    icon: '/assets/icons/scheduleclean.png'
  },
  {
    id: '4',
    title: 'Monitor Guest Reviews',
    description: 'Track and respond to guest reviews to maintain your property reputation.',
    icon: '/assets/icons/guestreviews.png'
  },
  {
    id: '5',
    title: 'Track & Report Expenses',
    description: 'Keep detailed records of all property-related expenses and generate reports.',
    icon: '/assets/icons/trackreport.png'
  },
  {
    id: '6',
    title: 'Guest Inquiry & Support',
    description: 'Provide 24/7 guest support and handle all inquiries professionally.',
    icon: '/assets/icons/guestinquery.png'
  }
];
