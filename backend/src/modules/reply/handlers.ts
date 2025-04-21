import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { addProductRequestCommentReply } from '@/modules/reply/services';

export const addProductRequestCommentReplyHandler = async (req: Request, res: Response) => {
  const { content, replyingTo, commentId } = matchedData<{
    content: string;
    replyingTo: string;
    commentId: string;
  }>(req);

  const reply = await addProductRequestCommentReply({
    content,
    replyingTo,
    comment: {
      connect: { id: commentId }
    },
    user: {
      connect: { id: '0debe5ab-79db-49df-b13c-dd5821411784' }
    }
  });

  res.status(201).json({ reply });
};
