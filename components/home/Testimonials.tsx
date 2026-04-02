'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';

const reviews = [
  {
    id: 1,
    name: 'Jenny Wilson',
    avatar: '/assets/images/Ellipse 21.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Esther Howard',
    avatar: '/assets/images/Ellipse 21 (2).png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Fox',
    avatar: '/assets/images/8cac66edac7e9cc006e377a554341d67f0d9b385.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <h2 className="text-center text-4xl font-bold mb-3">
          Check Our Clients <span className="text-[#F24472]">Review</span>
        </h2>
        <p className="text-center text-[#4A4A4A] text-sm mb-12">
          See what our valued customers have to say about their experience with us
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4 px-4 md:justify-center md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => {
            const isMiddle = index === 1;
            return (
              <div
                key={review.id}
                className={`flex-shrink-0 w-[320px] md:w-[380px] rounded-sm p-6 snap-center ${
                  isMiddle 
                    ? 'bg-white shadow-lg shadow-black/10' 
                    : 'bg-[#F8F9FA]'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-base text-[#000000]">
                      {review.name}
                    </h4>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mt-1">
                      {review.content}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFC107]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};