import { z } from 'zod';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { searchParamsSchema } from '@routes/home/-lib/schema';
import { CATEGORIES } from '@routes/home/-lib/constants';

import { FilterButton } from '@/components/filter-button';

type CategoryValue = z.infer<typeof searchParamsSchema>['category'];

export function Filters({ className }: { className?: string }) {
  const navigate = useNavigate();
  const { category } = useSearch({ from: '/(home)/_layout' });

  function handleUpdateCategorySearchParam(value: CategoryValue) {
    navigate({ to: '/', search: { category: value, sort: 'most-upvotes' } });
  }

  return (
    <div
      className={cn(
        'flex flex-wrap gap-x-2 gap-y-3.5 rounded-[0.625rem] bg-white p-6',
        className
      )}>
      {CATEGORIES.map(({ label, value }) => (
        <FilterButton
          key={label}
          active={category === value}
          onClick={() => handleUpdateCategorySearchParam(value)}>
          {label}
        </FilterButton>
      ))}
    </div>
  );
}
