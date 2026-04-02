'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { partners } from '@/data/partners';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>
      
      {/* Small Colored Circles inside hero section */}
      <div className="absolute top-24 left-8 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-12 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-12 w-2 h-2 bg-yellow-400 rounded-full opacity-50"></div>
      
      {/* Floating Logos with Rotate Style */}
      <div className="absolute top-16 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transform rotate-12">
        <Image
          src="/assets/logos/airbnb.png"
          alt="Airbnb"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-24 right-4 md:right-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transform -rotate-6">
        <Image
          src="/assets/logos/vrbo.png"
          alt="Vrbo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-1/2 left-4 md:left-1/4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transform rotate-3">
        <Image
          src="/assets/logos/booking.png"
          alt="Booking"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-40 right-4 md:right-1/4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transform -rotate-12">
        <Image
          src="/assets/logos/tripadvisor.png"
          alt="TripAdvisor"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      <Container className="relative z-10">
        <div className="py-20 md:py-32 text-center">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Airbnb Assistants For
            <br />
            Property Management
          </h1>
          
          {/* Supporting Paragraph */}
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your rental property operations with our professional virtual assistants. 
            From guest communications to booking management, we handle it all.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 justify-center mb-12">
            <Button size="md">
              Schedule A Meeting
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="ml-2"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <button className="text-black hover:text-gray-700 text-xs font-medium transition-colors relative group">
              See Pricing
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="py-12 border-t border-gray-100 overflow-hidden">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by leaders in 50+ industries</p>
          <div className="flex animate-slide-left h-24">
            <div className="flex items-center">
              {partners.map((partner, index) => (
                <div key={partner.id} className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity" style={{marginRight: '48px'}}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={45}
                    className="h-12 w-auto object-contain transition-all"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate logos for seamless loop */}
            <div className="flex items-center">
              {partners.map((partner, index) => (
                <div key={`${partner.id}-duplicate`} className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity" style={{marginRight: '48px'}}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={45}
                    className="h-12 w-auto object-contain transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};
