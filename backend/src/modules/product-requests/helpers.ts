import { Prisma } from '@prisma/client';
import { type SortOptions } from '@/modules/product-requests/constants';

export const parseOrderSearchParam = (
  sort: SortOptions
): Prisma.ProductRequestOrderByWithRelationInput => {
  switch (sort) {
    case 'most-comments': {
      return {
        comments: {
          _count: 'desc'
        }
      };
    }
    case 'least-comments': {
      return {
        comments: {
          _count: 'asc'
        }
      };
    }
    case 'most-upvotes': {
      return {
        upvotes: 'desc'
      };
    }
    case 'least-upvotes': {
      return {
        upvotes: 'asc'
      };
    }
  }
};
