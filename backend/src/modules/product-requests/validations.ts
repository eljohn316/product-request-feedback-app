import { param, query } from 'express-validator';
import {
  CATEGORIES,
  SORT_OPTIONS,
  STATUS,
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';

export const getAllProductRequestsValidations = [
  query('category')
    .optional()
    .customSanitizer((value: Categories) => {
      if (!CATEGORIES.includes(value)) return;
      return value;
    })
    .trim()
    .escape(),
  query('sort')
    .default('most-upvotes')
    .customSanitizer((value: SortOptions) => {
      if (!SORT_OPTIONS.includes(value)) return 'most-upvotes';
      return value;
    })
    .trim()
    .escape(),
  query('status')
    .optional()
    .customSanitizer((value: Status) => {
      if (!STATUS.includes(value)) return 'suggestion';
      return value;
    })
    .trim()
    .escape(),
  query('select')
    .optional()
    .customSanitizer((value: unknown) => {
      if (typeof value !== 'string') return '';
      return value;
    })
    .trim()
    .escape()
];

export const getProductRequestValidations = [
  param('productId').exists().withMessage("Missing required parameter: 'productId'")
];
