import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        'my-4 overflow-hidden rounded-lg border border-border dark:border-border-dark not-prose',
        className,
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 bg-surface-2 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-surface-3 dark:bg-surface-2-dark dark:hover:bg-surface-3-dark"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3 text-sm leading-relaxed dark:border-border-dark">
          {children}
        </div>
      )}
    </div>
  );
}
