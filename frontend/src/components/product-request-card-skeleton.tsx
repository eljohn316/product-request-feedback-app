import { Skeleton } from '@/components/ui/skeleton';

export function ProductRequestCardSkeleton() {
  return (
    <div className="rounded-[0.625rem] bg-white p-6 md:flex md:px-8 md:py-7">
      <div className="hidden md:mr-10 md:block md:flex-none">
        <Skeleton className="h-14 w-9" />
      </div>
      <div className="md:flex md:flex-1 md:items-center md:justify-between md:gap-x-8">
        <div className="md:flex-1">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="mt-3 h-4 md:mt-2" />
          <Skeleton className="mt-2 h-4" />
          <Skeleton className="mt-3 h-4 w-28" />
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-2.5">
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="mt-4 flex items-center justify-between md:hidden">
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}
