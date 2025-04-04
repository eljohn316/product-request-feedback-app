import { axios } from '@/lib/axios';
import { ProductRequest } from '@routes/home/-lib/types';
import type {
  SortOptionValue,
  CategoryValue
} from '@routes/home/-lib/constants';

type GetAllProductRequestsOptions = {
  sort: SortOptionValue;
  category: CategoryValue;
};

export const getAllProductRequests = async ({
  sort = 'most-upvotes',
  category = 'all'
}: GetAllProductRequestsOptions) => {
  const params =
    category === 'all'
      ? { status: 'suggestion', sort }
      : { status: 'suggestion', sort, category };

  const response = await axios.get<{ productRequests: ProductRequest[] }>(
    '/product-requests',
    { params }
  );

  return response.data.productRequests;
};
