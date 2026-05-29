import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SpoilerProps {
  children: ReactNode;
  className?: string;
}

export default function Spoiler({ children, className }: SpoilerProps) {
  const [revealed, setRevealed] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      aria-label={revealed ? undefined : 'Reveal hidden content'}
      className={cn(
        'mx-0.5 rounded px-1 text-left transition-colors',
        revealed
          ? 'bg-surface-3 dark:bg-surface-3-dark cursor-text'
          : 'cursor-pointer bg-text text-text select-none dark:bg-text-dark dark:text-text-dark',
        className,
      )}
    >
      <span aria-hidden={!revealed}>{children}</span>
    </button>
  );
}
