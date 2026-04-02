import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Expert Property Management',
      description: 'Professional assistants with years of experience in Airbnb and short-term rental management.'
    },
    {
      title: '24/7 Guest Support',
      description: 'Round-the-clock assistance for your guests, ensuring excellent reviews and repeat bookings.'
    },
    {
      title: 'Cost-Effective Solution',
      description: 'Save up to 70% compared to hiring full-time property managers while getting better results.'
    },
    {
      title: 'Seamless Integration',
      description: 'Works with all major booking platforms and property management software.'
    },
    {
      title: 'Customized Services',
      description: 'Tailored solutions to match your specific property portfolio and business needs.'
    },
    {
      title: 'Proven Track Record',
      description: 'Trusted by hundreds of property owners with a 98% client satisfaction rate.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="bg-pink-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Few Reasons Why you Choose us?
              </h2>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-pink-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/smiling-male-office-worker 1.png"
                  alt="Professional Assistant"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Dashboard</p>
              </div>
              
              <div className="absolute bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="w-16 h-16 bg-green-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
