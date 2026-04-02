import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
            {/* Avatar Group */}
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-4">
                <Image
                  src="/assets/images/Ellipse 21.png"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                />
                <Image
                  src="/assets/images/Ellipse 21 (2).png"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                />
                <Image
                  src="/assets/images/8cac66edac7e9cc006e377a554341d67f0d9b385.png"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                />
                <div className="w-12 h-12 rounded-full border-4 border-white bg-pink-500 flex items-center justify-center text-white font-semibold">
                  +5
                </div>
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still have Questions?
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your property management needs. 
              Get in touch with us today for a free consultation.
            </p>
            
            {/* CTA Button */}
            <Button size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
