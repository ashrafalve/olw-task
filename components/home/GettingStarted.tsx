import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { steps } from '@/data/steps';

const stepImages = [
  '/assets/Group 39878.png',
  '/assets/Group 39879.png',
  '/assets/Group 39881.png'
];

export const GettingStarted: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Getting Started is Easy"
          subtitle="Join thousands of property owners who have streamlined their operations with our professional assistant services."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center relative">
              {/* Icon */}
              <div className="relative w-64 h-44 mx-auto mb-6 flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm p-4">
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-white border-2 border-pink-600 flex items-center justify-center text-pink-600 font-bold text-lg">
                  {step.number.toString().padStart(2, '0')}
                </div>
                <Image
                  src={stepImages[index]}
                  alt={step.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
