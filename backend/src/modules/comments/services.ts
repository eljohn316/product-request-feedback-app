import { db } from '@/db';
import { Prisma } from '@prisma/client';

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

export const createProductRequestComment = async (payload: Prisma.CommentCreateInput) => {
  const comment = await db.comment.create({
    data: payload,
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

  return comment;
};
