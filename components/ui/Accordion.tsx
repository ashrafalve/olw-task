'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  className, 
  defaultOpen 
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    defaultOpen ? new Set([defaultOpen]) : new Set()
  );

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <span
              className={cn(
                'transform transition-transform duration-200',
                openItems.has(item.id) ? 'rotate-45' : ''
              )}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-500"
              >
                <path
                  d="M10 5V15M5 10H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-200',
              openItems.has(item.id) ? 'max-h-96' : 'max-h-0'
            )}
          >
            <div className="px-6 pb-4 text-gray-600">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
