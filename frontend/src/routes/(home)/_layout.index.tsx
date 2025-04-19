import { createFileRoute, useRouter } from '@tanstack/react-router';
import { ProductRequestCardSkeleton } from '@/components/product-request-card-skeleton';
import { ProductRequestItem } from '@routes/home/-components/product-request-item';
import { ProductRequestEmpty } from '@routes/home/-components/product-request-empty';
import {
  useProductRequests,
  productRequestsQueryOptions
} from '@routes/home/-hooks/use-product-requests';
import { productRequestsStatsQueryOptions } from '@routes/home/-hooks/use-product-requests-stats';

export const Route = createFileRoute('/(home)/_layout/')({
  loaderDeps: ({ search: { sort, category } }) => ({ sort, category }),
  loader: ({ context, deps }) => {
    const { queryClient } = context;
    const { sort, category } = deps;
    Promise.all([
      queryClient.ensureQueryData(
        productRequestsQueryOptions({ sort, category })
      ),
      queryClient.ensureQueryData(productRequestsStatsQueryOptions)
    ]);
  },
  component: RouteComponent,
  pendingComponent: PendingComponent,
  errorComponent: ErrorComponent
});

function RouteComponent() {
  const productRequests = useProductRequests();

  if (productRequests.length === 0) return <ProductRequestEmpty />;

  return (
    <div className="space-y-4">
      {productRequests.map((item) => (
        <ProductRequestItem key={item.id} productRequest={item} />
      ))}
    </div>
  );
}

function PendingComponent() {
  return (
    <div className="space-y-4">
      <ProductRequestCardSkeleton />
      <ProductRequestCardSkeleton />
      <ProductRequestCardSkeleton />
      <ProductRequestCardSkeleton />
    </div>
  );
}

function ErrorComponent() {
  const router = useRouter();

  return (
    <div className="rounded-[0.625rem] bg-white px-6 py-10 text-center">
      <h2 className="heading-2 text-east-bay">Something went wrong</h2>
      <button
        className="text-royal-blue mt-4 inline-flex cursor-pointer text-sm font-medium hover:underline"
        onClick={() => router.invalidate()}>
        Try again
      </button>
    </div>
  );
}
