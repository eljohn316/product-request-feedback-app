import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import {
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';
import { getAllProductsRequests, getProductRequest } from '@/modules/product-requests/services';

type ProductRequestSearchParams = {
  category?: Categories;
  sort: SortOptions;
  status?: Status;
};

export const getAllProductRequestsHandler = async (req: Request, res: Response) => {
  const { category, sort, status } = matchedData<ProductRequestSearchParams>(req);

  const productRequests = await getAllProductsRequests({ category, sort, status });

  res.status(200).json({
    productRequests
  });
};

export const getProductRequestHandler = async (req: Request, res: Response) => {
  const { productId } = matchedData<{ productId: string }>(req);

  const productRequest = await getProductRequest(productId);

  res.json({ productRequest });
};
