import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { steps } from '@/data/steps';

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
              {/* Step Number */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">
                    {step.number}
                  </span>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pink-200 -translate-y-1/2"></div>
                )}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
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
