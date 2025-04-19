import { getProductsRequestRoadmapStats } from '@/api/product-request';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const productRequestsStatsQueryOptions = queryOptions({
  queryKey: ['roadmap-stats'],
  queryFn: getProductsRequestRoadmapStats
});

export function useProductRequestsStats() {
  return useQuery(productRequestsStatsQueryOptions);
}
