import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { createNewProductRequest } from '@routes/new/-lib/api';

export function useCreateProductRequest() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNewProductRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['product-request', 'comments']
      });
      navigate({ to: '/$id', params: { id: data.id } });
    }
  });
}
