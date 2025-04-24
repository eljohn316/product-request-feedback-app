import { isAxiosError } from 'axios';
import { axios } from '@/lib/axios';
import { NotFoundError } from '@/lib/errors';
import type {
  ProductRequest,
  Comment,
  Category,
  Reply,
  Status
} from '@/lib/types';
import type { SortOptionValue, CategoryValue } from '@/constants';

type GetAllProductRequestsOptions = Partial<{
  sort: SortOptionValue;
  category: CategoryValue;
  status: Status;
}>;

export const getAllProductRequests = async ({
  sort = 'most-upvotes',
  category = 'all',
  status = 'suggestion'
}: GetAllProductRequestsOptions) => {
  const params =
    category === 'all'
      ? { status: status, sort }
      : { status: status, sort, category };

  const response = await axios.get<{ productRequests: ProductRequest[] }>(
    '/product-requests',
    { params }
  );

  return response.data.productRequests;
};

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

type CreateNewProductRequestArgs = {
  title: string;
  category: Category;
  description: string;
};

export const createNewProductRequest = async ({
  title,
  category,
  description
}: CreateNewProductRequestArgs) => {
  const response = await axios.post<{ productRequest: ProductRequest }>(
    '/product-requests',
    {
      title,
      category,
      description
    }
  );

  return response.data.productRequest;
};

export type UpdateProductRequestArgs = Partial<{
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}>;

export const updateProductRequest = async (
  productId: string,
  payload: UpdateProductRequestArgs
) => {
  const response = await axios.patch<{ productRequest: ProductRequest }>(
    `/product-requests/${productId}`,
    {
      title: payload.title,
      category: payload.category,
      upvotes: payload.upvotes,
      status: payload.status,
      description: payload.description
    }
  );

  return response.data.productRequest;
};

export const deleteProductRequest = async (productId: string) => {
  const response = await axios.delete<{ productRequest: ProductRequest }>(
    `/product-requests/${productId}`
  );

  return response.data.productRequest;
};

type ProductRequestRoadmapStats = {
  productRequests: {
    planned: number;
    inProgress: number;
    live: number;
  };
};

export const getProductsRequestRoadmapStats = async () => {
  const response = await axios.get<ProductRequestRoadmapStats>(
    '/product-requests/roadmap-stats'
  );

  return response.data.productRequests;
};

export const getProductRequestComments = async (productId: string) => {
  const response = await axios.get<{ comments: Comment[] }>(
    `/comments/${productId}`
  );

  return response.data.comments;
};

export const addProductRequestComment = async ({
  content,
  productId
}: {
  content: string;
  productId: string;
}) => {
  const response = await axios.post<{ comment: Comment }>(
    `/comments/${productId}`,
    {
      content,
      productId
    }
  );

  return response.data.comment;
};

export const addProductRequestCommentReply = async ({
  content,
  replyingTo,
  commentId
}: {
  content: string;
  replyingTo: string;
  commentId: string;
}) => {
  const response = await axios.post<{ reply: Reply }>(`/reply`, {
    content,
    replyingTo,
    commentId
  });

  return response.data.reply;
};
