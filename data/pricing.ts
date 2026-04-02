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
    features: [
      { text: 'Basic property management', included: true },
      { text: 'Up to 2 properties', included: true },
      { text: 'Email support', included: true },
      { text: 'Priority support', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'API access', included: false },
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$25',
    period: 'month',
    highlighted: true,
    features: [
      { text: 'Advanced property management', included: true },
      { text: 'Up to 10 properties', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'Automated messaging', included: true },
      { text: 'Basic API access', included: false },
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$100',
    period: 'month',
    features: [
      { text: 'Complete property management', included: true },
      { text: 'Unlimited properties', included: true },
      { text: '24/7 phone & priority support', included: true },
      { text: 'Advanced analytics & insights', included: true },
      { text: 'Automated messaging & workflows', included: true },
      { text: 'Full API access & integrations', included: true },
    ],
    buttonText: 'Contact Sales'
  }
];
