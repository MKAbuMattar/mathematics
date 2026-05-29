import type React from 'react';
import { cn } from '@/lib/cn';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

export default function Steps({ children, className }: StepsProps) {
  return (
    <ol
      className={cn(
        'my-5 ml-0 list-none space-y-3 border-l border-border pl-6 [counter-reset:steps] dark:border-border-dark',
        '[&>li]:relative [&>li]:pl-2 [&>li]:[counter-increment:steps]',
        "[&>li]:before:absolute [&>li]:before:-left-9 [&>li]:before:top-0 [&>li]:before:flex [&>li]:before:h-6 [&>li]:before:w-6 [&>li]:before:items-center [&>li]:before:justify-center [&>li]:before:rounded-full [&>li]:before:bg-primary [&>li]:before:text-xs [&>li]:before:font-semibold [&>li]:before:text-white [&>li]:before:content-[counter(steps)]",
        className,
      )}
    >
      {children}
    </ol>
  );
}
