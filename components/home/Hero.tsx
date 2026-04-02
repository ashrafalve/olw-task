'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { partners } from '@/data/partners';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden border-t-0">
      {/* Gradient Effect at Top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-pink-500/10 via-gray-100/10 to-transparent pointer-events-none"></div>
      
      {/* Big Size Gridline Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-large opacity-30"></div>
      </div>
      
      {/* Grid Boxes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 border-2 border-gray-200/60 rounded-lg opacity-40"></div>
        <div className="absolute top-40 right-[15%] w-24 h-24 border-2 border-gray-200/50 rounded-lg opacity-30"></div>
        <div className="absolute top-1/3 left-[5%] w-20 h-20 border-2 border-blue-100/40 rounded-lg opacity-25"></div>
        <div className="absolute bottom-1/3 right-[8%] w-40 h-40 border-2 border-gray-200/40 rounded-lg opacity-35"></div>
        <div className="absolute bottom-32 left-[12%] w-28 h-28 border-2 border-gray-200/50 rounded-lg opacity-30"></div>
        <div className="absolute top-1/2 right-[20%] w-16 h-16 border-2 border-purple-100/40 rounded-lg opacity-25"></div>
        <div className="absolute top-24 left-[35%] w-12 h-12 border-2 border-green-100/30 rounded-lg opacity-20"></div>
        <div className="absolute bottom-40 right-[25%] w-36 h-36 border-2 border-gray-200/40 rounded-lg opacity-30"></div>
        <div className="absolute top-[60%] left-[3%] w-14 h-14 border-2 border-gray-200/40 rounded-lg opacity-20"></div>
        <div className="absolute top-[30%] right-[3%] w-22 h-22 border-2 border-gray-200/50 rounded-lg opacity-25"></div>
      </div>
      
      {/* Small Colored Circles inside hero section */}
      <div className="absolute top-24 left-8 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-12 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-12 w-2 h-2 bg-yellow-400 rounded-full opacity-50"></div>
      
      {/* More Small Multi-Color Dots */}
      <div className="absolute top-20 left-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-50"></div>
      <div className="absolute top-28 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-36 left-1/2 w-1 h-1 bg-purple-500 rounded-full opacity-50"></div>
      <div className="absolute top-44 right-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-pink-400 rounded-full opacity-50"></div>
      <div className="absolute top-[45%] right-16 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute top-[55%] left-16 w-1 h-1 bg-green-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-24 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="absolute top-[30%] left-[8%] w-1 h-1 bg-pink-300 rounded-full opacity-40"></div>
      <div className="absolute top-[35%] right-[12%] w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute top-[55%] left-[15%] w-1 h-1 bg-green-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-[20%] right-[8%] w-2 h-2 bg-purple-300 rounded-full opacity-50"></div>
      <div className="absolute top-[65%] left-[25%] w-1 h-1 bg-yellow-300 rounded-full opacity-40"></div>
      <div className="absolute top-16 left-[40%] w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30"></div>
      <div className="absolute top-[70%] right-[20%] w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
      
      {/* Floating Logos with Rotate Style */}
      <div className="absolute top-16 left-[10%] md:left-[15%] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transform rotate-12">
        <Image
          src="/assets/logos/airbnb.png"
          alt="Airbnb"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-56 left-[10%] md:left-[15%] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transform rotate-3">
        <Image
          src="/assets/logos/booking.png"
          alt="Booking"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-16 right-[10%] md:right-[15%] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transform -rotate-12">
        <Image
          src="/assets/logos/tripadvisor.png"
          alt="TripAdvisor"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-56 right-[10%] md:right-[15%] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transform -rotate-6">
        <Image
          src="/assets/logos/vrbo.png"
          alt="Vrbo"
          width={96}
          height={96}
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
      </Container>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bg-grid-large {
          background-image: 
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};
