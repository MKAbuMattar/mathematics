import katex from 'katex';
import 'katex/dist/katex.min.css';
import type React from 'react';
import { cn } from '@/lib/cn';

interface MathProps {
  math?: string;
  children?: React.ReactNode;
  display?: boolean;
  block?: boolean;
  className?: string;
  label?: string;
}

export default function Math({
  math,
  children,
  display,
  block,
  className,
  label,
}: MathProps) {
  const expression = (math ?? (typeof children === 'string' ? children : ''))
    .trim();

  const isBlock = display ?? block ?? false;
  const html = katex.renderToString(expression, {
    displayMode: isBlock,
    throwOnError: false,
    output: 'htmlAndMathml',
    strict: false,
    trust: true,
  });

  if (isBlock) {
    return (
      <div
        className={cn(
          'formula-card my-4 flex flex-col items-start gap-2 overflow-x-auto',
          className,
        )}
        aria-label={label ?? expression}
      >
        {label && (
          <span className="text-xs font-medium uppercase tracking-wider text-text-subtle dark:text-text-subtle-dark">
            {label}
          </span>
        )}
        <div
          className="w-full text-text dark:text-text-dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  return (
    <span
      className={cn('katex-inline', className)}
      aria-label={expression}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
