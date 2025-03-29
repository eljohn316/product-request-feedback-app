import { cn } from '@/lib/utils';
import * as React from 'react';

interface FilterButtonProps extends React.ComponentProps<'button'> {
  active?: boolean;
}

export function FilterButton({
  active = false,
  className,
  ...props
}: FilterButtonProps) {
  return (
    <button
      className={cn(
        active
          ? 'bg-royal-blue text-white'
          : 'bg-zircon text-royal-blue hover:bg-[#CFD7FF]',
        'cursor-pointer rounded-[0.625rem] px-4 py-[0.3125rem] text-[0.8125rem] font-semibold'
      )}
      {...props}
    />
  );
}
