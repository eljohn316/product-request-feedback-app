import { ProductRequest } from '@/lib/types';
import * as React from 'react';

interface ProductRequestColumnsProps {
  children: React.ReactNode;
}

export function ProductRequestColumns({
  children
}: ProductRequestColumnsProps) {
  return (
    <div className="hidden md:flex md:gap-x-2.5 lg:gap-x-[1.875rem]">
      {children}
    </div>
  );
}

interface ProductRequestColumnProps {
  value: 'planned' | 'in-progress' | 'live';
  count?: number;
  items: ProductRequest[];
  renderItems: (item: ProductRequest) => React.ReactNode;
  placeholder?: React.ReactNode;
}

export function ProductRequestColumn({
  value,
  count,
  items,
  renderItems,
  placeholder
}: ProductRequestColumnProps) {
  const header = (
    <>
      {value === 'planned' && (
        <>
          <p className="text-east-bay font-bold -tracking-[0.011875rem] md:text-sm lg:text-lg lg:-tracking-[0.015625rem]">
            Planned {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray md:text-sm lg:text-base">
            Ideas prioritized for research
          </p>
        </>
      )}
      {value === 'in-progress' && (
        <>
          <p className="text-east-bay font-bold -tracking-[0.011875rem] md:text-sm lg:text-lg lg:-tracking-[0.015625rem]">
            In-Progress {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray md:text-sm lg:text-base">
            Currently being developed
          </p>
        </>
      )}
      {value === 'live' && (
        <>
          <p className="text-east-bay font-bold -tracking-[0.011875rem] md:text-sm lg:text-lg lg:-tracking-[0.015625rem]">
            Live {count && `(${count})`}
          </p>
          <p className="text-waikawa-gray md:text-sm lg:text-base">
            Released features
          </p>
        </>
      )}
    </>
  );

  if (placeholder)
    return (
      <div className="flex-1">
        <div className="space-y-1">{header}</div>
        <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-6">{placeholder}</div>
      </div>
    );

  return (
    <div className="flex-1">
      <div className="space-y-1">{header}</div>
      <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-6">
        {items.map(renderItems)}
      </div>
    </div>
  );
}
