import { db } from '@/db';
import { Prisma } from '@prisma/client';

export const addProductRequestCommentReply = async (data: Prisma.ReplyCreateInput) => {
  const reply = await db.reply.create({
    data,
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
  });

  return reply;
};
