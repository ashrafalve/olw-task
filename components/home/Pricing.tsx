'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { pricingPlans } from '@/data/pricing';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 font-sans">
      <Container>
        <SectionHeading
          title="Airbnb Assistant pricing"
          subtitle="Choose a plan that's right for you"
        />

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-all ${
            !isYearly ? 'text-black' : 'text-gray-400'
          }`}>
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-gray-200 border border-gray-300 rounded-full p-1 transition-all hover:bg-gray-300"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                isYearly
                  ? 'translate-x-8 bg-black'
                  : 'translate-x-0 bg-black'
              }`}
            >
              {isYearly ? (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>

          <div className="flex items-center text-sm font-semibold text-black">
            <span>Yearly</span>
            <Image
                src="/assets/icons/Arrow 2.png"
                alt="Save 25%"
                width={80}
                height={80}
                className="mx-2"
              />
            <span className="mr-1 text-gray-500">Save 25%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const isHighlighted = plan.highlighted;
            return (
              <Card
                key={plan.id}
                className={`relative p-8 border-4 border-[#F24472] shadow-[0_0_30px_rgba(255,255,255,0.05)] ${
                  isHighlighted
                    ? 'bg-[#F24472] text-white'
                    : 'bg-white text-black'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${isHighlighted ? 'text-white' : 'text-black'}`}>
                  {plan.name}
                </h3>

                {plan.description && (
                  <p className={`text-sm mb-4 ${isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                )}

                <div className="mb-6">
                  <span
                    className={`text-5xl md:text-6xl font-extrabold leading-tight ${
                      isHighlighted ? 'text-white' : 'text-black'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-base font-medium ${isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>

                <Button
                  className={`w-full rounded-lg py-4 text-base font-semibold transition mb-8 ${
                    isHighlighted
                      ? 'bg-white text-[#F24472] hover:bg-white/90 border border-white/30'
                      : 'bg-white text-[#F24472] hover:bg-[#FFF0F3] border border-[#F24472]'
                  }`}
                  variant="outline"
                >
                  {plan.buttonText}
                </Button>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                          feature.included
                            ? isHighlighted
                              ? 'bg-white/30 text-white'
                              : 'bg-black/5 text-black'
                            : isHighlighted
                              ? 'bg-white/15 text-white'
                              : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {feature.included ? (
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6L8.5 13.5L5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>
                      <span className={`${isHighlighted ? 'text-white' : 'text-[#666666] text-sm'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
