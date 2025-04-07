import { Link } from '@tanstack/react-router';
import { type ProductRequest } from '@routes/home/-lib/types';
import { ProductRequestCard } from '@/components/product-request-card';

interface ProductRequestItemProps {
  productRequest: ProductRequest;
}

export function ProductRequestItem({
  productRequest
}: ProductRequestItemProps) {
  function handleUpvote(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // console.log(handle upvote here)
  }

  return (
    <Link
      to="/$id"
      params={{ id: productRequest.id }}
      className="[&:hover_h4]:text-royal-blue">
      <ProductRequestCard
        productRequest={productRequest}
        onUpvote={handleUpvote}
      />
    </Link>
  );
}
