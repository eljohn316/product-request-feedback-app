import { isAxiosError } from 'axios';
import { axios } from '@/lib/axios';
import { NotFoundError } from '@/lib/errors';
import {
  type Comment,
  type ProductRequest
} from '@routes/product-request/-lib/types';

export const getProductRequest = async (productId: string) => {
  try {
    const response = await axios.get<{ productRequest: ProductRequest }>(
      `/product-requests/${productId}`
    );

    return response.data.productRequest;
  } catch (error) {
    if (
      isAxiosError<{ error: string }>(error) &&
      error.status === 404 &&
      error.response?.data
    ) {
      throw new NotFoundError(error.response.data.error);
    }

    throw error;
  }
};

export const getProductRequestComments = async (productId: string) => {
  const response = await axios.get<{ comments: Comment[] }>(
    `/comments/${productId}`
  );

  return response.data.comments;
};
