'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { partners } from '@/data/partners';

export const PartnerLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
      <Container>
        <p className="text-center text-black text-base mb-12">Trusted by leaders in 50+ industries</p>
        <div className="overflow-hidden">
          <div className="flex animate-slide-left" style={{ width: 'fit-content' }}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center justify-center mx-6">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="!h-24 !w-auto !object-contain"
                  style={{ minWidth: '160px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};