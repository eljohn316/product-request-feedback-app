import { body, param, query } from 'express-validator';
import {
  CATEGORIES,
  SORT_OPTIONS,
  STATUS,
  type Categories,
  type SortOptions,
  type Status
} from '@/modules/product-requests/constants';
import { validationResultHandler } from '@/middlewares/validation-handler';

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

export const createNewProductRequestValidations = [
  body('title').exists({ values: 'falsy' }).withMessage('Title is required'),
  body('category')
    .exists({ values: 'falsy' })
    .withMessage('Category is required')
    .bail()
    .isIn(CATEGORIES)
    .withMessage(`Invalid value. Allowed values are ${CATEGORIES.join(', ')}`),
  body('description').exists({ values: 'falsy' }).withMessage('Description is required'),
  body('status')
    .default('suggestion')
    .isIn(STATUS)
    .withMessage(`Invalid value. Allowed values are ${STATUS.join(', ')}`),
  validationResultHandler
];

export const updateProductRequestValidations = [
  param('productId').exists().withMessage("Missing required parameter: 'productId'"),
  body('title').optional({ values: 'falsy' }),
  body('category').optional({ values: 'falsy' }),
  body('upvotes').optional({ values: 'falsy' }).toInt(),
  body('status').optional({ values: 'falsy' }),
  body('description').optional({ values: 'falsy' }),
  validationResultHandler
];
