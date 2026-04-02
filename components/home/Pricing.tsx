'use client';

import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { pricingPlans } from '@/data/pricing';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Airbnb Assistant pricing"
          subtitle="Choose the perfect plan for your property management needs. All plans include our core features."
        />
        
        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                isYearly
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-8 ${
                plan.highlighted
                  ? 'border-2 border-pink-500 shadow-xl transform scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3">
                      {feature.included ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-green-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.highlighted ? 'bg-pink-500 hover:bg-pink-600' : ''
                }`}
                variant={plan.highlighted ? 'primary' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
