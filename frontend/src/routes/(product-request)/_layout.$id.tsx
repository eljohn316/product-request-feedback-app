import {
  createFileRoute,
  useRouter,
  Link,
  ErrorComponentProps
} from '@tanstack/react-router';
import { ArrowLeftIcon } from '@/components/icons';
import { ProductRequestCard } from '@/components/product-request-card';
import { ProductRequestCardSkeleton } from '@/components/product-request-card-skeleton';
import {
  useProductRequest,
  productRequestQueryOptions
} from '@routes/product-request/-hooks/use-product-request';
import { NotFoundError } from '@/lib/errors';

export const Route = createFileRoute('/(product-request)/_layout/$id')({
  loader: ({ context, params }) => {
    const { queryClient } = context;
    const { id } = params;
    queryClient.ensureQueryData(productRequestQueryOptions(id));
  },
  component: RouteComponent,
  pendingComponent: PendingComponent,
  errorComponent: ErrorComponent
});

function RouteComponent() {
  const productRequest = useProductRequest();

  function handleUpvote() {
    console.log('Handle upvote here');
  }

  return (
    <div className="space-y-6">
      <ProductRequestCard
        productRequest={productRequest}
        onUpvote={handleUpvote}
      />
    </div>
  );
}

function PendingComponent() {
  return (
    <div className="space-y-6">
      <ProductRequestCardSkeleton />
    </div>
  );
}

function ErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter();

  if (error instanceof NotFoundError)
    return (
      <div className="rounded-[0.625rem] bg-white px-6 py-10 text-center">
        <h2 className="heading-2 text-east-bay">{error.message}</h2>
        <Link
          to="/"
          className="text-royal-blue mt-4 inline-flex items-center gap-x-4 text-sm font-medium hover:underline">
          <ArrowLeftIcon />
          Go to Home
        </Link>
      </div>
    );

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
