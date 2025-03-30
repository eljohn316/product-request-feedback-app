import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

export const Sheet = SheetPrimitive.Root;

export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetPortal = SheetPrimitive.Portal;

export function SheetOverlay(
  props: React.ComponentProps<typeof SheetPrimitive.DialogOverlay>
) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-x-0 top-[4.5rem] bottom-0 z-50 bg-black/50'
      )}
      {...props}></SheetPrimitive.Overlay>
  );
}

export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right bg-white-lilac fixed top-[4.5rem] right-0 bottom-0 z-50 h-full w-3/4 p-6 transition ease-in-out outline-none data-[state=closed]:duration-300 data-[state=open]:duration-400 sm:max-w-sm',
          className
        )}
        aria-describedby={undefined}
        {...props}>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title className={cn('sr-only', className)} {...props} />
  );
}
