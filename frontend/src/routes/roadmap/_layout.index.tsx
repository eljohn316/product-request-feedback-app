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
  productRequestRoadmapQueryOptions,
  useProductRequestRoadmap
} from '@routes/roadmap/-hooks/use-product-requests-roadmap';

export const Route = createFileRoute('/roadmap/_layout/')({
  loader: ({ context }) => {
    const { queryClient } = context;
    queryClient.ensureQueryData(productRequestRoadmapQueryOptions);
  },
  component: RouteComponent,
  pendingComponent: PendingComponent,
  errorComponent: ErrorComponent
});

function RouteComponent() {
  const productRequests = useProductRequestRoadmap();

  function handleUpvote(productRequestId: string) {
    console.log('Product request id: ', productRequestId);
  }

  return (
    <>
      <ProductRequestTabs defaultValue="planned">
        <ProductRequestTabList>
          <ProductRequestTab
            value="planned"
            count={productRequests.planned.count}
          />
          <ProductRequestTab
            value="in-progress"
            count={productRequests.inProgress.count}
          />
          <ProductRequestTab value="live" count={productRequests.live.count} />
        </ProductRequestTabList>
        <ProductRequestTabContent
          value="planned"
          count={productRequests.planned.count}
          items={productRequests.planned.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
            />
          )}
        />
        <ProductRequestTabContent
          value="in-progress"
          count={productRequests.inProgress.count}
          items={productRequests.inProgress.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
            />
          )}
        />
        <ProductRequestTabContent
          value="live"
          count={productRequests.live.count}
          items={productRequests.live.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
            />
          )}
        />
      </ProductRequestTabs>

      <ProductRequestColumns>
        <ProductRequestColumn
          value="planned"
          count={productRequests.planned.count}
          items={productRequests.planned.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
            />
          )}
        />
        <ProductRequestColumn
          value="in-progress"
          count={productRequests.inProgress.count}
          items={productRequests.inProgress.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
            />
          )}
        />
        <ProductRequestColumn
          value="live"
          count={productRequests.live.count}
          items={productRequests.live.items}
          renderItems={(item) => (
            <ProductRequestCard
              key={item.id}
              productRequest={item}
              onUpvote={() => handleUpvote(item.id)}
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
