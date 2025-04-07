import { createFileRoute } from '@tanstack/react-router';
import { ProductRequestCard } from '@/components/product-request-card';

const productRequest = {
  id: '89099265-8433-46dd-beb1-6c9582350632',
  title: 'Add tags for solutions',
  description: 'Easier to search for solutions based on a specific stack.',
  category: 'enhancement',
  upvotes: 112,
  status: 'suggestion',
  _count: { comments: 2 }
};

export const Route = createFileRoute('/(product-request)/_layout/$id')({
  component: RouteComponent
});

function RouteComponent() {
  console.log('I rerendered parent component');
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
