import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { MobileHeader } from './-components/mobile-header';
import { SuggestionsListHeader } from './-components/suggestions-list-header';
import { Filters } from './-components/filters';
import { Overview } from './-components/overview';
import { TitleCard } from './-components/title-card';

export const Route = createFileRoute('/(home)/_layout')({
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
