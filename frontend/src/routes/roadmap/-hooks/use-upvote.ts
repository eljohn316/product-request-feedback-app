import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProductRequest } from '@/api/product-request';
import { type ProductRequest } from '@/lib/types';

export function useUpvote() {
  const queryClient = useQueryClient();
  const { mutate: upvote } = useMutation({
    mutationFn: (productRequest: ProductRequest) =>
      updateProductRequest(productRequest.id, {
        category: productRequest.category,
        upvotes: productRequest.upvotes,
        description: productRequest.description,
        status: productRequest.status,
        title: productRequest.title
      }),
    onMutate: async (newProductRequest) => {
      if (newProductRequest.status === 'planned') {
        await queryClient.cancelQueries({ queryKey: ['planned-products'] });

        const prevRequests = queryClient.getQueryData(['planned-products']);

        queryClient.setQueryData(
          ['planned-products'],
          (old: ProductRequest[]) =>
            old
              .map((item) =>
                item.id === newProductRequest.id
                  ? { ...item, upvotes: newProductRequest.upvotes }
                  : item
              )
              .sort((a, b) => b.upvotes - a.upvotes)
        );

        return {
          prevRequests
        };
      }

      if (newProductRequest.status === 'in-progress') {
        await queryClient.cancelQueries({ queryKey: ['in-progress-products'] });

        const prevRequests = queryClient.getQueryData(['in-progress-products']);

        queryClient.setQueryData(
          ['in-progress-products'],
          (old: ProductRequest[]) =>
            old
              .map((item) =>
                item.id === newProductRequest.id
                  ? { ...item, upvotes: newProductRequest.upvotes }
                  : item
              )
              .sort((a, b) => b.upvotes - a.upvotes)
        );

        return {
          prevRequests
        };
      }

      if (newProductRequest.status === 'live') {
        await queryClient.cancelQueries({ queryKey: ['live-products'] });

        const prevRequests = queryClient.getQueryData(['live-products']);

        queryClient.setQueryData(['live-products'], (old: ProductRequest[]) =>
          old
            .map((item) =>
              item.id === newProductRequest.id
                ? { ...item, upvotes: newProductRequest.upvotes }
                : item
            )
            .sort((a, b) => b.upvotes - a.upvotes)
        );

        return {
          prevRequests
        };
      }
    },
    onError: (_, variables, context) => {
      if (variables.status === 'planned') {
        queryClient.setQueryData(['planned-products'], context?.prevRequests);
      }
      if (variables.status === 'in-progress') {
        queryClient.setQueryData(
          ['in-progress-products'],
          context?.prevRequests
        );
      }
      if (variables.status === 'live') {
        queryClient.setQueryData(['live-products'], context?.prevRequests);
      }
    },
    onSettled: (_, __, variables) => {
      if (variables.status === 'planned') {
        queryClient.invalidateQueries({ queryKey: ['planned-products'] });
      }
      if (variables.status === 'in-progress') {
        queryClient.invalidateQueries({ queryKey: ['in-progress-products'] });
      }
      if (variables.status === 'live') {
        queryClient.invalidateQueries({ queryKey: ['live-products'] });
      }
    }
  });

  return upvote;
}
