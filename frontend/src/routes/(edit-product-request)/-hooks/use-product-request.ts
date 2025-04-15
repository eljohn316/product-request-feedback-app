import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { getProductRequest } from '@/api/product-request';

export const productRequestQueryOptions = (productRequestId: string) => {
  return queryOptions({
    queryKey: [productRequestId, 'product-request'],
    queryFn: () => getProductRequest(productRequestId)
  });
};

export function useProductRequest() {
  const productRequestId = useParams({
    from: '/(edit-product-request)/_layout/$id/edit',
    select: (params) => params.id
  });

  const { data: productRequest } = useSuspenseQuery(
    productRequestQueryOptions(productRequestId)
  );

  return productRequest;
}
