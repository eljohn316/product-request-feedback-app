import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { getProductRequestComments } from '@/modules/comments/services';

export const getProductRequestCommentsHandler = async (req: Request, res: Response) => {
  const { productId } = matchedData<{ productId: string }>(req);

  const comments = await getProductRequestComments(productId);

  res.json({ comments });
};
