import type React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface QuoteProps {
  cite?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Quote({ cite, children, className }: QuoteProps) {
  return (
    <figure
      className={cn(
        'my-6 rounded-xl border border-border bg-surface-2 p-5 not-prose dark:border-border-dark dark:bg-surface-2-dark',
        className,
      )}
    >
      <QuoteIcon size={20} className="mb-2 text-primary" aria-hidden />
      <blockquote className="text-base leading-relaxed text-text dark:text-text-dark">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-3 text-sm font-medium text-text-muted dark:text-text-muted-dark">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}
