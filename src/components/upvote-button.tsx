import * as React from 'react';
import { ArrowUpIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface UpvoteButtonProps extends React.ComponentProps<'button'> {}

export function UpvoteButton({
  className,
  children,
  ...props
}: UpvoteButtonProps) {
  return (
    <button
      className={cn(
        'group bg-zircon active:bg-royal-blue inline-flex cursor-pointer items-center gap-x-2.5 rounded-[0.625rem] px-4 py-1.5 hover:bg-[#CFD7FF] md:flex-col md:gap-x-0 md:gap-y-2 md:px-[0.6875rem] md:pt-3.5 md:pb-2',
        className
      )}
      {...props}>
      <ArrowUpIcon
        aria-hidden="true"
        className="text-royal-blue group-active:text-white"
      />
      <span className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px] group-active:text-white">
        {children}
      </span>
    </button>
  );
}
