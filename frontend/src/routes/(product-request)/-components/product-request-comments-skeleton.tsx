import { Skeleton } from '@/components/ui/skeleton';

function ProductRequestCommentsSkeletonItem() {
  return (
    <div className="py-6 first:pt-0 last:pb-0 md:py-8">
      <div className="flex items-center gap-x-4 md:gap-x-8">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3.5 w-28 md:w-1/3" />
          <Skeleton className="h-3.5 w-20 md:w-1/4" />
        </div>
        <Skeleton className="h-5 w-14 shrink-0" />
      </div>
      <div className="mt-6 space-y-1.5 md:mt-[1.0625rem] md:pl-[4.5rem]">
        <Skeleton className="h-3.5 w-full md:h-4" />
        <Skeleton className="h-3.5 w-full md:h-4" />
        <Skeleton className="h-3.5 w-3/4 md:h-4" />
      </div>
    </div>
  );
}

export function ProductRequestCommentsSkeleton() {
  return (
    <div className="rounded-[0.625rem] bg-white p-6 md:px-8">
      <Skeleton className="mb-6 h-6 w-24 md:mb-7 md:w-32" />
      <div className="divide-y divide-[#8C92B3]/25">
        <ProductRequestCommentsSkeletonItem />
        <ProductRequestCommentsSkeletonItem />
        <ProductRequestCommentsSkeletonItem />
      </div>
    </div>
  );
}
