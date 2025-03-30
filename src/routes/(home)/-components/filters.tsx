import { cn } from '@/lib/utils';
import { FilterButton } from '@/components/filter-button';

const FILTERS = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export function Filters({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-x-2 gap-y-3.5 rounded-[0.625rem] bg-white p-6',
        className
      )}>
      {FILTERS.map((item) => (
        <FilterButton key={item} active={item === 'All'}>
          {item}
        </FilterButton>
      ))}
    </div>
  );
}
