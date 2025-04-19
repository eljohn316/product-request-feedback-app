import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearch } from '@tanstack/react-router';
import {
  updateProductRequest,
  UpdateProductRequestArgs
} from '@/api/product-request';
import { type ProductRequest } from '@/lib/types';

export function useUpvote(productId: string) {
  const queryClient = useQueryClient();
  const { sort, category } = useSearch({ from: '/(home)/_layout/' });
  const { mutate: upvote } = useMutation({
    mutationFn: (data: UpdateProductRequestArgs) =>
      updateProductRequest(productId, data),
    onMutate: async (newProductRequest) => {
      await queryClient.cancelQueries({
        queryKey: ['product-requests', category, sort]
      });

      const prevRequests = queryClient.getQueryData([
        'product-requests',
        category,
        sort
      ]);

      queryClient.setQueryData(
        ['product-requests', category, sort],
        (old: ProductRequest[]) =>
          old.map((item) =>
            item.id === productId
              ? { ...item, upvotes: newProductRequest.upvotes }
              : item
          )
      );

      return { prevRequests };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        ['product-requests', category, sort],
        context?.prevRequests
      );
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['product-requests', category, sort]
      })
  });

  return upvote;
}
