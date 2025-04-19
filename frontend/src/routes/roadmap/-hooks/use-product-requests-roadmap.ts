import { getProductsRequestRoadmap } from '@/api/product-request';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const productRequestRoadmapQueryOptions = queryOptions({
  queryKey: ['roadmap'],
  queryFn: getProductsRequestRoadmap
});

export function useProductRequestRoadmap() {
  const { data: productRequests } = useSuspenseQuery(
    productRequestRoadmapQueryOptions
  );

  return productRequests;
}
