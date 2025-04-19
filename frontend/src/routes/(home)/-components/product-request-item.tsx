import { Link } from '@tanstack/react-router';
import { ProductRequestCard } from '@/components/product-request-card';
import { type ProductRequest } from '@/lib/types';
import { useUpvote } from '@routes/home/-hooks/use-upvote';

interface ProductRequestItemProps {
  productRequest: ProductRequest;
}

export function ProductRequestItem({
  productRequest
}: ProductRequestItemProps) {
  const upvote = useUpvote(productRequest.id);

  function handleUpvote(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    upvote({
      title: productRequest.title,
      category: productRequest.category,
      description: productRequest.description,
      upvotes: productRequest.upvotes + 1,
      status: productRequest.status
    });
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
