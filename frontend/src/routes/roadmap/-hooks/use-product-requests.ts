import { getAllProductRequests } from '@/api/product-request';
import { queryOptions, useSuspenseQueries } from '@tanstack/react-query';

export const getPlannedProductsRequestQueryOptions = queryOptions({
  queryKey: ['planned-products'],
  queryFn: () =>
    getAllProductRequests({ status: 'planned', sort: 'most-upvotes' })
});

export const getLiveProductsRequestQueryOptions = queryOptions({
  queryKey: ['live-products'],
  queryFn: () => getAllProductRequests({ status: 'live', sort: 'most-upvotes' })
});

export const getInProgressProductsRequestQueryOptions = queryOptions({
  queryKey: ['in-progress-products'],
  queryFn: () =>
    getAllProductRequests({ status: 'in-progress', sort: 'most-upvotes' })
});

export function useProductRequests() {
  const { planned, inProgress, live } = useSuspenseQueries({
    queries: [
      getPlannedProductsRequestQueryOptions,
      getLiveProductsRequestQueryOptions,
      getInProgressProductsRequestQueryOptions
    ],
    combine: (result) => {
      return {
        planned: result[0].data,
        live: result[1].data,
        inProgress: result[2].data
      };
    }
  });

  return { planned, inProgress, live };
}
