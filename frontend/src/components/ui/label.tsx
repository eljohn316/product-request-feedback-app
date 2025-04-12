import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/lib/utils';

export function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] md:text-sm md:-tracking-[0.011875rem]',
        className
      )}
      {...props}
    />
  );
}
