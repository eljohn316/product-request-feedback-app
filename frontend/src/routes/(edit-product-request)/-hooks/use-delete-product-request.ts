import { deleteProductRequest } from '@/api/product-request';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from '@tanstack/react-router';

export function useDeleteProductRequest() {
  const productId = useParams({
    from: '/(edit-product-request)/_layout/$id/edit',
    select: (params) => params.id
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteProductRequest(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['product-requests']
      });
      navigate({ to: '/', replace: true });
    }
  });
}
