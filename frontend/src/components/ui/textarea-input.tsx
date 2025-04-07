import * as React from 'react';
import { cn } from '@/lib/utils';

export function TextareaInput({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'focus-visible:border-royal-blue bg-white-lilac text-east-bay block w-full cursor-pointer rounded-[0.3125rem] border border-transparent px-6 py-4 text-[0.9375rem] outline-none placeholder:text-[#8C92B3]',
        className
      )}
      {...props}
    />
  );
}
