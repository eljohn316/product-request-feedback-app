import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({
  type,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'bg-white-lilac text-east-bay focus-visible:border-royal-blue block w-full rounded-[0.3125rem] border border-transparent px-6 py-[0.8125rem] text-[0.9375rem] outline-none',
        className
      )}
      {...props}
    />
  );
}
