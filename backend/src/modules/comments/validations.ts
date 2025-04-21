import { param, body } from 'express-validator';
import { validationResultHandler } from '@/middlewares/validation-handler';

export const getProductRequestCommentsValidations = [
  param('productId').exists().withMessage("Missing required parameter: 'productId'")
];

export const addProductRequestCommentsValidations = [
  body('content').exists({ values: 'falsy' }).withMessage('Content is required'),
  body('productId').exists({ values: 'falsy' }).withMessage('Product id is required'),
  validationResultHandler
];
