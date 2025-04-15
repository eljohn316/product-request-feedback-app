import {
  createFileRoute,
  ErrorComponentProps,
  Link,
  useRouter
} from '@tanstack/react-router';
import { NotFoundError } from '@/lib/errors';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@/components/icons';
import { EditProductRequestForm } from '@routes/edit-product-request/-components/edit-product-request-form';
import {
  productRequestQueryOptions,
  useProductRequest
} from '@routes/edit-product-request/-hooks/use-product-request';

export const Route = createFileRoute(
  '/(edit-product-request)/_layout/$id/edit'
)({
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

  return (
    <>
      <div className="mb-6 md:mb-10">
        <h3 className="text-east-bay text-lg font-bold -tracking-[0.015625rem] md:text-2xl md:-tracking-[0.020625rem]">
          Editing &apos;{productRequest.title}&apos;
        </h3>
      </div>
      <EditProductRequestForm productRequest={productRequest} />
    </>
  );
}

function PendingComponent() {
  return (
    <>
      <Skeleton className="mb-6 h-8 w-32 md:mb-10 md:h-9 md:w-1/2" />
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-[0.1875rem] md:space-y-0.5">
            <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] md:text-sm md:-tracking-[0.011875rem]">
              Feedback Title
            </p>
            <p className="text-waikawa-gray text-[0.8125rem] md:text-sm">
              Add a short, descriptive headline
            </p>
          </div>
          <Skeleton className="h-20" />
        </div>
        <div className="space-y-4">
          <div className="space-y-[0.1875rem] md:space-y-0.5">
            <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] md:text-sm md:-tracking-[0.011875rem]">
              Category
            </p>
            <p className="text-waikawa-gray text-[0.8125rem] md:text-sm">
              Choose a category for your feedback
            </p>
          </div>
          <Skeleton className="h-[3.125rem]" />
        </div>
        <div className="space-y-4">
          <div className="space-y-[0.1875rem] md:space-y-0.5">
            <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] md:text-sm md:-tracking-[0.011875rem]">
              Update Status
            </p>
            <p className="text-waikawa-gray text-[0.8125rem] md:text-sm">
              Change feature state
            </p>
          </div>
          <Skeleton className="h-[3.125rem]" />
        </div>
        <div className="space-y-4">
          <div className="space-y-[0.1875rem] md:space-y-0.5">
            <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] md:text-sm md:-tracking-[0.011875rem]">
              Feedback Detail
            </p>
            <p className="text-waikawa-gray text-[0.8125rem] md:text-sm">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </div>
          <Skeleton className="h-20" />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-y-4 sm:mt-8 sm:flex-row-reverse sm:gap-x-4 sm:gap-y-0">
        <Button fill="violet" className="pointer-events-none">
          Save changes
        </Button>
        <Button fill="eastbay" className="pointer-events-none">
          Cancel
        </Button>
        <Button fill="crimson" className="pointer-events-none sm:mr-auto">
          Delete
        </Button>
      </div>
    </>
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
