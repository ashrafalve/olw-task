import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { services } from '@/data/services';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Service"
          subtitle="Comprehensive property management solutions designed to maximize your rental income and minimize your workload."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="p-8 hover:shadow-lg transition-shadow duration-300 border-pink-100">
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Read More Button */}
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
