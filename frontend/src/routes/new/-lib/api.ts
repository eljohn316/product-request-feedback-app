import { axios } from '@/lib/axios';
import { ProductRequest } from '@routes/new/-lib/types';

type CreateNewProductRequestArgs = {
  title: string;
  category: 'ui' | 'ux' | 'enhancement' | 'bug' | 'feature';
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
