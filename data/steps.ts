export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export const steps: Step[] = [
  {
    id: '1',
    number: '01',
    title: 'Add requirements & sign up today',
    description: 'Create your account and tell us about your property management needs.'
  },
  {
    id: '2',
    number: '02',
    title: 'Connect with your CRM & onboarding team',
    description: 'Integrate your existing tools and work with our team to set up your workflow.'
  },
  {
    id: '3',
    number: '03',
    title: 'Meet your 1:1 assistant next week',
    description: 'Get matched with your dedicated assistant and start managing properties efficiently.'
  }
];
