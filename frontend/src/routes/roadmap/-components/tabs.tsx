{
  /* <Tabs defaultValue="in-progress" className="md:hidden">
        <TabsList>
          <TabsTrigger value="planned">Planned (2)</TabsTrigger>
          <TabsTrigger value="in-progress">In-Progress (3)</TabsTrigger>
          <TabsTrigger value="live">Live (1)</TabsTrigger>
        </TabsList>
        <TabsContent value="planned">
          <div className="space-y-1">
            <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
              Planned (2)
            </p>
            <p className="text-waikawa-gray text-[0.8125rem]">
              Ideas prioritized for research
            </p>
          </div>
          <div className="space-y-4"></div>
        </TabsContent>
        <TabsContent value="in-progress">
          <div className="space-y-1">
            <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
              In-Progress (3)
            </p>
            <p className="text-waikawa-gray text-[0.8125rem]">
              Features currently being developed
            </p>
          </div>
          <div className="space-y-4">
            <ProductRequestCard />
          </div>
        </TabsContent>
        <TabsContent value="live">
          <div className="space-y-1">
            <p className="text-east-bay text-lg font-bold -tracking-[0.01125rem]">
              Live (1)
            </p>
            <p className="text-waikawa-gray text-[0.8125rem]">
              Released features
            </p>
          </div>
          <div className="space-y-4"></div>
        </TabsContent>
      </Tabs> */
}

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

function TabsList({
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

function TabsTrigger({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  value: 'planned' | 'in-progress' | 'live';
}) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'data-[state=active]:text-east-bay text-east-bay/40 group relative flex-1 cursor-pointer text-[0.8125rem] font-bold -tracking-[0.01125rem]',
        className
      )}
      value={value}
      {...props}>
      {children}
      {value === 'planned' && (
        <span className="bg-tangering absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
      )}
      {value === 'in-progress' && (
        <span className="bg-electric-violet absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
      )}
      {value === 'live' && (
        <span className="bg-malibu absolute inset-x-0 bottom-0 hidden h-1 group-data-[state=active]:block" />
      )}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> & {
  value: 'planned' | 'in-progress' | 'live';
}) {
  return (
    <TabsPrimitive.Content
      className={cn('space-y-6 p-6', className)}
      value={value}
      {...props}
    />
  );
}
