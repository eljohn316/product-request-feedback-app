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
import { useCreateProductRequest } from '@routes/new/-hooks/use-create-product-request';

const newFeedbackSchema = z.object({
  title: z.string().min(1, { message: "Can't be empty" }),
  category: z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug']),
  detail: z.string().min(1, { message: "Can't be empty" })
});

type NewFeedbackSchema = z.infer<typeof newFeedbackSchema>;

export function NewFeedbackForm() {
  const navigate = useNavigate();
  const form = useForm<NewFeedbackSchema>({
    resolver: zodResolver(newFeedbackSchema),
    defaultValues: {
      title: '',
      category: 'feature',
      detail: ''
    }
  });

  const {
    mutate: createProductRequest,
    isPending,
    error
  } = useCreateProductRequest();

  function handleAddNewFeedback(values: NewFeedbackSchema) {
    createProductRequest({
      title: values.title,
      category: values.category,
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
        <form onSubmit={form.handleSubmit(handleAddNewFeedback)}>
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
                    <TextareaInput className="mt-4" {...field} />
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
                      <SelectTrigger className="mt-4">
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
                    <TextareaInput className="mt-4" {...field} />
                  </FormControl>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10 flex flex-col gap-y-4 md:mt-8 md:flex-row-reverse md:gap-x-4 md:gap-y-0">
            <Button fill="violet" type="submit" disabled={isPending}>
              {isPending ? 'Adding Feedback' : 'Add feedback'}
            </Button>
            <Button
              fill="eastbay"
              disabled={isPending}
              onClick={() => navigate({ to: '..' })}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
