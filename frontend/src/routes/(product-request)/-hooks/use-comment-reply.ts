import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { addProductRequestCommentReply } from '@/api/product-request';
import { type Comment } from '@/lib/types';

export function useCommentReply() {
  const productRequestId = useParams({
    from: '/(product-request)/_layout/$id',
    select: (params) => params.id
  });
  const queryClient = useQueryClient();
  const { mutate: reply } = useMutation({
    mutationFn: addProductRequestCommentReply,
    onMutate: async (newReply) => {
      await queryClient.cancelQueries({
        queryKey: [productRequestId, 'comments']
      });

      const prevReplies = queryClient.getQueryData([
        productRequestId,
        'comments'
      ]);

      queryClient.setQueryData(
        [productRequestId, 'comments'],
        (oldReplies: Comment[]): Comment[] => {
          const newCommentReply = {
            id: crypto.randomUUID(),
            content: newReply.content,
            replyingTo: newReply.replyingTo,
            commentId: newReply.commentId,
            user: {
              id: '0debe5ab-79db-49df-b13c-dd5821411784',
              image: '/image-anne.jpg',
              name: 'Anne Valentine',
              username: 'annev1990'
            }
          };

          return oldReplies.map((item) => {
            if (item.id === newReply.commentId)
              return { ...item, replies: [...item.replies, newCommentReply] };
            return item;
          });
        }
      );

      return {
        prevReplies
      };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [productRequestId, 'comments'],
        context?.prevReplies
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [productRequestId, 'comments']
      });
    }
  });

  return reply;
}
