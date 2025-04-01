import { createFileRoute } from '@tanstack/react-router';

import { ProductRequestItem } from '@routes/home/-components/product-request-item';

export const Route = createFileRoute('/(home)/_layout/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <ProductRequestItem />
      <ProductRequestItem />
      <ProductRequestItem />
    </div>
  );
}
