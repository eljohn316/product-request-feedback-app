import {
  updateProductRequest,
  type UpdateProductRequestArgs
} from '@/api/product-request';
import { type ProductRequest } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

export function useUpvote() {
  const queryClient = useQueryClient();
  const productId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });
  const { mutate: upvote } = useMutation({
    mutationFn: (data: UpdateProductRequestArgs) =>
      updateProductRequest(productId, data),
    onMutate: async (newProductRequest) => {
      await queryClient.cancelQueries({
        queryKey: [productId, 'product-request']
      });

      const prevRequest = queryClient.getQueryData([
        productId,
        'product-request'
      ]);

      queryClient.setQueryData(
        [productId, 'product-request'],
        (old: ProductRequest) => ({
          ...old,
          upvotes: newProductRequest.upvotes
        })
      );

      return {
        prevRequest
      };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [productId, 'product-request'],
        context?.prevRequest
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [productId, 'product-request']
      });
    }
  });

  return upvote;
}
