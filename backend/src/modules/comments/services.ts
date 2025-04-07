import { db } from '@/db';

export const getProductRequestComments = async (productId: string) => {
  const comments = await db.comment.findMany({
    where: {
      productId
    },
    select: {
      id: true,
      content: true,
      user: {
        select: {
          id: true,
          image: true,
          name: true,
          username: true
        }
      },
      replies: {
        select: {
          id: true,
          content: true,
          replyingTo: true,
          user: {
            select: {
              id: true,
              image: true,
              name: true,
              username: true
            }
          }
        }
      }
    }
  });

  return comments;
};
