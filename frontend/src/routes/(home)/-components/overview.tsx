import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductRequestsStats } from '@routes/home/-hooks/use-product-requests-stats';

export function Overview({ className }: { className?: string }) {
  const { isPending, isError, data } = useProductRequestsStats();

  if (isPending)
    return (
      <div className={cn('rounded-[0.625rem] bg-white px-6 py-5', className)}>
        <div className="flex items-center justify-between">
          <p className="heading-3 text-east-bay">Roadmap</p>
          <button className="text-royal-blue/25 pointer-events-none text-[0.8125rem] leading-0 font-semibold">
            View
          </button>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <div className="bg-tangering size-2 flex-none rounded-full" />
            <p className="text-waikawa-gray ml-2 text-base">Planned</p>
            <Skeleton className="ml-auto size-4 shrink-0" />
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-electric-violet size-2 flex-none rounded-full" />
            <p className="text-waikawa-gray ml-2 text-base">In-Progress</p>
            <Skeleton className="ml-auto size-4 shrink-0" />
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-malibu size-2 flex-none rounded-full" />
            <p className="text-waikawa-gray ml-2 text-base">Live</p>
            <Skeleton className="ml-auto size-4 shrink-0" />
          </div>
        </div>
      </div>
    );

  if (isError) return null;

  return (
    <div className={cn('rounded-[0.625rem] bg-white px-6 py-5', className)}>
      <div className="flex items-center justify-between">
        <p className="heading-3 text-east-bay">Roadmap</p>
        {data.planned == 0 && data.inProgress == 0 && data.live == 0 ? (
          <button className="text-royal-blue/25 pointer-events-none text-[0.8125rem] leading-0 font-semibold">
            View
          </button>
        ) : (
          <Link
            to="/roadmap"
            className="text-royal-blue text-[0.8125rem] leading-0 font-semibold underline hover:text-[#8397F8]">
            View
          </Link>
        )}
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="bg-tangering size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">Planned</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">
            {data.planned}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-electric-violet size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">In-Progress</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">
            {data.inProgress}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-malibu size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">Live</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">
            {data.live}
          </p>
        </div>
      </div>
    </div>
  );
}
