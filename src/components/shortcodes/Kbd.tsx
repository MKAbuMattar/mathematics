import type React from 'react';
import { cn } from '@/lib/cn';

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export default function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center rounded border border-border bg-surface-3 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-text dark:border-border-dark dark:bg-surface-3-dark dark:text-text-dark',
        className,
      )}
    >
      {children}
    </kbd>
  );
}
