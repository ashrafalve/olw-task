export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all new users. You can explore all features without any commitment.'
  },
  {
    id: '2',
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    id: '3',
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your subscription at any time. No long-term commitments or cancellation fees.'
  },
  {
    id: '4',
    question: 'Can other info be added on invoice?',
    answer: 'Yes, you can add custom information to your invoices including tax details, company information, and custom notes.'
  },
  {
    id: '5',
    question: 'How does billing work?',
    answer: 'We bill monthly or annually based on your chosen plan. Annual plans come with a 20% discount.'
  },
  {
    id: '6',
    question: 'How do I change my account email?',
    answer: 'You can change your account email from your profile settings. Go to Account > Personal Information > Email.'
  }
];
