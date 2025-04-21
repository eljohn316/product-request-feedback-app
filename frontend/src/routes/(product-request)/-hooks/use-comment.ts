import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { type Comment } from '@/lib/types';
import { addProductRequestComment } from '@/api/product-request';

export function useComment() {
  const queryClient = useQueryClient();
  const productRequestId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });
  const { mutate: comment } = useMutation({
    mutationFn: addProductRequestComment,
    onMutate: async (newComment) => {
      await queryClient.cancelQueries({
        queryKey: [productRequestId, 'comments']
      });

      const prevComments = queryClient.getQueryData([
        productRequestId,
        'comments'
      ]);

      queryClient.setQueryData(
        [productRequestId, 'comments'],
        (old: Comment[]) => [
          ...old,
          {
            id: crypto.randomUUID(),
            content: newComment.content,
            replies: [],
            user: {
              id: '0debe5ab-79db-49df-b13c-dd5821411784',
              image: '/image-anne.jpg',
              name: 'Anne Valentine',
              username: 'annev1990'
            }
          }
        ]
      );

      return {
        prevComments
      };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [productRequestId, 'comments'],
        context?.prevComments
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [productRequestId, 'comments']
      });
    }
  });

  return comment;
}
