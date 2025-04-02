import {
  createFileRoute,
  Outlet,
  stripSearchParams
} from '@tanstack/react-router';
import { useIsMobile } from '@/hooks/use-is-mobile';

import { searchParamsSchema } from '@routes/home/-lib/schema';
import { DEFAULT_SEARCH_PARAMS } from '@routes/home/-lib/constants';
import { MobileHeader } from '@routes/home/-components/mobile-header';
import { SuggestionsListHeader } from '@routes/home/-components/suggestions-list-header';
import { Filters } from '@routes/home/-components/filters';
import { Overview } from '@routes/home/-components/overview';
import { TitleCard } from '@routes/home/-components/title-card';

export const Route = createFileRoute('/(home)/_layout')({
  validateSearch: searchParamsSchema,
  search: { middlewares: [stripSearchParams(DEFAULT_SEARCH_PARAMS)] },
  component: RouteComponent
});

function RouteComponent() {
  const isMobile = useIsMobile();

  return (
    <div className="md:px-4 lg:mx-auto lg:mt-[5.875rem] lg:flex lg:max-w-6xl lg:gap-x-[1.875rem] lg:px-6">
      <div className="hidden lg:block lg:w-64 lg:flex-none lg:space-y-6">
        <TitleCard className="flex-1" />
        <Filters className="flex-1" />
        <Overview className="flex-1" />
      </div>
      <div className="md:mx-auto md:max-w-4xl md:px-10 md:py-14 lg:max-w-none lg:flex-1 lg:p-0">
        {isMobile && <MobileHeader />}
        <div className="hidden md:mb-10 md:flex md:gap-x-2.5 lg:hidden">
          <TitleCard className="flex-1" />
          <Filters className="flex-1" />
          <Overview className="flex-1" />
        </div>
        <SuggestionsListHeader />
        <div className="px-6 py-8 md:px-0 md:py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
