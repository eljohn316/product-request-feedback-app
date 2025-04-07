import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { getProductRequest } from '@routes/product-request/-lib/api';

export const productRequestQueryOptions = (productRequestId: string) =>
  queryOptions({
    queryKey: [productRequestId],
    queryFn: () => getProductRequest(productRequestId)
  });

export function useProductRequest() {
  const productRequestId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });

  const { data } = useSuspenseQuery(
    productRequestQueryOptions(productRequestId)
  );

  return data;
}
