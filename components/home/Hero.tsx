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
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 bg-pink-500 rounded"></div>
      </div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 bg-green-500 rounded"></div>
      </div>

      <Container className="relative z-10">
        <div className="py-20 md:py-32 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Airbnb Assistants For
            <br />
            Property Management
          </h1>
          
          {/* Supporting Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your rental property operations with our professional virtual assistants. 
            From guest communications to booking management, we handle it all.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg">
              Book a Call
            </Button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="py-12 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by leading platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
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
