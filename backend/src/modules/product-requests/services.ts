import { db } from '@/db';
import {
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';
import { parseOrderSearchParam } from '@/modules/product-requests/helpers';
import { NotFoundError } from '@/utils/errors';

type GetAllProductsRequestsOptions = {
  category?: Categories;
  sort: SortOptions;
  status?: Status;
};

export const getAllProductsRequests = async (opts: GetAllProductsRequestsOptions) => {
  const productRequests = await db.productRequest.findMany({
    where: {
      category: {
        equals: opts.category
      },
      status: {
        equals: opts.status
      }
    },
    orderBy: parseOrderSearchParam(opts.sort),
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      upvotes: true,
      status: true,
      _count: {
        select: {
          comments: true
        }
      }
    }
  });

  return productRequests;
};

export const getProductRequest = async (productId: string) => {
  const productRequest = await db.productRequest.findUnique({
    where: {
      id: productId
    },
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      upvotes: true,
      _count: {
        select: {
          comments: true
        }
      }
    }
  });

  if (!productRequest) throw new NotFoundError('Product request not found');

  return productRequest;
};
