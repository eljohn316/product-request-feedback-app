import * as React from 'react';
import { ArrowUpIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function UpvoteButton({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'group bg-zircon active:bg-royal-blue text-east-bay [&_svg]:text-royal-blue inline-flex cursor-pointer items-center gap-x-2.5 rounded-[0.625rem] px-4 py-1.5 hover:bg-[#CFD7FF] active:text-white md:flex-col md:gap-x-0 md:gap-y-2 md:px-[0.6875rem] md:pt-3.5 md:pb-2 [&:active_svg]:text-white',
        className
      )}
      {...props}>
      <ArrowUpIcon aria-hidden="true" />
      <span className="text-[0.8125rem] font-bold -tracking-[0.18px]">
        {children}
      </span>
    </button>
  );
}
