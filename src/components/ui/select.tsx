import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { CheckIcon, ArrowDownIcon, ArrowUpIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'bg-white-lilac text-east-bay focus-visible:border-royal-blue group data-[state=open]:border-royal-blue flex w-full cursor-pointer items-center justify-between rounded-[0.3125rem] border border-transparent px-6 py-[0.8125rem] text-[0.9375rem] whitespace-nowrap outline-none',
        className
      )}
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <>
          <ArrowDownIcon className="text-royal-blue group-data-[state=open]:hidden" />
          <ArrowUpIcon className="text-royal-blue group-data-[state=closed]:hidden" />
        </>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'relative z-50 max-h-[--radix-select-content-available-height] origin-[--radix-select-content-transform-origin] rounded-[0.625rem] bg-white shadow-(--select-content-shadow)',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        sideOffset={16}
        {...props}>
        <SelectPrimitive.SelectViewport
          className={cn(
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}>
          <div className="divide-east-bay/15 divide-y">{children}</div>
        </SelectPrimitive.SelectViewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'text-waikawa-gray hover:text-electric-violet relative flex cursor-pointer items-center px-6 py-3 text-base outline-none select-none'
      )}
      {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute inset-y-0 right-6 flex items-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon aria-hidden="true" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}
