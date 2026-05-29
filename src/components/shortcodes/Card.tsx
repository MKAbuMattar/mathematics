import type React from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  title?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Card({ title, href, className, children }: CardProps) {
  const inner = (
    <>
      {title && (
        <h3 className="mb-2 text-base font-semibold tracking-tight">{title}</h3>
      )}
      <div className="text-sm text-text-muted dark:text-text-muted-dark [&>p]:m-0">
        {children}
      </div>
    </>
  );

  const cls = cn(
    'block rounded-xl border border-border bg-surface-2 p-5 transition-colors dark:border-border-dark dark:bg-surface-2-dark not-prose',
    href && 'cursor-pointer hover:border-primary hover:bg-primary-soft dark:hover:bg-primary-soft-dark/30',
    className,
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
}
