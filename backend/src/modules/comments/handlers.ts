import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import {
  getProductRequestComments,
  createProductRequestComment
} from '@/modules/comments/services';

export const getProductRequestCommentsHandler = async (req: Request, res: Response) => {
  const { productId } = matchedData<{ productId: string }>(req);

  const comments = await getProductRequestComments(productId);

  res.json({ comments });
};

export const addProductRequestCommentsHandler = async (req: Request, res: Response) => {
  const { content, productId } = matchedData<{
    content: string;
    productId: string;
  }>(req);

  const comment = await createProductRequestComment({
    content,
    user: {
      connect: { id: '0debe5ab-79db-49df-b13c-dd5821411784' }
    },
    product: {
      connect: { id: productId }
    }
  });

  res.status(200).json({ comment });
};
