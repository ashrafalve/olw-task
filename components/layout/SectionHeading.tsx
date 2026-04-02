import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, centered = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';
