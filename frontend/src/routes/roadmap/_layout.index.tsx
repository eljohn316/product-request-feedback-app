import { createFileRoute, useRouter } from '@tanstack/react-router';
import { ProductRequestCard } from '@routes/roadmap/-components/product-request-card';
import {
  ProductRequestTab,
  ProductRequestTabContent,
  ProductRequestTabList,
  ProductRequestTabs
} from '@routes/roadmap/-components/product-request-tabs';
import {
  ProductRequestColumns,
  ProductRequestColumn
} from '@routes/roadmap/-components/product-request-columns';
import { ProductRequestCardSkeleton } from '@routes/roadmap/-components/product-request-card-skeleton';
import {
  getPlannedProductsRequestQueryOptions,
  getLiveProductsRequestQueryOptions,
  getInProgressProductsRequestQueryOptions,
  useProductRequests
} from '@routes/roadmap/-hooks/use-product-requests';
import { useUpvote } from '@routes/roadmap/-hooks/use-upvote';
import { type ProductRequest } from '@/lib/types';

export const Route = createFileRoute('/roadmap/_layout/')({
  loader: ({ context }) => {
    const { queryClient } = context;

    Promise.all([
      queryClient.ensureQueryData(getPlannedProductsRequestQueryOptions),
      queryClient.ensureQueryData(getLiveProductsRequestQueryOptions),
      queryClient.ensureQueryData(getInProgressProductsRequestQueryOptions)
    ]);
  },
  component: RouteComponent,
  pendingComponent: PendingComponent,
  errorComponent: ErrorComponent
});

function RouteComponent() {
  const { planned, inProgress, live } = useProductRequests();
  const upvote = useUpvote();

  function handleUpvote(productRequest: ProductRequest) {
    upvote({ ...productRequest, upvotes: productRequest.upvotes + 1 });
  }

  return (
    <>
      <ProductRequestTabs defaultValue="planned">
        <ProductRequestTabList>
          <ProductRequestTab value="planned" count={planned.length} />
          <ProductRequestTab value="in-progress" count={inProgress.length} />
          <ProductRequestTab value="live" count={live.length} />
        </ProductRequestTabList>
        <ProductRequestTabContent
          value="planned"
          count={planned.length}
          items={planned}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
        <ProductRequestTabContent
          value="in-progress"
          count={inProgress.length}
          items={inProgress}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
        <ProductRequestTabContent
          value="live"
          count={live.length}
          items={live}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
      </ProductRequestTabs>

      <ProductRequestColumns>
        <ProductRequestColumn
          value="planned"
          count={planned.length}
          items={planned}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
        <ProductRequestColumn
          value="in-progress"
          count={inProgress.length}
          items={inProgress}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
        <ProductRequestColumn
          value="live"
          count={live.length}
          items={live}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item)}
            />
          )}
        />
      </ProductRequestColumns>
    </>
  );
}

function PendingComponent() {
  return (
    <>
      <ProductRequestTabs defaultValue="planned">
        <ProductRequestTabList>
          <ProductRequestTab value="planned" />
          <ProductRequestTab value="in-progress" />
          <ProductRequestTab value="live" />
        </ProductRequestTabList>
        <ProductRequestTabContent
          value="planned"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="planned" />
              <ProductRequestCardSkeleton status="planned" />
              <ProductRequestCardSkeleton status="planned" />
            </>
          }
        />
        <ProductRequestTabContent
          value="in-progress"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="in-progress" />
              <ProductRequestCardSkeleton status="in-progress" />
              <ProductRequestCardSkeleton status="in-progress" />
            </>
          }
        />
        <ProductRequestTabContent
          value="live"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="live" />
              <ProductRequestCardSkeleton status="live" />
              <ProductRequestCardSkeleton status="live" />
            </>
          }
        />
      </ProductRequestTabs>

      <ProductRequestColumns>
        <ProductRequestColumn
          value="planned"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="planned" />
              <ProductRequestCardSkeleton status="planned" />
              <ProductRequestCardSkeleton status="planned" />
            </>
          }
        />
        <ProductRequestColumn
          value="in-progress"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="in-progress" />
              <ProductRequestCardSkeleton status="in-progress" />
              <ProductRequestCardSkeleton status="in-progress" />
            </>
          }
        />
        <ProductRequestColumn
          value="live"
          items={[]}
          renderItems={() => null}
          placeholder={
            <>
              <ProductRequestCardSkeleton status="live" />
              <ProductRequestCardSkeleton status="live" />
              <ProductRequestCardSkeleton status="live" />
            </>
          }
        />
      </ProductRequestColumns>
    </>
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
