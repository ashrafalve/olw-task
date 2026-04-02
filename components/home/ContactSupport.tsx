'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const ContactSupport: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#F9FAFB] rounded-xl p-6 text-center">
          {/* Avatar Group */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <Image
                src="/assets/images/Ellipse 21.png"
                alt="Team member"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-4 border-white z-30"
              />
              <Image
                src="/assets/images/Ellipse 21 (2).png"
                alt="Team member"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-4 border-white -ml-3 z-20"
              />
              <Image
                src="/assets/images/8cac66edac7e9cc006e377a554341d67f0d9b385.png"
                alt="Team member"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-4 border-white -ml-3 z-10"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ color: '#101828' }}>
            Still have Questions?
          </h2>

          {/* Description */}
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#667085' }}>
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>

          {/* CTA Button */}
          <Button
            className="bg-[#F24472] hover:bg-[#e03a63] text-white rounded-lg px-6 py-3"
            size="md"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};
