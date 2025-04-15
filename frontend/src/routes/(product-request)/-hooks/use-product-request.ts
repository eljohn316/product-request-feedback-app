import { queryOptions, useSuspenseQueries } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import {
  getProductRequest,
  getProductRequestComments
} from '@/api/product-request';

export const productRequestQueryOptions = (productRequestId: string) =>
  queryOptions({
    queryKey: [productRequestId, 'product-request'],
    queryFn: () => getProductRequest(productRequestId)
  });

export const productRequestCommentsQueryOptions = (productRequestId: string) =>
  queryOptions({
    queryKey: [productRequestId, 'comments'],
    queryFn: () => getProductRequestComments(productRequestId)
  });

export function useProductRequest() {
  const productRequestId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });

  const {
    '0': { data: productRequest },
    '1': { data: comments }
  } = useSuspenseQueries({
    queries: [
      productRequestQueryOptions(productRequestId),
      productRequestCommentsQueryOptions(productRequestId)
    ]
  });

  return { productRequest, comments };
}
