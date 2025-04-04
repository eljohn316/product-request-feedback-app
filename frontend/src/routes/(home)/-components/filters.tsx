import { z } from 'zod';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { searchParamsSchema } from '@routes/home/-lib/schema';
import { CATEGORIES } from '@routes/home/-lib/constants';

import { FilterButton } from '@/components/filter-button';
import { useIsMobile } from '@/hooks/use-is-mobile';

type CategoryValue = z.infer<typeof searchParamsSchema>['category'];

export function Filters({
  className,
  onCloseSheet
}: {
  className?: string;
  onCloseSheet: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { category } = useSearch({ from: '/(home)/_layout' });

  function handleUpdateCategorySearchParam(value: CategoryValue) {
    if (isMobile) onCloseSheet(false);
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
