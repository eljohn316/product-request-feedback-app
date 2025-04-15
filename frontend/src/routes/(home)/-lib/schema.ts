import { z } from 'zod';
import { CATEGORY_VALUES, SORT_OPTION_VALUES } from '@/constants';

const DEFAULT_SEARCH_PARAMS = {
  category: 'all',
  sort: 'most-upvotes'
} as const;

export const searchParamsSchema = z.object({
  category: z.enum(CATEGORY_VALUES).default(DEFAULT_SEARCH_PARAMS.category),
  sort: z.enum(SORT_OPTION_VALUES).default(DEFAULT_SEARCH_PARAMS.sort)
});
