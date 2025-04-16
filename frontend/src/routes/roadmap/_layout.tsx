import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { ReturnLink } from '@/components/return-link';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/roadmap/_layout')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="md:px-10 md:py-14 lg:mx-auto lg:max-w-6xl lg:pt-[4.875rem]">
      <div className="bg-east-bay flex items-center justify-between px-6 py-[1.625rem] md:rounded-[0.625rem] md:px-8">
        <div className="space-y-[0.1875rem] md:space-y-1">
          <ReturnLink to=".." className="text-white [&_svg]:text-[#CDD2EE]">
            Go Back
          </ReturnLink>
          <p className="text-[1.125rem] font-bold -tracking-[0.01125rem] text-white md:text-2xl md:-tracking-[0.020625rem]">
            Roadmap
          </p>
        </div>
        <Button fill="violet" asChild>
          <Link to="/new">+ Add Feedback</Link>
        </Button>
      </div>
      <div className="md:mt-8 lg:mt-12">
        <Outlet />
      </div>
    </div>
  );
}
