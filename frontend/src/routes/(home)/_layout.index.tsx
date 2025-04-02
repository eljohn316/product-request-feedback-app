import { createFileRoute } from '@tanstack/react-router';

import { ProductRequestItem } from '@routes/home/-components/product-request-item';
import { ProductRequestEmpty } from '@routes/home/-components/product-request-empty';

export const Route = createFileRoute('/(home)/_layout/')({
  component: RouteComponent
});

const empty = 0; /* Remove this */

function RouteComponent() {
  if (!empty) return <ProductRequestEmpty />;

  return (
    <div className="space-y-4">
      <ProductRequestItem />
      <ProductRequestItem />
      <ProductRequestItem />
      <ProductRequestItem />
    </div>
  );
}
