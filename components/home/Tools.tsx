import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Card } from '../ui/Card';
import { tools } from '@/data/tools';

export const Tools: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Tools"
          subtitle="Integrate seamlessly with your favorite platforms and tools for a complete property management ecosystem."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-20">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
