'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFE9EF' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left Column - Text Content (60% width) */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Few Reasons Why you Choose us?
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#F24472] rounded-full flex items-center justify-center mr-4">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L8.5 13.5L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Brilliant Client Service</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#F24472] rounded-full flex items-center justify-center mr-4">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L8.5 13.5L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexibility & Adaptability</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#F24472] rounded-full flex items-center justify-center mr-4">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L8.5 13.5L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700">We make it Personal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#F24472] rounded-full flex items-center justify-center mr-4">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L8.5 13.5L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700">We have experts in our team</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Button
                className="bg-[#F24472] hover:bg-[#e03a63] text-white rounded-lg px-6 py-3"
                size="md"
              >
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
            </div>

            {/* Right Column - Image Composition (40% width) */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <Image
                  src="/assets/images/Group 39928.png"
                  alt="Why Choose Us"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
