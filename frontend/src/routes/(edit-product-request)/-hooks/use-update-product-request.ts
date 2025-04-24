import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from '@tanstack/react-router';
import {
  updateProductRequest,
  type UpdateProductRequestArgs
} from '@/api/product-request';

export function useUpdateProductRequest() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const productRequestId = useParams({
    from: '/(edit-product-request)/_layout/$id/edit',
    select: (params) => params.id
  });

  return useMutation({
    mutationFn: (data: UpdateProductRequestArgs) =>
      updateProductRequest(productRequestId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [productRequestId, 'product-request', 'comments']
      });
      navigate({ to: '/roadmap' });
    }
  });
}
