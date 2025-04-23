import { db } from '@/db';
import {
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';
import { parseOrderSearchParam } from '@/modules/product-requests/helpers';
import { NotFoundError } from '@/utils/errors';
import { Prisma } from '@prisma/client';

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
      status: true,
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

export const createNewProductRequest = async (payload: Prisma.ProductRequestCreateInput) => {
  const productRequest = await db.productRequest.create({
    data: {
      title: payload.title,
      category: payload.category,
      description: payload.description,
      status: payload.status
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

  return productRequest;
};

export const updateProductRequest = async (
  productId: string,
  payload: Prisma.ProductRequestUpdateInput
) => {
  const productRequest = await db.productRequest.update({
    where: { id: productId },
    data: payload,
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

  return productRequest;
};

export const getProductRequestsRoadmap = async () => {
  const productRequests = await db.productRequest.findMany({
    where: {
      status: {
        notIn: ['suggestion']
      }
    },
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      upvotes: true,
      status: true,
      _count: {
        select: {
          comments: true
        }
      }
    }
  });

  const inProgressProductRequests = productRequests.filter((item) => item.status === 'in-progress');
  const liveProductRequests = productRequests.filter((item) => item.status === 'live');
  const plannedProductRequests = productRequests.filter((item) => item.status === 'planned');

  return {
    inProgress: {
      items: inProgressProductRequests,
      count: inProgressProductRequests.length
    },
    live: {
      items: liveProductRequests,
      count: liveProductRequests.length
    },
    planned: {
      items: plannedProductRequests,
      count: plannedProductRequests.length
    }
  };
};

export const getProductRequestsRoadmapStats = async () => {
  const productRequests = await db.productRequest.findMany({
    where: {
      status: {
        notIn: ['suggestion']
      }
    }
  });

  const plannedCount = productRequests.filter((p) => p.status === 'planned').length;
  const inProgressCount = productRequests.filter((p) => p.status === 'in-progress').length;
  const liveCount = productRequests.filter((p) => p.status === 'live').length;

  return {
    planned: plannedCount,
    inProgress: inProgressCount,
    live: liveCount
  };
};

export const deleteProductRequest = async (productId: string) => {
  const productRequest = await db.productRequest.delete({
    where: { id: productId },
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

  return productRequest;
};
