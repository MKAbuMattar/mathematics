import type React from 'react';
import { cn } from '@/lib/cn';

interface TooltipProps {
  tip: string;
  children: React.ReactNode;
  className?: string;
}

export default function Tooltip({ tip, children, className }: TooltipProps) {
  return (
    <span className={cn('group relative inline-block', className)}>
      <span className="cursor-help underline decoration-dashed decoration-text-subtle underline-offset-2 dark:decoration-text-subtle-dark">
        {children}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-text px-2 py-1 text-xs text-surface opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-text-dark dark:text-surface-dark"
      >
        {tip}
      </span>
    </span>
  );
}
