import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center rounded-[0.625rem] px-4 py-[0.65625rem] text-[0.8125rem] md:px-6 md:py-[0.78125rem] md:text-sm disabled:cursor-not-allowed font-bold transition-colors duration-200',
  {
    variants: {
      fill: {
        violet:
          'bg-electric-violet text-zircon hover:bg-[#C75AF6] disabled:bg-[#C75AF6]',
        blue: 'bg-royal-blue text-zircon hover:bg-[#7C91F9] disabled:bg-[#7C91F9]',
        eastbay:
          'bg-east-bay text-zircon hover:bg-[#656EA3] disabled:bg-[#656EA3]',
        crimson:
          'bg-crimson text-zircon hover:bg-[#E98888] disabled:bg-[#E98888]'
      }
    }
  }
);

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  fill,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={cn(buttonVariants({ fill, className }))} {...props} />
  );
}
