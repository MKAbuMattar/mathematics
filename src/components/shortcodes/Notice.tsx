import type React from 'react';
import { Info, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/cn';

type NoticeType = 'info' | 'tip' | 'warning' | 'note';

interface NoticeProps {
  type?: NoticeType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  NoticeType,
  { Icon: typeof Info; label: string; classes: string }
> = {
  info: {
    Icon: Info,
    label: 'Info',
    classes: 'border-sky-500/30 bg-sky-50 text-sky-950 dark:bg-sky-950/40 dark:text-sky-100',
  },
  tip: {
    Icon: Lightbulb,
    label: 'Tip',
    classes:
      'border-emerald-500/30 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100',
  },
  warning: {
    Icon: AlertTriangle,
    label: 'Warning',
    classes:
      'border-amber-500/30 bg-amber-50 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100',
  },
  note: {
    Icon: BookOpen,
    label: 'Note',
    classes:
      'border-violet-500/30 bg-violet-50 text-violet-950 dark:bg-violet-950/40 dark:text-violet-100',
  },
};

export default function Notice({ type = 'info', title, children }: NoticeProps) {
  const { Icon, label, classes } = config[type];
  return (
    <aside
      className={cn(
        'my-5 rounded-lg border-l-4 px-4 py-3 not-prose',
        classes,
      )}
    >
      <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
        <Icon size={16} aria-hidden />
        <span>{title ?? label}</span>
      </div>
      <div className="text-sm leading-relaxed [&>p]:my-1.5 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
