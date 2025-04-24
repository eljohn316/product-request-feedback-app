import {
  createFileRoute,
  Link,
  Outlet,
  useParams
} from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ReturnLink } from '@/components/return-link';

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
        <ReturnLink />
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
