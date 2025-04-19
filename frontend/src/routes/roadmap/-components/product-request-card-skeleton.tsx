import { Skeleton } from '@/components/ui/skeleton';

export function ProductRequestCardSkeleton({
  status
}: {
  status: 'planned' | 'in-progress' | 'live';
}) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-[0.625rem] bg-white px-6 py-[1.375rem] md:rounded-[0.3125rem] md:px-5 md:pt-[1.625rem] md:pb-6 lg:p-8">
      {status === 'planned' && (
        <Skeleton className="bg-tangering absolute inset-x-0 top-0 h-1.5" />
      )}
      {status === 'in-progress' && (
        <Skeleton className="bg-electric-violet absolute inset-x-0 top-0 h-1.5" />
      )}
      {status === 'live' && (
        <Skeleton className="bg-malibu absolute inset-x-0 top-0 h-1.5" />
      )}
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <Skeleton className="size-2 shrink-0 rounded-full" />
        <Skeleton className="h-3 w-14" />
      </div>
      <div className="mt-6 space-y-3 md:mt-6 lg:mt-5 lg:space-y-2">
        <Skeleton className="h-3.5 max-w-2/5 lg:h-5 lg:max-w-3/4" />
        <Skeleton className="h-3.5 lg:mt-4 lg:h-4" />
        <Skeleton className="hidden h-3.5 md:block lg:h-4" />
      </div>
      <Skeleton className="mt-4 h-6 max-w-20 md:mt-8 lg:mt-4" />
      <div className="mt-4 flex items-center justify-between">
        <Skeleton className="h-4 max-w-14 flex-1 md:h-6" />
        <Skeleton className="h-4 max-w-14 flex-1 md:h-6" />
      </div>
    </div>
  );
}
