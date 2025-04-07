import {
  createFileRoute,
  Link,
  Outlet,
  useParams
} from '@tanstack/react-router';
import { ArrowLeftIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(product-request)/_layout')({
  component: RouteComponent
});

function RouteComponent() {
  const productRequestId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });

  return (
    <div className="mx-auto max-w-2xl p-6 md:pt-14 lg:max-w-3xl lg:pt-20">
      <div className="flex items-center justify-between">
        <Link
          to=".."
          className="text-waikawa-gray inline-flex cursor-pointer items-center gap-x-4 text-[0.8125rem] font-bold hover:underline">
          <ArrowLeftIcon className="text-royal-blue" />
          Go Back
        </Link>
        <Button fill="blue" asChild>
          <Link to="/$id/edit" params={{ id: productRequestId }}>
            Edit Feedback
          </Link>
        </Button>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
