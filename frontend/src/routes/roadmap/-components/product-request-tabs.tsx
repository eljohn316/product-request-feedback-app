import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { type ProductRequest } from '@/lib/types';

interface ProductRequestTabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root> {
  defaultValue: 'planned' | 'in-progress' | 'live';
}

export function ProductRequestTabs({
  defaultValue,
  ...props
}: ProductRequestTabsProps) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      className="md:hidden"
      {...props}
    />
  );
}

export function ProductRequestTabList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        'flex h-[3.625rem] border-b border-[#8C92B3]/25',
        className
      )}
      {...props}
    />
  );
}

interface ProductRequestTabProps
  extends React.ComponentProps<typeof TabsPrimitive.TabsTrigger> {
  value: 'planned' | 'in-progress' | 'live';
  count?: number;
}

export function ProductRequestTab({
  value,
  count,
  ...props
}: ProductRequestTabProps) {
  const content = (
    <>
      {value === 'planned' && (
        <>
          Planned {count && `(${count})`}
          <span className="bg-tangering absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
        </>
      )}
      {value === 'in-progress' && (
        <>
          In-Progress {count && `(${count})`}
          <span className="bg-electric-violet absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
        </>
      )}
      {value === 'live' && (
        <>
          Live {count && `(${count})`}
          <span className="bg-malibu absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
        </>
      )}
    </>
  );

  return (
    <TabsPrimitive.Trigger
      className="data-[state=active]:text-east-bay text-east-bay/40 group relative flex-1 cursor-pointer text-[0.8125rem] font-bold -tracking-[0.01125rem]"
      value={value}
      {...props}>
      {content}
    </TabsPrimitive.Trigger>
  );
}

interface ProductRequestTabContentProps
  extends React.ComponentProps<typeof TabsPrimitive.TabsContent> {
  value: 'planned' | 'in-progress' | 'live';
  count?: number;
  items: ProductRequest[];
  renderItems: (item: ProductRequest) => React.ReactNode;
  placeholder?: React.ReactNode;
}

export function ProductRequestTabContent({
  value,
  count,
  items,
  renderItems,
  placeholder,
  ...props
}: ProductRequestTabContentProps) {
  const header = (
    <>
      {value === 'planned' && (
        <>
          <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
            Planned {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray text-[0.8125rem]">
            Ideas prioritized for research
          </p>
        </>
      )}
      {value === 'in-progress' && (
        <>
          <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
            In-Progress {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray text-[0.8125rem]">
            Features currently being developed
          </p>
        </>
      )}
      {value === 'live' && (
        <>
          <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
            Live {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray text-[0.8125rem]">
            Released features
          </p>
        </>
      )}
    </>
  );

  if (placeholder)
    return (
      <TabsPrimitive.Content className="space-y-6 p-6" value={value} {...props}>
        <div className="space-y-1">{header}</div>
        <div className="space-y-4">{placeholder}</div>
      </TabsPrimitive.Content>
    );

  return (
    <TabsPrimitive.Content className="space-y-6 p-6" value={value} {...props}>
      <div className="space-y-1">{header}</div>
      <div className="space-y-4">{items.map(renderItems)}</div>
    </TabsPrimitive.Content>
  );
}
