import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { TextareaInput } from '@/components/ui/textarea-input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import type { ProductRequest, Category, Status } from '@/lib/types';
import { useUpdateProductRequest } from '@routes/edit-product-request/-hooks/use-update-product-request';

const editProductRequestSchema = z.object({
  title: z.string().min(1, { message: "Can't be empty" }),
  category: z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug']),
  status: z.enum(['suggestion', 'planned', 'in-progress', 'live']),
  detail: z.string().min(1, { message: "Can't be empty" })
});

type EditProductRequest = z.infer<typeof editProductRequestSchema>;

export function EditProductRequestForm({
  productRequest
}: {
  productRequest: ProductRequest;
}) {
  const navigate = useNavigate();
  const form = useForm<EditProductRequest>({
    resolver: zodResolver(editProductRequestSchema),
    defaultValues: {
      title: productRequest.title,
      category: productRequest.category as Category,
      status: productRequest.status as Status,
      detail: productRequest.description
    }
  });

  const { mutate: update, isPending, error } = useUpdateProductRequest();

  function handleEditProductRequest(values: EditProductRequest) {
    update({
      title: values.title,
      category: values.category,
      status: values.status,
      description: values.detail
    });
  }

  return (
    <>
      {error && (
        <div className="bg-crimson/10 text-crimson mb-6 rounded-[0.625rem] px-5 py-4 text-[0.8125rem] md:text-[0.9375rem]">
          Internal server error. Please try again later
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleEditProductRequest)}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-[0.1875rem] md:space-y-0.5">
                    <FormLabel>Feedback Title</FormLabel>
                    <FormDescription>
                      Add a short, descriptive headline
                    </FormDescription>
                  </div>
                  <FormControl>
                    <TextareaInput
                      className="mt-4"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-[0.1875rem] md:space-y-0.5">
                    <FormLabel>Category</FormLabel>
                    <FormDescription>
                      Choose a category for your feedback
                    </FormDescription>
                  </div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-4" disabled={isPending}>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="feature">Feature</SelectItem>
                      <SelectItem value="ui">UI</SelectItem>
                      <SelectItem value="ux">UX</SelectItem>
                      <SelectItem value="enhancement">Enhancement</SelectItem>
                      <SelectItem value="bug">Bug</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-[0.1875rem] md:space-y-0.5">
                    <FormLabel>Update Status</FormLabel>
                    <FormDescription>Change feature state</FormDescription>
                  </div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-4" disabled={isPending}>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="suggestion">Suggestion</SelectItem>
                      <SelectItem value="planned">Planned</SelectItem>
                      <SelectItem value="in-progress">In-Progress</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="detail"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-[0.1875rem] md:space-y-0.5">
                    <FormLabel>Feedback Detail</FormLabel>
                    <FormDescription>
                      Include any specific comments on what should be improved,
                      added, etc.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <TextareaInput
                      className="mt-4"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10 flex flex-col gap-y-4 sm:mt-8 sm:flex-row-reverse sm:gap-x-4 sm:gap-y-0">
            <Button type="submit" fill="violet" disabled={isPending}>
              {isPending ? 'Saving changes' : 'Save changes'}
            </Button>
            <Button
              type="button"
              fill="eastbay"
              disabled={isPending}
              onClick={() => navigate({ to: '..' })}>
              Cancel
            </Button>
            <Button
              type="button"
              fill="crimson"
              className="sm:mr-auto"
              disabled={isPending}>
              Delete
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
