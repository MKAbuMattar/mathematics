import type React from 'react';
import { cn } from '@/lib/cn';

type BadgeColor = 'primary' | 'green' | 'amber' | 'red' | 'slate' | 'violet';

interface BadgeProps {
  color?: BadgeColor;
  className?: string;
  children: React.ReactNode;
}

const colors: Record<BadgeColor, string> = {
  primary:
    'border-primary/30 bg-primary-soft text-primary dark:bg-primary-soft-dark/40',
  green:
    'border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  amber:
    'border-amber-500/30 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  red: 'border-red-500/30 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
  slate:
    'border-border bg-surface-3 text-text-muted dark:border-border-dark dark:bg-surface-3-dark dark:text-text-muted-dark',
  violet:
    'border-violet-500/30 bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
};

export default function Badge({
  color = 'slate',
  className,
  children,
}: BadgeProps) {
  return (
    <span className={cn('badge-base', colors[color], className)}>{children}</span>
  );
}
