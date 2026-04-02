import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { faqs } from '@/data/faq';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Frequently asked questions"
          subtitle="Find answers to common questions about our Airbnb assistant services."
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} defaultOpen="1" />
        </div>
      </Container>
    </section>
  );
};
