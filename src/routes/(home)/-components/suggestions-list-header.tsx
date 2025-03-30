import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, SuggestionsIcon } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown';

export function SuggestionsListHeader() {
  const [filter, setFilter] = useState('most-upvotes');

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
              <span className="ml-1 font-bold">Most Upvotes</span>
              <ArrowDownIcon className="ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={42}>
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
              <DropdownMenuRadioItem value="most-upvotes">
                Most Upvotes
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="least-upvotes">
                Least Upvotes
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="most-comments">
                Most Comments
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="least-comments">
                Least Comments
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button fill="violet">+ Add Feedback</Button>
    </div>
  );
}
