import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Card } from '../ui/Card';
import { tools } from '@/data/tools';

export const Tools: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="bg-white pb-8">
          <SectionHeading
            title="Our Tools"
            subtitle="Integrate seamlessly with your favorite platforms and tools for a complete property management ecosystem."
          />
        </div>
      </Container>

      <div className="w-full bg-[#F6F6F6] py-10">
        <Container>
          <div className="rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card
                  key={tool.id}
                  className="p-6 rounded-md border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-20">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={60}
                      height={30}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
