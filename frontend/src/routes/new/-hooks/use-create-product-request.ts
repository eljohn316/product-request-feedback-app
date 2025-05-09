import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { createNewProductRequest } from '@/api/product-request';

export function useCreateProductRequest() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNewProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['product-request', 'comments']
      });
      navigate({ to: '/' });
    }
  });
}
