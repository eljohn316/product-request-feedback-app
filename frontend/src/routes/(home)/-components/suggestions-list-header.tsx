import { z } from 'zod';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { searchParamsSchema } from '@routes/home/-lib/schema';
import { SORT_OPTIONS } from '@/constants';

import { ArrowDownIcon, SuggestionsIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown';

type SortValue = z.infer<typeof searchParamsSchema>['sort'];

const SORT_OPTIONS_LABEL = [
  { value: 'most-upvotes', label: 'Most Upvotes' },
  { value: 'least-upvotes', label: 'Least Upvotes' },
  { value: 'most-comments', label: 'Most Comments' },
  { value: 'least-comments', label: 'Least Comments' }
] as const;

export function SuggestionsListHeader() {
  const navigate = useNavigate();
  const { sort, category } = useSearch({ from: '/(home)/_layout/' });

  function handleUpdateSortSearchParam(value: string) {
    navigate({ to: '/', search: { category, sort: value as SortValue } });
  }

  return (
    <div className="bg-rhino flex items-center justify-between px-6 py-2 md:justify-normal md:rounded-[0.625rem] md:py-3.5 md:pr-3">
      <div className="hidden items-center gap-x-4 md:flex">
        <SuggestionsIcon className="size-6" />
        <p className="heading-3 text-white">6 Suggestions</p>
      </div>
      <div className="md:mr-auto md:ml-[2.375rem]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-zircon -m-1 inline-flex cursor-pointer items-center p-1 text-[0.8125rem] outline-none md:text-sm">
              <span>Sort by :</span>
              <span className="ml-1 font-bold">
                {SORT_OPTIONS_LABEL.find(({ value }) => value === sort)?.label}
              </span>
              <ArrowDownIcon className="ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={42}>
            <DropdownMenuRadioGroup
              value={sort}
              onValueChange={handleUpdateSortSearchParam}>
              {SORT_OPTIONS.map(({ label, value }) => (
                <DropdownMenuRadioItem key={label} value={value}>
                  {label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button fill="violet" asChild>
        <Link to="/new">+ Add Feedback</Link>
      </Button>
    </div>
  );
}
