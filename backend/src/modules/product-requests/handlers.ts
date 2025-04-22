import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import {
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';
import {
  createNewProductRequest,
  getAllProductsRequests,
  getProductRequest,
  updateProductRequest,
  getProductRequestsRoadmap,
  getProductRequestsRoadmapStats,
  deleteProductRequest
} from '@/modules/product-requests/services';

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

type GetProductRequestArgs = {
  productId: string;
};

export const getProductRequestHandler = async (req: Request, res: Response) => {
  const { productId } = matchedData<GetProductRequestArgs>(req);
  const productRequest = await getProductRequest(productId);

  res.json({ productRequest });
};

type CreateNewProductRequestArgs = {
  title: string;
  category: string;
  description: string;
  status: string;
};

export const createNewProductRequestHandler = async (req: Request, res: Response) => {
  const { title, category, description, status } = matchedData<CreateNewProductRequestArgs>(req);
  const productRequest = await createNewProductRequest({ title, category, description, status });

  res.status(201).json({ productRequest });
};

export const updateProductRequestHandler = async (req: Request, res: Response) => {
  const { productId, title, category, status, description, upvotes } = matchedData<{
    productId: string;
    title?: string;
    category?: string;
    upvotes?: number;
    status?: string;
    description?: string;
  }>(req);

  const productRequest = await updateProductRequest(productId, {
    title,
    category,
    upvotes,
    status,
    description
  });

  res.status(200).json({ productRequest });
};

export const getProductRequestsRoadmapHandler = async (req: Request, res: Response) => {
  const productRequests = await getProductRequestsRoadmap();

  res.status(200).json({ productRequests });
};

export const getProductRequestsRoadmapStatsHandler = async (req: Request, res: Response) => {
  const productRequestStats = await getProductRequestsRoadmapStats();

  res.status(200).json({
    productRequests: productRequestStats
  });
};

export const deleteProductRequestHandler = async (req: Request, res: Response) => {
  const { productId } = matchedData<{ productId: string }>(req);

  const productRequest = await deleteProductRequest(productId);

  res.status(200).json({ productRequest });
};
