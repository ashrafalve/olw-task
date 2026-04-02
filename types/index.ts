export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

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

export interface Tool {
  id: string;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}
