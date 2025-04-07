import { createFileRoute } from '@tanstack/react-router';
import { ProductRequestCardSkeleton } from '@/components/product-request-card-skeleton';
import { ProductRequestItem } from '@routes/home/-components/product-request-item';
import { ProductRequestEmpty } from '@routes/home/-components/product-request-empty';
import {
  useProductRequests,
  productRequestsQueryOptions
} from '@routes/home/-hooks/use-product-requests';

export const Route = createFileRoute('/(home)/_layout/')({
  loaderDeps: ({ search: { sort, category } }) => ({ sort, category }),
  loader: ({ context, deps }) => {
    const { queryClient } = context;
    const { sort, category } = deps;
    queryClient.ensureQueryData(
      productRequestsQueryOptions({ sort, category })
    );
  },
  component: RouteComponent,
  pendingComponent: PendingComponent
  /**
   * TODO:
   * 1. Handle error and create component for error
   * 2. Create a Link to return back to home for categories with empty results
   */
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
