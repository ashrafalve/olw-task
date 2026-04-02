export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description?: string;
  features: {
    text: string;
    included: boolean;
  }[];
  highlighted?: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'freebie',
    name: 'Freebie',
    price: '$0',
    period: 'month',
    description: 'Ideal for individuals who need quick access to basic features.',
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: false },
      { text: 'Unlimited Sharing', included: false },
      { text: 'Upload graphics & video in up to 4k', included: false },
      { text: 'Unlimited Projects', included: false },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
    buttonText: 'Get Started Now'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$25',
    period: 'month',
    description: 'Ideal for individuals who need advanced features and tools for client work.',
    highlighted: true,
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
    buttonText: 'Get Started Now'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$100',
    period: 'month',
    description: 'Ideal for businesses who need personalized services and security for large teams.',
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: true },
      { text: 'Create teams to collaborate on designs info', included: true },
    ],
    buttonText: 'Get Started Now'
  }
];
