import { z } from 'zod';
import {
  CATEGORY_VALUES,
  SORT_OPTION_VALUES
} from '@routes/home/-lib/constants';
import { DEFAULT_SEARCH_PARAMS } from '@routes/home/-lib/constants';

export const searchParamsSchema = z.object({
  category: z.enum(CATEGORY_VALUES).default(DEFAULT_SEARCH_PARAMS.category),
  sort: z.enum(SORT_OPTION_VALUES).default(DEFAULT_SEARCH_PARAMS.sort)
});
