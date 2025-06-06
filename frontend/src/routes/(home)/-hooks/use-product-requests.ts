import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { useSearch } from '@tanstack/react-router';
import { type SortOptionValue, type CategoryValue } from '@/constants';
import { getAllProductRequests } from '@/api/product-request';

type ProductRequestsOptions = {
  sort: SortOptionValue;
  category: CategoryValue;
};

export const productRequestsQueryOptions = ({
  category,
  sort
}: ProductRequestsOptions) =>
  queryOptions({
    queryKey: ['product-requests', category, sort],
    queryFn: () => getAllProductRequests({ sort, category })
  });

export function useProductRequests() {
  const { sort, category } = useSearch({ from: '/(home)/_layout/' });
  const { data: productRequests } = useSuspenseQuery(
    productRequestsQueryOptions({ sort, category })
  );

  return productRequests;
}
